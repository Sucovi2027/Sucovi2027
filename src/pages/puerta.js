// src/pages/puerta.js
import { buildHeader } from '../header.js'
import { escucharInvitados, actualizarInvitado, buscarInvitadoPorToken } from '../firebase.js'
import { injectStyles } from '../styles.js'

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

export function renderPuerta(app) {
  injectStyles()

  let invitados = [], historial = [], pendingInv = null
  let scannerStream = null, scannerActive = false

  app.innerHTML = buildHeader({
    title: '🚪 Control de puerta',
    sub: 'Solo ingresa quien tiene bono pagado',
    backHref: '/admin'
  }) + `
    <div class="wrap">
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <input id="scan-cod" placeholder="INV-0001"
          style="flex:1;font-size:15px;text-transform:uppercase;letter-spacing:.05em"
          onkeydown="if(event.key==='Enter') window._vPuerta()">
        <button class="btn btn-v" onclick="window._vPuerta()">✓ Validar</button>
        <button class="btn btn-b" onclick="window._abrirScannerPuerta()" style="padding:8px 12px">📷</button>
      </div>

      <div id="scan-res"></div>

      <div id="historial-puerta" style="margin-top:20px"></div>
    </div>

    <!-- Modal de confirmación -->
    <div id="modal-confirm" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:380px;text-align:center">
        <div id="mc-avatar" class="avatar" style="width:60px;height:60px;font-size:20px;margin:0 auto 12px"></div>
        <div id="mc-nombre" style="font-size:20px;font-weight:500;color:#1A3A5C;margin-bottom:4px"></div>
        <div id="mc-codigo" style="font-size:13px;color:#888;margin-bottom:8px"></div>
        <div id="mc-estado" style="margin-bottom:16px"></div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-g" style="flex:1;padding:12px;font-size:14px"
            onclick="window._confirmarIngreso()">✅ Confirmar ingreso</button>
          <button class="btn" style="flex:1;padding:12px;font-size:14px"
            onclick="document.getElementById('modal-confirm').style.display='none'">❌ Cancelar</button>
        </div>
      </div>
    </div>

    <!-- Scanner overlay -->
    <div id="scan-overlay-puerta" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-puerta" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-puerta" style="color:#C9A96E;font-size:13px">Iniciando cámara...</p>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerPuerta()">Cancelar</button>
    </div>`

  // ── Cargar invitados ──────────────────────────────────────────────────────
  escucharInvitados(data => {
    invitados = data
    renderHistorial()
  })

  // ── Validar ───────────────────────────────────────────────────────────────
  window._vPuerta = async () => {
    const cod = document.getElementById('scan-cod').value.trim().toUpperCase()
    const res = document.getElementById('scan-res'); if (!cod) return
    const inv = invitados.find(i => i.codigo === cod)
    if (!inv) {
      res.innerHTML = `<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:4px">${cod} no existe en el sistema.</p>
      </div>`; return
    }
    if (inv.estado === 'ingresado') {
      res.innerHTML = `<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;color:#791F1F;margin-top:6px">
          <strong>${inv.nombre} ${inv.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
      </div>`; return
    }
    if (inv.estado === 'pendiente') {
      res.innerHTML = `<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;color:#633806;margin-top:4px">
          <strong>${inv.nombre} ${inv.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%;font-size:12px"
          onclick="window._cobrarPuerta('${inv.fireId}','${inv.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`; return
    }
    // pagado → mostrar modal de confirmación
    pendingInv = inv
    const iniciales = inv.nombre[0] + (inv.apellido?.[0]||'')
    document.getElementById('mc-avatar').textContent = iniciales
    document.getElementById('mc-nombre').textContent = inv.nombre + ' ' + inv.apellido
    document.getElementById('mc-codigo').textContent = cod + (inv.familia ? ' · Familia ' + inv.familia : '')
    document.getElementById('mc-estado').innerHTML = '<span class="badge b-pago">✅ Bono confirmado</span>'
    document.getElementById('modal-confirm').style.display = 'flex'
  }

  window._confirmarIngreso = async () => {
    if (!pendingInv) return
    document.getElementById('modal-confirm').style.display = 'none'
    const inv = pendingInv
    pendingInv = null
    await actualizarInvitado(inv.fireId, { estado: 'ingresado' })
    const hora = new Date().toLocaleTimeString('es-AR', { hour:'2-digit', minute:'2-digit' })
    historial.unshift({ nombre: inv.nombre + ' ' + inv.apellido, codigo: inv.codigo, hora })
    document.getElementById('scan-res').innerHTML = `<div class="result-ok">
      <p style="font-size:20px;font-weight:500;color:#1A3A5C">✅ ¡Bienvenido/a!</p>
      <p style="font-size:16px;margin-top:6px">${inv.nombre} ${inv.apellido}</p>
      <p style="font-size:13px;color:#3B6D11;margin-top:4px">${inv.codigo} · ${hora}</p>
    </div>`
    document.getElementById('scan-cod').value = ''
    renderHistorial()
  }

  window._cobrarPuerta = async (fireId, codigo) => {
    await actualizarInvitado(fireId, { estado: 'pagado' })
    document.getElementById('scan-cod').value = codigo
    window._vPuerta()
  }

  // ── Historial ─────────────────────────────────────────────────────────────
  function renderHistorial() {
    const el = document.getElementById('historial-puerta'); if (!el) return
    const ingresados = invitados.filter(i => i.estado === 'ingresado')
    if (!ingresados.length && !historial.length) {
      el.innerHTML = '<p style="font-size:12px;color:#aaa;text-align:center">ÚLTIMOS INGRESOS — Sin ingresos todavía</p>'
      return
    }
    el.innerHTML = `
      <p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">
        INGRESOS AL EVENTO (${ingresados.length})
      </p>
      ${ingresados.slice(0, 50).map(i => `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;
          border-bottom:.5px solid #E8EFF5">
          <div class="avatar" style="width:32px;height:32px;font-size:11px;flex-shrink:0">
            ${i.nombre[0]}${i.apellido?.[0]||''}
          </div>
          <div style="flex:1">
            <div style="font-size:13px;font-weight:500">${i.nombre} ${i.apellido}</div>
            <div style="font-size:11px;color:#888">${i.codigo}</div>
          </div>
          <span style="font-size:11px;color:#3A7D44;font-weight:500">✅ Ingresó</span>
        </div>`).join('')}
    `
  }

  // ── Scanner ───────────────────────────────────────────────────────────────
  window._abrirScannerPuerta = async () => {
    const overlay = document.getElementById('scan-overlay-puerta')
    overlay.style.display = 'flex'
    const statusEl = document.getElementById('scan-status-puerta')
    try {
      await loadJsQR()
      scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('scan-video-puerta')
      video.srcObject = scannerStream
      scannerActive = true
      if (statusEl) statusEl.textContent = 'Buscando QR...'
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      const tick = () => {
        if (!scannerActive) return
        if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
          canvas.width = video.videoWidth; canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0)
          const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const code = window.jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' })
          if (code && code.data) {
            const raw = code.data
            window._cerrarScannerPuerta()
            const matchCod   = raw.match(/INV-\d+/)
            const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
            if (matchCod) {
              document.getElementById('scan-cod').value = matchCod[0]
              window._vPuerta()
            } else if (matchToken) {
              buscarInvitadoPorToken(matchToken[1]).then(inv => {
                if (inv) { document.getElementById('scan-cod').value = inv.codigo; window._vPuerta() }
                else if (statusEl) statusEl.textContent = 'Invitado no encontrado'
              })
            }
            return
          }
        }
        if (scannerActive) requestAnimationFrame(tick)
      }
      video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
    } catch(e) {
      if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara.'
    }
  }

  window._cerrarScannerPuerta = () => {
    scannerActive = false
    if (scannerStream) { scannerStream.getTracks().forEach(t => t.stop()); scannerStream = null }
    const overlay = document.getElementById('scan-overlay-puerta')
    if (overlay) overlay.style.display = 'none'
  }
}
