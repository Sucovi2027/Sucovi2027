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


// jsQR based scanner - works on iOS Safari and all browsers
async function startQRScanner(videoId, onResult, onError) {
  // Load jsQR dynamically
  if (!window.jsQR) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
      s.onload = resolve
      s.onerror = reject
      document.head.appendChild(s)
    })
  }
  
  let stream = null
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    const video = document.getElementById(videoId)
    if (!video) return null
    video.srcObject = stream
    await video.play()
    
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    let scanning = true
    
    const scan = () => {
      if (!scanning || !video.videoWidth) { if (scanning) requestAnimationFrame(scan); return }
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const code = window.jsQR(imageData.data, imageData.width, imageData.height)
      if (code) { scanning = false; stopStream(stream); onResult(code.data) }
      else if (scanning) requestAnimationFrame(scan)
    }
    requestAnimationFrame(scan)
    
    return () => { scanning = false; stopStream(stream) }
  } catch(e) {
    onError(e.message)
    return null
  }
}

function stopStream(stream) {
  if (stream) stream.getTracks().forEach(t => t.stop())
}

import { buildHeader } from '../header.js'
// src/pages/standPanel.js
import { escucharPedidosPorStand, marcarEntregado } from '../firebase.js'
import { injectStyles } from '../styles.js'
const fmt = n => Number(n).toLocaleString('es-AR')

