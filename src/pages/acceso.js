// src/pages/acceso.js
import { buildInvHeader } from '../header.js'
import { buscarInvitadoPorToken, escucharPedidosPorInvitado, escucharVinos } from '../firebase.js'
import { BODEGAS } from '../firebase.js'
import { injectStyles } from '../styles.js'

// ── QR lib loader ─────────────────────────────────────────────────────────────
async function loadQRLib() {
  if (window.qrcode) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

async function drawQR(canvasId, data, size) {
  await loadQRLib()
  const c = document.getElementById(canvasId)
  if (!c) return
  try {
    const qr = window.qrcode(0, 'M')
    qr.addData(String(data))
    qr.make()
    const modules = qr.getModuleCount()
    const cellSize = size / modules
    c.width = size; c.height = size
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = '#000'
    for (let row = 0; row < modules; row++)
      for (let col = 0; col < modules; col++)
        if (qr.isDark(row, col))
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize)
  } catch(e) { console.error('QR error:', e) }
}

// ── jsQR loader ───────────────────────────────────────────────────────────────
async function loadJsQR() {
  if (window.jsQR) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

export async function renderAcceso(app, token) {
  injectStyles()
  app.innerHTML = buildInvHeader(null) + `<div style="text-align:center;padding:40px 16px">
    <div style="font-size:13px;color:#aaa">Cargando...</div></div>`

  const inv = await buscarInvitadoPorToken(token)
  if (!inv) { showErr(app, 'Token inválido', 'El link no es válido o expiró.'); return }
  if (inv.estado === 'invalidado') { showErr(app, 'Acceso invalidado', 'Este bono fue invalidado. Consultá con la organización.'); return }
  if (inv.estado === 'pendiente') {
    app.innerHTML = buildInvHeader(inv) + `
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">Pago pendiente</h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Tu bono aún no fue confirmado. Una vez que abones los $35.000 recibirás tu QR de acceso.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">Consultas: José Pannunzio +54 9 11 5400-1313</p>
      </div>`
    return
  }

  // ── Estado: pagado o ingresado ─────────────────────────────────────────────
  let misPedidos = []
  let accStream = null, accActive = false

  // Build stands grid
  const standsHTML = BODEGAS.map(b => `
    <a href="/stand/${b.id}?inv=${token}"
      style="display:flex;align-items:center;gap:8px;background:#fff;
        border:0.5px solid #D6E4F0;border-radius:8px;padding:8px 10px;
        text-decoration:none;color:inherit">
      <div style="width:28px;height:28px;border-radius:50%;background:#EBF4FA;
        color:#1A3A5C;font-size:11px;font-weight:500;display:flex;
        align-items:center;justify-content:center;flex-shrink:0">${b.id}</div>
      <div style="min-width:0;flex:1">
        <div style="font-size:12px;font-weight:500;color:#1A3A5C;
          white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${b.nombre}</div>
        <div style="font-size:10px;color:#888">${b.region||''}</div>
      </div>
      <span style="color:#5BA4CF;font-size:14px">›</span>
    </a>`).join('')

  app.innerHTML = buildInvHeader(inv) + `
    <div style="max-width:480px;margin:0 auto;padding:16px">
      <!-- QR principal -->
      <div style="background:#F0F4F8;border-radius:12px;padding:16px;margin-bottom:12px;text-align:center">
        <div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027 · FERIA DE VINOS</div>
        <div style="font-size:18px;font-weight:500;color:#1A3A5C;margin-bottom:4px">${inv.nombre} ${inv.apellido}</div>
        <span class="badge ${inv.estado==='ingresado'?'b-ingr':'b-pago'}" style="display:inline-block;margin-bottom:12px">
          ${inv.estado==='ingresado'?'✅ Ingresó al evento':'✅ Bono confirmado'}
        </span>
        <canvas id="qr-acc" style="display:block;margin:0 auto 8px;border-radius:8px"></canvas>
        <div style="font-size:18px;font-weight:500;color:#1A3A5C;letter-spacing:.12em">${inv.codigo}</div>
        <div style="font-size:11px;color:#aaa;margin-top:3px">
          ${inv.estado==='ingresado'?'Ya ingresaste — ¡Disfrutá!':'Mostrá este código en la entrada'}
        </div>
      </div>

      <!-- Botones de acción -->
      <a href="/carrito?inv=${token}"
        style="display:flex;align-items:center;justify-content:center;gap:8px;
          background:#1A3A5C;color:#fff;border-radius:8px;
          padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px">
        🛒 Ver mi carrito de compras
      </a>

      <button id="btn-mis-pedidos" onclick="window._togglePedidos()"
        style="width:100%;display:none;align-items:center;justify-content:center;gap:8px;
          background:#3A7D44;color:#fff;border:none;border-radius:8px;
          padding:12px;font-size:14px;font-weight:500;cursor:pointer;margin-bottom:8px">
        📋 Mis pedidos
      </button>

      <div id="mis-pedidos-sec" style="display:none;margin-bottom:14px"></div>

      <button onclick="window._abrirScannerAcceso()"
        style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
          background:#5BA4CF;color:#fff;border:none;border-radius:8px;
          padding:10px;font-size:13px;font-weight:500;cursor:pointer;margin-bottom:8px">
        📷 Escanear QR de un stand
      </button>

      <button onclick="window._abrirRecomendador()"
        style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
          background:linear-gradient(135deg,#6B21A8,#9333EA);color:#fff;border:none;
          border-radius:8px;padding:10px;font-size:13px;font-weight:500;
          cursor:pointer;margin-bottom:14px">
        ✨ ¿Qué vino te recomiendo?
      </button>

      <!-- Lista de stands -->
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">IR A UN STAND</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px">
        ${standsHTML}
      </div>

      <p style="font-size:11px;color:#aaa;text-align:center">Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos</p>
    </div>

    <!-- Scanner overlay -->
    <div id="scan-overlay-acc" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(26,58,92,.92);z-index:300;
      flex-direction:column;align-items:center;justify-content:center;gap:16px">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del stand</p>
      <div style="position:relative">
        <video id="scan-video-acc" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
      </div>
      <p id="scan-status-acc" style="color:#C9A96E;font-size:13px">Cargando escáner...</p>
      <button onclick="window._cerrarScannerAcceso()"
        style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);
          border-radius:8px;padding:8px 20px;cursor:pointer;font-size:13px">
        Cancelar
      </button>
    </div>

    <!-- Modal recomendador IA -->
    <div id="modal-ia" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.6);z-index:300;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:420px;max-height:85vh;overflow-y:auto">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div style="font-size:15px;font-weight:500;color:#6B21A8">✨ Recomendador de vinos</div>
          <button onclick="document.getElementById('modal-ia').style.display='none'"
            style="background:none;border:none;font-size:18px;cursor:pointer;color:#888">✕</button>
        </div>
        <p style="font-size:13px;color:#666;margin-bottom:12px">
          Contame qué tipos de vino te gustan y te recomiendo qué bodegas visitar esta noche.
        </p>
        <textarea id="ia-input" rows="3"
          placeholder="Ej: Me gustan los tintos con cuerpo, poco tanino. También me interesan los espumantes..."
          style="width:100%;border:1px solid #D6E4F0;border-radius:8px;padding:10px;
            font-size:13px;font-family:inherit;resize:none;margin-bottom:10px"></textarea>
        <button onclick="window._pedirRecomendacion()"
          style="width:100%;background:linear-gradient(135deg,#6B21A8,#9333EA);color:#fff;
            border:none;border-radius:8px;padding:11px;font-size:14px;font-weight:500;
            cursor:pointer;margin-bottom:12px">
          🍷 Recomendar
        </button>
        <div id="ia-respuesta" style="display:none;font-size:13px;color:#333;line-height:1.6;
          background:#F5F0FB;border-radius:8px;padding:12px"></div>
      </div>
    </div>`

  // ── QR principal ──────────────────────────────────────────────────────────
  setTimeout(() => drawQR('qr-acc', inv.codigo, 160), 50)

  // ── Mis pedidos ───────────────────────────────────────────────────────────
  escucharPedidosPorInvitado(inv.fireId, peds => {
    misPedidos = peds
    const btn = document.getElementById('btn-mis-pedidos')
    if (btn) {
      btn.style.display = peds.length ? 'flex' : 'none'
      if (peds.length) btn.textContent = '📋 Mis pedidos (' + peds.length + ')'
    }
    const sec = document.getElementById('mis-pedidos-sec')
    if (sec && sec.style.display !== 'none') renderMisPedidos()
  })

  window._togglePedidos = () => {
    const sec = document.getElementById('mis-pedidos-sec')
    if (!sec) return
    sec.style.display = sec.style.display === 'none' ? 'block' : 'none'
    if (sec.style.display === 'block') renderMisPedidos()
  }

  async function renderMisPedidos() {
    const sec = document.getElementById('mis-pedidos-sec')
    if (!sec || sec.style.display === 'none') return
    if (!misPedidos.length) { sec.innerHTML = '<div class="empty">Sin pedidos pagados todavía</div>'; return }

    await loadQRLib()
    const fmt = n => Number(n).toLocaleString('es-AR')

    sec.innerHTML = misPedidos.map(p => {
      const esEnvio = p.retiro === 'envio'
      const entregado = p.estado === 'entregado'
      const reembolsado = p.estado === 'reembolsado' || p.estado === 'cancelado'
      const bgColor = entregado ? '#f5f5f5' : reembolsado ? '#FEE2E2' : esEnvio ? '#EBF4FA' : '#EAF3DE'
      const bdColor = entregado ? '#ddd' : reembolsado ? '#FCA5A5' : esEnvio ? '#5BA4CF' : '#3B6D11'
      const estadoLabel = entregado ? '✅ Entregado' : reembolsado ? '↩️ Reembolsado' : esEnvio ? '🚚 Envío a domicilio' : '🟢 Listo para retirar'
      const items = (p.items||[]).map(i =>
        '<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid rgba(0,0,0,.08);color:#555"><span>' + i.desc + '</span><strong>$' + fmt(i.sub) + '</strong></div>'
      ).join('')
      const qrId = 'vq-' + p.fireId
      return '<div style="background:' + bgColor + ';border:.5px solid ' + bdColor + ';border-radius:10px;padding:14px;margin-bottom:10px">' +
        '<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">' +
        '<div><div style="font-size:14px;font-weight:500;color:#1A3A5C">' + p.standNombre + '</div>' +
        '<div style="font-size:11px;color:#888">Stand #' + p.standId + (p.voucherNum ? ' · VOC-' + String(p.voucherNum).padStart(3,'0') : '') + '</div></div>' +
        '<span style="font-size:11px;font-weight:500">' + estadoLabel + '</span></div>' +
        items +
        '<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$' + fmt(p.total||0) + '</span></div>' +
        (!entregado && !reembolsado && !esEnvio ? '<div style="margin-top:12px;text-align:center"><canvas id="' + qrId + '" style="border-radius:8px;display:block;margin:0 auto"></canvas><div style="font-size:11px;color:#888;margin-top:4px">Mostrá este QR en el stand para retirar</div></div>' : '') +
        (esEnvio && !entregado && !reembolsado ? '<div style="font-size:12px;color:#185FA5;margin-top:8px;text-align:center">Tu pedido será enviado a domicilio. Logística te lo hará llegar.</div>' : '') +
        '</div>'
    }).join('')

    // Draw QRs
    misPedidos.forEach(p => {
      if (p.retiro === 'envio' || p.estado === 'entregado' || p.estado === 'reembolsado' || p.estado === 'cancelado') return
      const canvas = document.getElementById('vq-' + p.fireId)
      if (!canvas || !window.qrcode) return
      try {
        const qr = window.qrcode(0, 'M')
        qr.addData(p.fireId)
        qr.make()
        const mod = qr.getModuleCount(), sz = 220, cs = sz/mod
        canvas.width = sz; canvas.height = sz
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
        ctx.fillStyle = '#000'
        for(let r=0;r<mod;r++) for(let c=0;c<mod;c++)
          if(qr.isDark(r,c)) ctx.fillRect(c*cs,r*cs,cs,cs)
      } catch(e) {}
    })
  }

  // ── Scanner ───────────────────────────────────────────────────────────────
  window._abrirScannerAcceso = async () => {
    const overlay = document.getElementById('scan-overlay-acc')
    if (overlay) overlay.style.display = 'flex'
    const statusEl = document.getElementById('scan-status-acc')
    try {
      await loadJsQR()
      accStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('scan-video-acc')
      video.srcObject = accStream
      accActive = true
      if (statusEl) statusEl.textContent = 'Buscando QR del stand...'
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      const tick = () => {
        if (!accActive) return
        if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
          canvas.width = video.videoWidth; canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0)
          const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const code = window.jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' })
          if (code && code.data) {
            const raw = code.data
            window._cerrarScannerAcceso()
            const match = raw.match(/\/stand\/(\d+)/)
            if (match) window.location.href = '/stand/' + match[1] + '?inv=' + token
            return
          }
        }
        if (accActive) requestAnimationFrame(tick)
      }
      video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
    } catch(e) {
      if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara.'
    }
  }

  window._cerrarScannerAcceso = () => {
    accActive = false
    if (accStream) { accStream.getTracks().forEach(t => t.stop()); accStream = null }
    const overlay = document.getElementById('scan-overlay-acc')
    if (overlay) overlay.style.display = 'none'
  }

  // ── Recomendador IA ───────────────────────────────────────────────────────
  window._abrirRecomendador = () => {
    document.getElementById('modal-ia').style.display = 'flex'
    document.getElementById('ia-respuesta').style.display = 'none'
    document.getElementById('ia-input').value = ''
  }

  window._pedirRecomendacion = async () => {
    const pregunta = document.getElementById('ia-input').value.trim()
    if (!pregunta) return
    const respEl = document.getElementById('ia-respuesta')
    respEl.style.display = 'block'
    respEl.innerHTML = '<span style="color:#9333EA">✨ Pensando en los mejores vinos para vos...</span>'

    // Load vinos from all bodegas
    let todosLosVinos = []
    let loadedCount = 0
    await new Promise(resolve => {
      BODEGAS.forEach(b => {
        escucharVinos(b.id, vinos => {
          vinos.forEach(v => todosLosVinos.push({
            stand: b.id, bodega: b.nombre, region: b.region || '',
            vino: v.nombre, varietal: v.varietal || '',
            descripcion: v.descripcion || '',
            precios: (v.unidades||[]).map(u => u.u + ': $' + Number(u.p).toLocaleString('es-AR')).join(', ')
          }))
          loadedCount++
          if (loadedCount === BODEGAS.length) resolve()
        })
      })
    })

    const cartaTexto = todosLosVinos.length > 0
      ? todosLosVinos.map(v =>
          'Stand #' + v.stand + ' - ' + v.bodega + ' (' + v.region + '): ' + v.vino +
          (v.varietal ? ' - ' + v.varietal : '') +
          (v.descripcion ? ' - ' + v.descripcion : '') +
          ' | ' + v.precios
        ).join('\n')
      : 'No hay vinos cargados aún.'

    const prompt = 'Sos un sommelier experto en vinos argentinos en la Feria de Vinos SUCOVI 2027 en Olivos.\n' +
      'El invitado se llama ' + inv.nombre + '.\n' +
      'Esta es la carta completa de vinos disponibles esta noche:\n\n' + cartaTexto + '\n\n' +
      'El invitado dice: "' + pregunta + '"\n\n' +
      'Recomendá de 2 a 4 vinos específicos de la carta. Para cada uno mencioná el Stand #, la bodega, el vino y por qué lo recomendás. Sé breve, cálido y entusiasta. Respondé en español rioplatense.'

    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] })
      })
      const data = await res.json()
      const texto = data.content?.[0]?.text || 'No pude generar una recomendación.'
      respEl.innerHTML = texto.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    } catch(e) {
      respEl.innerHTML = 'Error al conectar con el recomendador. Intentá de nuevo.'
    }
  }
}

function showErr(app, title, msg) {
  app.innerHTML = buildInvHeader(null) + `
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
      <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${title}</h2>
      <p style="font-size:14px;color:#666">${msg}</p>
      <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>
    </div>`
}
