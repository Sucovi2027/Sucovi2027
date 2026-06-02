import { buildHeader } from '../header.js'
// src/pages/puerta.js
import { escucharInvitados, actualizarInvitado, buscarInvitadoPorToken } from '../firebase.js'
import { injectStyles } from '../styles.js'

export function renderPuerta(app) {
  injectStyles()
  let invitados = [], historial = [], scannerStream = null

  app.innerHTML = `
    ${buildHeader({ title:'🚪 Control de puerta', sub:'Solo ingresa quien tiene bono pagado', backHref:'/admin' })}
    <div style="max-width:400px;margin:0 auto;padding:16px">
      <div style="display:flex;gap:8px;margin-bottom:4px">
        <input id="scan-cod" placeholder="Código INV-0001"
          style="flex:1;font-size:15px;text-transform:uppercase"
          onkeydown="if(event.key==='Enter') window._vPuerta()">
        <button class="btn btn-v" onclick="window._vPuerta()">✓ Validar</button>
        <button class="btn btn-b" onclick="window._abrirScannerPuerta()" title="Escanear QR">
          📷
        </button>
      </div>
      <div id="scan-res" style="margin-top:10px"></div>
      <div class="sep"></div>
      <p style="font-size:11px;color:#888;font-weight:500;margin-bottom:6px">ÚLTIMOS INGRESOS</p>
      <div id="scan-ult"></div>
    </div>

    <!-- Scanner overlay -->
    <div id="scan-overlay-puerta" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-puerta" autoplay playsinline></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-puerta" style="color:#C9A96E;font-size:13px">Buscando QR...</p>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerPuerta()">Cancelar</button>
    </div>`

  const unsub = escucharInvitados(data => { invitados = data })

  window._vPuerta = async (codigoOverride) => {
    const cod = (codigoOverride || document.getElementById('scan-cod')?.value || '')
      .trim().toUpperCase()
    const res = document.getElementById('scan-res'); if (!cod) return
    const inv = invitados.find(i => i.codigo === cod)
    procesarIngreso(inv, cod, res)
  }

  async function procesarIngreso(inv, cod, res) {
    if (!inv) {
      res.innerHTML = `<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">❌ Código no encontrado</p>
        <p style="font-size:12px;margin-top:4px;color:#791F1F">${cod} no existe en el sistema.</p>
      </div>`; return
    }
    if (inv.estado === 'ingresado') {
      res.innerHTML = `<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">⛔ QR ya utilizado</p>
        <p style="font-size:12px;margin-top:6px;color:#791F1F">
          <strong>${inv.nombre} ${inv.apellido}</strong> ya ingresó al evento.<br>
          Este QR no puede usarse nuevamente.
        </p>
        <p style="font-size:13px;font-weight:600;color:#A32D2D;margin-top:8px">
          NO PERMITIR EL INGRESO
        </p>
      </div>`; return
    }
    if (inv.estado === 'pendiente') {
      res.innerHTML = `<div class="result-warn">
        <p style="font-size:16px;font-weight:500;color:#854F0B">⏳ Pago pendiente</p>
        <p style="font-size:12px;margin-top:4px;color:#633806">
          <strong>${inv.nombre} ${inv.apellido}</strong> no abonó el bono ($35.000).
        </p>
        <button class="btn btn-a" style="margin-top:10px;width:100%"
          onclick="window._cobrarPuerta('${inv.fireId}','${inv.codigo}')">
          💰 Cobrar $35.000 y habilitar ingreso
        </button>
      </div>`; return
    }
    if (inv.estado === 'invalidado') {
      res.innerHTML = `<div class="result-err">
        <p style="font-size:16px;font-weight:500;color:#A32D2D">🚫 Invitado invalidado</p>
        <p style="font-size:12px;margin-top:4px;color:#791F1F">
          Este registro fue invalidado por el organizador.
        </p>
      </div>`; return
    }
    // pagado → OK
    await actualizarInvitado(inv.fireId, { estado: 'ingresado' })
    const hora = new Date().toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'})
    historial.unshift({ nombre: inv.nombre+' '+inv.apellido, codigo: cod, hora })
    res.innerHTML = `<div class="result-ok">
      <p style="font-size:32px;margin-bottom:8px">✅</p>
      <p style="font-size:20px;font-weight:500;color:#3B6D11">¡Bienvenido/a!</p>
      <p style="font-size:16px;color:#27500A;margin-top:4px">${inv.nombre} ${inv.apellido}</p>
      <p style="font-size:11px;color:#3B6D11;margin-top:6px;opacity:.8">
        Bono confirmado · QR marcado como utilizado
      </p>
    </div>`
    const input = document.getElementById('scan-cod')
    if (input) input.value = ''
    renderUlt()
  }

  window._cobrarPuerta = async (fireId, codigo) => {
    await actualizarInvitado(fireId, { estado: 'pagado' })
    invitados = invitados.map(i => i.fireId === fireId ? {...i, estado:'pagado'} : i)
    window._vPuerta(codigo)
  }

  function renderUlt() {
    const el = document.getElementById('scan-ult'); if (!el) return
    if (!historial.length) {
      el.innerHTML = '<p style="font-size:12px;color:#aaa">Sin ingresos aún</p>'; return
    }
    el.innerHTML = historial.slice(0,6).map(h => `
      <div style="display:flex;justify-content:space-between;padding:5px 0;
        border-bottom:.5px solid #e0d5c8;font-size:12px">
        <span>✓ ${h.nombre}</span>
        <span style="color:#aaa">${h.codigo} · ${h.hora}</span>
      </div>`).join('')
  }

  // Scanner
  window._abrirScannerPuerta = async () => {
    const overlay = document.getElementById('scan-overlay-puerta')
    overlay.style.display = 'flex'
    try {
      scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('scan-video-puerta')
      video.srcObject = scannerStream
      if ('BarcodeDetector' in window) {
        const detector = new BarcodeDetector({ formats: ['qr_code'] })
        const scan = async () => {
          try {
            const codes = await detector.detect(video)
            if (codes.length > 0) {
              const raw = codes[0].rawValue
              const matchCod   = raw.match(/INV-\d+/)
              const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
              window._cerrarScannerPuerta()
              if (matchCod) {
                document.getElementById('scan-cod').value = matchCod[0]
                window._vPuerta()
              } else if (matchToken) {
                const inv = await buscarInvitadoPorToken(matchToken[1])
                if (inv) {
                  document.getElementById('scan-cod').value = inv.codigo
                  window._vPuerta()
                }
              }
              return
            }
          } catch(e) {}
          if (overlay.style.display !== 'none') requestAnimationFrame(scan)
        }
        requestAnimationFrame(scan)
      } else {
        document.getElementById('scan-status-puerta').textContent =
          'Tu navegador no soporta escaneo. Ingresá el código manualmente.'
      }
    } catch(e) {
      document.getElementById('scan-status-puerta').textContent =
        'No se pudo acceder a la cámara.'
    }
  }

  window._cerrarScannerPuerta = () => {
    if (scannerStream) { scannerStream.getTracks().forEach(t => t.stop()); scannerStream = null }
    document.getElementById('scan-overlay-puerta').style.display = 'none'
  }
}