export function renderStandPanel(app, bodega) {
  injectStyles()
  const sesion = sessionStorage.getItem('stand-auth-' + bodega.id)

  if (!sesion) {
    app.innerHTML = `
      ${buildHeader({ title: '🍷 ' + bodega.nombre, sub: 'Panel del stand · Solo personal autorizado' })}
      <div style="max-width:320px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:40px;margin-bottom:12px">🔐</div>
        <p style="font-size:14px;color:#666;margin-bottom:16px">
          Ingresá la contraseña del stand para ver los pedidos
        </p>
        <input id="sp" type="password" placeholder="Contraseña del stand"
          style="text-align:center;font-size:16px;margin-bottom:10px"
          onkeydown="if(event.key==='Enter') window._loginStand()">
        <button class="btn btn-v" style="width:100%;padding:10px"
          onclick="window._loginStand()">Ingresar</button>
        <div id="sp-err" style="margin-top:8px;font-size:12px;color:#A32D2D"></div>
      </div>`
    window._loginStand = () => {
      if (document.getElementById('sp').value.trim() === bodega.pass) {
        sessionStorage.setItem('stand-auth-'+bodega.id,'1'); renderStandPanel(app, bodega)
      } else document.getElementById('sp-err').textContent = 'Contraseña incorrecta'
    }
    return
  }

  let pedidos = []

  app.innerHTML = buildHeader({
    title: '🍷 ' + bodega.nombre,
    sub: 'Stand #' + bodega.id + ' · Pedidos para entregar',
    actions: [`<button class="btn-back btn" onclick="sessionStorage.removeItem('stand-auth-${bodega.id}');location.reload()">Salir</button>`]
  }) + `
    <div class="wrap">
      <!-- Tabs -->
      <div style="display:flex;border-bottom:2px solid #E8EFF5;margin-bottom:12px;overflow-x:auto">
        <button id="tab-pedidos" class="btn" onclick="window._setTab('pedidos',this)"
          style="font-size:12px;border:none;border-radius:0;border-bottom:2px solid #5BA4CF;
          color:#5BA4CF;font-weight:600;padding:8px 12px;margin-bottom:-2px;background:none">
          📋 Pedidos
        </button>
        <button id="tab-carta" class="btn" onclick="window._setTab('carta',this)"
          style="font-size:12px;border:none;border-radius:0;border-bottom:2px solid transparent;
          color:#888;padding:8px 12px;margin-bottom:-2px;background:none">
          🍷 Mi carta
        </button>
        <button id="tab-resumen" class="btn" onclick="window._setTab('resumen',this)"
          style="font-size:12px;border:none;border-radius:0;border-bottom:2px solid transparent;
          color:#888;padding:8px 12px;margin-bottom:-2px;background:none">
          📊 Resumen
        </button>
      </div>

      <!-- Tab: Pedidos -->
      <div id="tab-content-pedidos">
        <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
          <button id="sf-pend" class="btn"
            onclick="window._setSF('pendientes',this)"
            style="font-size:11px;background:#EAF3DE;color:#3B6D11;border-color:#3B6D11">
            🟢 Listos
          </button>
          <button id="sf-entr" class="btn" onclick="window._setSF('entregados',this)" style="font-size:11px">
            ✅ Entregados
          </button>
          <button id="sf-all" class="btn" onclick="window._setSF('todos',this)" style="font-size:11px">
            📋 Todos
          </button>
          <button class="btn btn-b" onclick="window._abrirScannerStand()" style="font-size:11px;margin-left:auto">
            📷 Voucher
          </button>
        </div>
        <div id="sp-pedidos"></div>
      </div>

      <!-- Tab: Mi carta -->
      <div id="tab-content-carta" style="display:none">
        <div id="sp-carta"><div class="empty">Cargando carta...</div></div>
      </div>

      <!-- Tab: Resumen -->
      <div id="tab-content-resumen" style="display:none">
        <div id="sp-resumen"></div>
      </div>
    </div>

    <!-- Scanner QR invitado -->
    <div id="scan-overlay-inv" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-inv" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-inv" style="color:#C9A96E;font-size:13px">Buscando QR...</p>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerInvitado()">Cancelar</button>
    </div>

    <div id="scan-overlay-stand" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p>
      <div class="scan-frame">
        <video id="scan-video-stand" autoplay playsinline></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-stand" style="color:#C9A96E;font-size:13px">Buscando voucher...</p>
      <div id="scan-result-stand" style="background:rgba(255,255,255,.1);border-radius:8px;
        padding:12px;margin:0 16px;text-align:center;min-height:40px"></div>
      <button class="btn"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerStand()">Cerrar</button>
    </div>
    <div id="voucher-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:360px" id="voucher-modal-content"></div>
    </div>`

  let filtro = 'pendientes'
  let tabActiva = 'pedidos'

  window._setTab = (tab, btn) => {
    tabActiva = tab
    ;['tab-pedidos','tab-carta','tab-resumen'].forEach(id => {
      const b = document.getElementById(id)
      if (b) { b.style.borderBottomColor='transparent'; b.style.color='#888'; b.style.fontWeight='400' }
    })
    btn.style.borderBottomColor='#5BA4CF'; btn.style.color='#5BA4CF'; btn.style.fontWeight='600'
    ;['pedidos','carta','resumen'].forEach(t => {
      const el = document.getElementById('tab-content-'+t)
      if (el) el.style.display = t===tab ? 'block' : 'none'
    })
    if (tab==='carta') renderCarta()
    if (tab==='resumen') renderResumen()
  }

  window._setSF = (f, btn) => {
    filtro = f
    ;['sf-pend','sf-entr','sf-all'].forEach(id => {
      const b = document.getElementById(id)
      if (b) { b.style.background='#fff'; b.style.color='#333'; b.style.borderColor='#ccc' }
    })
    if (f==='pendientes') { btn.style.background='#EAF3DE'; btn.style.color='#3B6D11'; btn.style.borderColor='#3B6D11' }
    else if (f==='entregados') { btn.style.background='#D1FAE5'; btn.style.color='#065F46'; btn.style.borderColor='#3A7D44' }
    else { btn.style.background='#1A3A5C'; btn.style.color='#fff'; btn.style.borderColor='#1A3A5C' }
    renderPedidos()
  }

  escucharPedidosPorStand(bodega.id, data => { pedidos = data; renderPedidos() })

  function renderPedidos() {
    const el = document.getElementById('sp-pedidos'); if (!el) return
    let lista = pedidos
    if (filtro==='pendientes') lista = pedidos.filter(p=>p.estado==='pagado')
    else if (filtro==='entregados') lista = pedidos.filter(p=>p.estado==='entregado')
    if (!lista.length) {
      const msgs = { pendientes:'Sin pedidos listos para retirar 🎉', entregados:'Todavía no se entregó nada', todos:'Sin pedidos' }
      el.innerHTML = `<div class="empty">${msgs[filtro]||'Sin pedidos'}</div>`; return
    }
    const LE = { pagado:'Listo para retirar', entregado:'Entregado' }
    const BE = { pagado:'b-pago', entregado:'b-entr' }
    el.innerHTML = lista.map(p => `
      <div class="card" style="margin-bottom:10px;border-left:3px solid ${p.estado==='entregado'?'#aaa':'#3B6D11'}">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <div>
            <span style="font-size:18px;font-weight:500;color:#6B1C1C">
              #${p.fireId?.slice(-4).toUpperCase()}
            </span>
            <span style="font-size:13px;font-weight:500;margin-left:8px">${p.invNombre||''}</span>
          </div>
          <span class="badge ${BE[p.estado]||'b-pago'}">${LE[p.estado]||p.estado}</span>
        </div>
        <div style="font-size:12px;color:#555;margin-bottom:8px;line-height:1.7">
          ${(p.items||[]).map(i=>`${i.desc} — <strong>$${fmt(i.sub)}</strong>`).join('<br>')}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;
          border-top:.5px solid #e0d5c8;padding-top:8px">
          <span style="font-size:16px;font-weight:500">$${fmt(p.total||0)}</span>
          ${p.estado==='pagado'
            ? `<button class="btn btn-g" onclick="window._entregarPedido('${p.fireId}')">
                ✓ Marcar entregado
               </button>`
            : '<span style="font-size:12px;color:#aaa">✓ Entregado</span>'}
        </div>
      </div>`).join('')
  }

  function renderCarta() {
    const el = document.getElementById('sp-carta'); if (!el) return
    el.innerHTML = '<div class="empty" style="padding:16px">Cargando...</div>'
    const { escucharVinos } = import('../firebase.js').then ? 
      { escucharVinos: null } : { escucharVinos: null }
    // Use dynamic import
    import('../firebase.js').then(({ escucharVinos }) => {
      escucharVinos(bodega.id, vinos => {
        if (!vinos.length) { el.innerHTML = '<div class="empty">Sin vinos cargados todavía</div>'; return }
        const fmt = n => Number(n).toLocaleString('es-AR')
        el.innerHTML = vinos.map(v => `
          <div class="card" style="margin-bottom:8px">
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${v.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${v.varietal||''}${v.cosecha?' · '+v.cosecha:''}
            </div>
            ${v.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${v.descripcion}</div>`:''}
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px">
              ${(v.unidades||[]).map(u=>`
                <span style="background:#EBF4FA;color:#1A3A5C;padding:3px 10px;
                  border-radius:20px;font-size:12px;font-weight:500">
                  ${u.u}: $${fmt(u.p)}
                </span>`).join('')}
            </div>
          </div>`).join('')
      })
    }).catch(() => {
      el.innerHTML = '<div class="empty">Error cargando carta</div>'
    })
  }

  function renderResumen() {
    const el = document.getElementById('sp-resumen'); if (!el) return
    const fmt = n => Number(n).toLocaleString('es-AR')
    const entregados = pedidos.filter(p => p.estado === 'entregado')
    const pendientes = pedidos.filter(p => p.estado === 'pagado')
    const totalEnt   = entregados.reduce((s,p) => s+(p.total||0), 0)
    const totalPend  = pendientes.reduce((s,p) => s+(p.total||0), 0)
    const totalAll   = pedidos.reduce((s,p) => s+(p.total||0), 0)

    // Count by product
    const byProd = {}
    entregados.forEach(p => {
      (p.items||[]).forEach(i => {
        const k = i.vinoNombre + ' — ' + i.unidad
        if (!byProd[k]) byProd[k] = { cant: 0, total: 0 }
        byProd[k].cant  += i.qty || 1
        byProd[k].total += i.sub || 0
      })
    })
    const sorted = Object.entries(byProd).sort((a,b) => b[1].total - a[1].total)

    el.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${fmt(totalEnt)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${fmt(totalPend)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${fmt(totalAll)}</div><div class="l">Total vendido</div></div>
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${sorted.length ? sorted.map(([prod, data]) => `
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span>${prod}</span>
            <span style="color:#888">${data.cant} u.</span>
            <span style="font-weight:500">$${fmt(data.total)}</span>
          </div>`).join('') : '<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`
  }

  window._entregarPedido = async (fireId) => { await marcarEntregado(fireId) }

  window._abrirScannerStand = async () => {
    document.getElementById('scan-overlay-stand').style.display = 'flex'
      await window._initScanner('scan-video-stand', (raw) => {
        window._cerrarScannerStand()
        const pedido = pedidos.find(p => raw.includes(p.fireId))
        if (pedido) mostrarVoucherModal(pedido)
      }, 'scan-status-stand')

  function mostrarVoucherModal(p) {
    const pago = p.estado === 'pagado'
    const modal = document.getElementById('voucher-modal')
    document.getElementById('voucher-modal-content').innerHTML = `
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:32px">${pago?'✅':'⏳'}</div>
        <h3 style="font-size:16px;font-weight:500;color:${pago?'#3B6D11':'#854F0B'};margin-top:6px">
          ${pago?'PAGADO — Entregar':'PENDIENTE — No entregar'}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${p.invNombre||''}</div>
      <div style="font-size:13px;color:#666;margin-bottom:10px">
        ${(p.items||[]).map(i=>i.desc).join('<br>')}
      </div>
      <div style="font-size:16px;font-weight:500;margin-bottom:12px">$${fmt(p.total||0)}</div>
      ${pago?`
        <button class="btn btn-g" style="width:100%;padding:10px;margin-bottom:8px"
          onclick="window._entregarPedido('${p.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>`:''}
      <button class="btn" style="width:100%"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`
    modal.style.display = 'flex'
  }

  let invStream = null, invActive = false

  window._abrirScannerInvitado = async () => {
    document.getElementById('scan-overlay-inv').style.display = 'flex'
    const statusEl = document.getElementById('scan-status-inv')
    try {
      if (!window.jsQR) {
        await new Promise((res,rej) => {
          const s = document.createElement('script')
          s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
          s.onload = res; s.onerror = rej
          document.head.appendChild(s)
        })
      }
      invStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('scan-video-inv')
      video.srcObject = invStream
      invActive = true
      if (statusEl) statusEl.textContent = 'Buscando QR del invitado...'
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      const tick = () => {
        if (!invActive) return
        if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
          canvas.width = video.videoWidth; canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0)
          const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const code = window.jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' })
          if (code && code.data) {
            const raw = code.data
            window._cerrarScannerInvitado()
            // Extract token from acceso URL
            const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
            const matchCod   = raw.match(/INV-\d+/)
            if (matchToken) {
              // Navigate to this stand's menu with the invitado's token
              window.location.href = `/stand/${bodega.id}?inv=` + matchToken[1]
            } else if (matchCod) {
              if (statusEl) statusEl.textContent = 'Usá el link del invitado, no el código.'
            }
            return
          }
        }
        if (invActive) requestAnimationFrame(tick)
      }
      video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
    } catch(e) {
      if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara.'
    }
  }

  window._cerrarScannerInvitado = () => {
    invActive = false
    if (invStream) { invStream.getTracks().forEach(t => t.stop()); invStream = null }
    document.getElementById('scan-overlay-inv').style.display = 'none'
  }

  window._cerrarScannerStand = () => {
    window._scannerStop?.()
    document.getElementById('scan-overlay-stand').style.display = 'none'
  }
}
}
