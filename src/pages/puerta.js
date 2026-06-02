// Shared jsQR scanner — works on iOS Safari, Android, Desktop
// Call: window._initScanner(videoId, onFound, statusId)
// onFound receives raw QR string
window._scannerStop = null

async function _loadJsQR() {
  if (window.jsQR) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

window._initScanner = async function(videoId, onFound, statusId) {
  const statusEl = statusId ? document.getElementById(statusId) : null
  if (statusEl) statusEl.textContent = 'Iniciando cámara...'
  
  try {
    await _loadJsQR()
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    const video = document.getElementById(videoId)
    if (!video) { stream.getTracks().forEach(t => t.stop()); return }
    video.srcObject = stream

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    let active = true

    window._scannerStop = () => {
      active = false
      stream.getTracks().forEach(t => t.stop())
      window._scannerStop = null
    }

    if (statusEl) statusEl.textContent = 'Buscando QR...'

    const tick = () => {
      if (!active) return
      if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        ctx.drawImage(video, 0, 0)
        const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const code = window.jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' })
        if (code && code.data) {
          window._scannerStop?.()
          onFound(code.data)
          return
        }
      }
      requestAnimationFrame(tick)
    }
    video.addEventListener('loadeddata', () => requestAnimationFrame(tick))

  } catch(e) {
    if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara. Ingresá el código manualmente.'
  }
}

// src/pages/puerta.js
import { escucharInvitados, actualizarInvitado } from '../firebase.js'
import { injectStyles } from '../styles.js'

export function renderPuerta(app) {
  injectStyles()
  let invitados = [], historial = []

  app.innerHTML = `
    <div class="hdr">
      <div><h1>🚪 Control de puerta</h1><div class="sub">Solo ingresa quien tiene bono pagado</div></div>
      <a href="/admin" class="btn" style="font-size:11px;padding:5px 9px;color:#fff;border-color:rgba(255,255,255,.3);text-decoration:none">← Panel</a>
    </div>
    <div class="gold"></div>
    <div style="max-width:400px;margin:0 auto;padding:16px">
      <p style="font-size:12px;color:#888;margin-bottom:10px;text-align:center">
        Ingresá el código del invitado para validar el ingreso
      </p>
      <div style="display:flex;gap:8px;margin-bottom:4px">
        <input id="scan-cod" placeholder="INV-0001" style="flex:1;font-size:15px;text-transform:uppercase"
          onkeydown="if(event.key==='Enter') window._vPuerta()">
        <button class="btn btn-v" onclick="window._vPuerta()">✓ Validar</button>
        <button class="btn btn-b" onclick="window._abrirScannerPuerta()" title="Escanear QR">📷</button>
      </div>
      
    <div id="scan-overlay-puerta" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apunta al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-puerta" autoplay playsinline muted style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-puerta" style="color:#C9A96E;font-size:13px">Iniciando camara...</p>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)" onclick="window._cerrarScannerPuerta()">Cancelar</button>
    </div>
    <div id="scan-res"></div>
      <div class="sep"></div>
      <p style="font-size:11px;color:#888;font-weight:500;margin-bottom:6px">ÚLTIMOS INGRESOS</p>
      <div id="scan-ult"></div>
    </div>`

  const unsub = escucharInvitados(data => { invitados = data })

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
          Este QR no puede usarse nuevamente. No permitir el ingreso.
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
    // estado: pagado → OK
    await actualizarInvitado(inv.fireId, { estado: 'ingresado' })
    const hora = new Date().toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'})
    historial.unshift({ nombre: inv.nombre + ' ' + inv.apellido, codigo: cod, hora })
    res.innerHTML = `<div class="result-ok">
      <p style="font-size:28px">✅</p>
      <p style="font-size:18px;font-weight:500;color:#3B6D11;margin-top:6px">¡Bienvenido/a!</p>
      <p style="font-size:15px;color:#27500A;margin-top:2px">${inv.nombre} ${inv.apellido}</p>
      <p style="font-size:11px;color:#3B6D11;margin-top:6px;opacity:.8">
        QR marcado — no puede reutilizarse
      </p>
    </div>`
    document.getElementById('scan-cod').value = ''
    renderUlt()
  }

  window._cobrarPuerta = async (fireId, codigo) => {
    await actualizarInvitado(fireId, { estado: 'pagado' })
    document.getElementById('scan-cod').value = codigo
    window._vPuerta()
  }

  function renderUlt() {
    const el = document.getElementById('scan-ult'); if (!el) return
    if (!historial.length) { el.innerHTML = '<p style="font-size:12px;color:#aaa">Sin ingresos aún</p>'; return }
    el.innerHTML = historial.slice(0,6).map(h =>
      `<div style="display:flex;justify-content:space-between;padding:5px 0;
        border-bottom:.5px solid #e0d5c8;font-size:12px">
        <span>✓ ${h.nombre}</span>
        <span style="color:#aaa">${h.codigo} · ${h.hora}</span>
      </div>`).join('')
  }


  window._abrirScannerPuerta = async () => {
    document.getElementById('scan-overlay-puerta').style.display = 'flex'
    let stream = null, active = true
    try {
      await window._initScanner('scan-video-puerta', async (raw) => {
        active = false
        window._cerrarScannerPuerta()
        const matchCod   = raw.match(/INV-\d+/)
        const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
        if (matchCod) { document.getElementById('scan-cod').value = matchCod[0]; window._vPuerta() }
        else if (matchToken) {
          const inv = await buscarInvitadoPorToken(matchToken[1])
          if (inv) { document.getElementById('scan-cod').value = inv.codigo; window._vPuerta() }
        }
      }, 'scan-status-puerta')
    } catch(e) {
      document.getElementById('scan-status-puerta').textContent = 'No se pudo acceder a la camara.'
    }
  }
  window._cerrarScannerPuerta = () => {
    window._scannerStop && window._scannerStop()
    document.getElementById('scan-overlay-puerta').style.display = 'none'
  }
}