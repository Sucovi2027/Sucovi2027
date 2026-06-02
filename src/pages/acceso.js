import { buildInvHeader } from '../header.js'
// src/pages/acceso.js
import { buscarInvitadoPorToken, escucharPedidosPorInvitado } from '../firebase.js'
import { BODEGAS } from '../firebase.js'
import { injectStyles } from '../styles.js'

// ── QR REAL (qrcode-generator) ────────────────────────────────────────────
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
    const qr = qrcode(0, 'M')
    qr.addData(String(data))
    qr.make()
    const modules = qr.getModuleCount()
    const cellSize = size / modules
    c.width = size; c.height = size
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = '#000'
    for (let row = 0; row < modules; row++) {
      for (let col = 0; col < modules; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize)
        }
      }
    }
  } catch(e) {
    console.error('QR error:', e)
  }
}

const fmt = n => Number(n).toLocaleString('es-AR')

export async function renderAcceso(app, token) {
  injectStyles()
  app.innerHTML = buildInvHeader(null) + `
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <p style="color:#aaa;font-size:14px">Cargando...</p>
    </div>`

  if (!token) { showErr(app, 'Link inválido', 'Este link no contiene información de acreditación.'); return }
  const inv = await buscarInvitadoPorToken(token)
  if (!inv) { showErr(app, 'No encontrado', 'Este link no corresponde a ningún invitado registrado.'); return }

  // Re-render with invitado header now that we have the data
  app.innerHTML = buildInvHeader(inv) + `
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center" id="acc-body"></div>`
  const body = document.getElementById('acc-body')

  if (inv.estado === 'invalidado') {
    body.innerHTML = `<div style="font-size:40px;margin-bottom:12px">🚫</div>
      <h2 style="font-size:18px;color:#A32D2D">Registro invalidado</h2>
      <p style="font-size:13px;color:#666;margin-top:8px">Contactá al organizador.</p>`; return
  }
  if (inv.estado === 'pendiente') {
    body.innerHTML = `<div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027</div>
      <h2 style="font-size:20px;font-weight:500;margin-bottom:6px">${inv.nombre} ${inv.apellido}</h2>
      <span class="badge b-pend" style="display:inline-block;margin-bottom:16px">Pago pendiente</span>
      <div style="background:#FAEEDA;border:.5px solid #C9A96E;border-radius:12px;padding:20px;margin-bottom:14px">
        <p style="font-size:28px;margin-bottom:8px">⏳</p>
        <p style="font-size:14px;font-weight:500;color:#854F0B">Bono pendiente ($35.000)</p>
        <p style="font-size:13px;color:#633806;margin-top:6px">Podés abonar en la puerta el día del evento.</p>
      </div>
      <p style="font-size:12px;color:#888">Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos</p>
      <p style="font-size:12px;color:#aaa;margin-top:8px">José Pannunzio +54 9 11 5400-1313</p>`; return
  }

  // pagado o ingresado — mostrar QR + carrito + stands + vouchers
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
        <div style="font-size:10px;color:#888">${b.region}</div>
      </div>
      <span style="color:#5BA4CF;font-size:14px">›</span>
    </a>`).join('')

  body.innerHTML = `
    <div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027 · FERIA DE VINOS</div>
    <h2 style="font-size:20px;font-weight:500;margin-bottom:4px">${inv.nombre} ${inv.apellido}</h2>
    <span class="badge ${inv.estado==='ingresado'?'b-ingr':'b-pago'}" style="display:inline-block;margin-bottom:16px">
      ${inv.estado==='ingresado'?'✅ Ingresó al evento':'✅ Bono confirmado'}
    </span>

    <!-- QR de ingreso -->
    <div style="background:#F0F4F8;border-radius:12px;padding:16px;margin-bottom:12px;text-align:center">
      <canvas id="qr-acc" width="160" height="160"
        style="display:block;margin:0 auto 8px;border-radius:8px"></canvas>
      <p style="font-size:18px;font-weight:500;color:#1A3A5C;letter-spacing:.12em">${inv.codigo}</p>
      <p style="font-size:11px;color:#aaa;margin-top:3px">
        ${inv.estado==='ingresado'?'Ya ingresaste — ¡Disfrutá!':'Mostrá este código en la entrada'}
      </p>
    </div>

    <!-- Botones de acción -->
    <a href="/carrito?inv=${token}"
      style="display:flex;align-items:center;justify-content:center;gap:8px;
        background:#1A3A5C;color:#fff;border-radius:8px;
        padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:8px">
      🛒 Ver mi carrito de compras
    </a>

    <button onclick="window._abrirScannerAcceso()"
      style="width:100%;display:flex;align-items:center;justify-content:center;gap:8px;
        background:#5BA4CF;color:#fff;border:none;border-radius:8px;
        padding:10px;font-size:13px;font-weight:500;cursor:pointer;margin-bottom:14px">
      📷 Escanear QR de un stand
    </button>

    <!-- Lista de stands -->
    <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
      IR A UN STAND
    </p>
    <div id="stands-lista" style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:14px">
      ${standsHTML}
    </div>

    <!-- Vouchers -->
    <div id="vouchers-acc"></div>

    <p style="font-size:11px;color:#aaa;margin-top:12px;text-align:center">
      Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos
    </p>

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
    </div>`

  setTimeout(() => drawQR('qr-acc', inv.codigo, 160), 50)

  // Scanner para stands
  let accStream = null, accActive = false
  window._abrirScannerAcceso = async () => {
    const overlay = document.getElementById('scan-overlay-acc')
    if (overlay) overlay.style.display = 'flex'
    const statusEl = document.getElementById('scan-status-acc')
    try {
      if (typeof loadJsQR === 'function') await loadJsQR()
      else {
        await new Promise((res,rej) => {
          if (window.jsQR) { res(); return }
          const s = document.createElement('script')
          s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
          s.onload = res; s.onerror = rej
          document.head.appendChild(s)
        })
      }
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
            // Match stand URL pattern
            const match = raw.match(/\/stand\/(\d+)/)
            if (match) {
              window.location.href = '/stand/' + match[1] + '?inv=' + token
            }
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

  // Escuchar pedidos del invitado
  escucharPedidosPorInvitado(inv.fireId, pedidos => {
    const el = document.getElementById('vouchers-acc'); if (!el) return
    if (!pedidos.length) { el.innerHTML = ''; return }
    el.innerHTML = `
      <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px;text-align:left">
        Mis vouchers de retiro
      </p>
      ${pedidos.map(p => {
        const LE = { pagado:'Listo para retirar', entregado:'Entregado' }
        const pago = p.estado === 'pagado'
        return `
          <div style="background:${pago?'#EAF3DE':'#f5f5f5'};border:.5px solid ${pago?'#3B6D11':'#ddd'};
            border-radius:10px;padding:12px 14px;margin-bottom:8px;text-align:left">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <span style="font-size:13px;font-weight:500;color:#6B1C1C">${p.standNombre}</span>
              <span class="badge ${pago?'b-pago':'b-entr'}">${LE[p.estado]||p.estado}</span>
            </div>
            <div style="font-size:12px;color:#555;margin-bottom:6px">
              ${(p.items||[]).map(i=>i.desc).join('<br>')}
            </div>
            <div style="font-size:14px;font-weight:500">$${fmt(p.total||0)}</div>
            ${pago?`<p style="font-size:11px;color:#3B6D11;margin-top:6px">
              Mostrá este voucher en el stand para retirar tus vinos.
            </p>`:''}
          </div>`
      }).join('')}`
  })
}

function showErr(app, title, msg) {
  app.innerHTML = buildInvHeader(null) + `
    <div style="max-width:380px;margin:0 auto;padding:20px 16px;text-align:center">
      <div style="font-size:40px;margin-bottom:12px">❌</div>
    <h2 style="font-size:18px;font-weight:500;color:#A32D2D;margin-bottom:8px">${title}</h2>
    <p style="font-size:14px;color:#666">${msg}</p>
    <p style="font-size:12px;color:#aaa;margin-top:16px">José Pannunzio +54 9 11 5400-1313</p>`
}
