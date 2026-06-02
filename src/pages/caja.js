// src/pages/caja.js
import { escucharInvitados, leerCarrito, crearPedidosDesdeCarrito,
         vaciarCarrito, escucharPedidos } from '../firebase.js'
import { injectStyles } from '../styles.js'
import { buildHeader } from '../header.js'

const fmt = n => Number(n).toLocaleString('es-AR')

async function loadJsQR() {
  if (window.jsQR) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

export function renderCaja(app) {
  injectStyles()

  let invitados = [], pedidosExistentes = [], vista = 'cobrar'
  let invSeleccionado = null, carritoInv = []
  let scannerStream = null, scannerActive = false

  app.innerHTML = buildHeader({
    title: '💰 Caja central',
    sub: 'Sucovi 2027 · Roma 656, Olivos',
    backHref: '/admin'
  }) + `
    <div class="nav">
      <button class="on" onclick="window._cajaVista('cobrar',this)">💳 Cobrar</button>
      <button onclick="window._cajaVista('pedidos',this)">📋 Pedidos</button>
      <button onclick="window._cajaVista('logistica',this)">🚚 Envíos</button>
    </div>
    <div id="caja-content" class="wrap"></div>

    <div id="scan-overlay" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status" style="color:#C9A96E;font-size:13px">Cargando escáner...</p>
      <button class="btn" onclick="window._cerrarScanner()"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">
        Cancelar
      </button>
    </div>`

  escucharInvitados(data => {
    invitados = data
    if (vista === 'cobrar' && !invSeleccionado) cargarCarritosActivos()
  })
  escucharPedidos(data => {
    pedidosExistentes = data
    if (vista !== 'cobrar') renderVista()
  })

  window._cajaVista = (v, btn) => {
    vista = v; invSeleccionado = null
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('on'))
    btn.classList.add('on')
    renderVista()
  }

  function renderVista() {
    if (vista === 'cobrar') renderCobrar()
    if (vista === 'pedidos') renderPedidosPagados()
    if (vista === 'logistica') renderEnvios()
  }

  // Cache de carritos activos
  let carritosActivos = {} // { invFireId: { total, items } }

  async function cargarCarritosActivos() {
    // Carga carritos de todos los invitados en paralelo (solo los activos)
    const activos = invitados.filter(i => i.estado !== 'invalidado')
    const resultados = await Promise.all(
      activos.map(async inv => {
        try {
          const items = await leerCarrito(inv.fireId)
          const itemsConVinos = items.filter(s => s.items?.length)
          if (!itemsConVinos.length) return null
          const total = itemsConVinos.reduce((s,si) => s+(si.items||[]).reduce((ss,i)=>ss+(i.sub||0),0),0)
          const cant  = itemsConVinos.reduce((s,si) => s+(si.items||[]).length,0)
          return { fireId: inv.fireId, total, cant, stands: itemsConVinos.length }
        } catch(e) { return null }
      })
    )
    carritosActivos = {}
    resultados.filter(Boolean).forEach(r => { carritosActivos[r.fireId] = r })
    renderListaCobrar()
  }

  function renderCobrar() {
    const el = document.getElementById('caja-content')
    if (invSeleccionado) { renderCobroInvitado(); return }
    el.innerHTML = `
      <div style="display:flex;gap:8px;margin-bottom:12px">
        <input id="buscar-caja" placeholder="Buscar por nombre o código..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda">
        <p style="font-size:12px;color:#888;margin-bottom:8px">Cargando carritos activos...</p>
      </div>`
    if (invitados.length) cargarCarritosActivos()
  }

  function renderListaCobrar() {
    const el = document.getElementById('resultados-busqueda'); if (!el) return
    const q = (document.getElementById('buscar-caja')?.value || '').toLowerCase().trim()

    // Get invitados with active carts, filtered by search
    let lista = invitados.filter(i => i.estado !== 'invalidado')
    if (q) {
      lista = lista.filter(i =>
        (i.codigo||'').toLowerCase().includes(q) ||
        (i.nombre+' '+i.apellido).toLowerCase().includes(q))
    } else {
      // Without search: only show those with active carts
      lista = lista.filter(i => carritosActivos[i.fireId])
    }

    if (!lista.length) {
      el.innerHTML = q
        ? '<div class="empty">Sin resultados</div>'
        : '<div class="empty" style="padding:24px">Sin carritos activos — nadie ha agregado vinos todavía 🍷</div>'
      return
    }

    el.innerHTML = (q ? '' : `<p style="font-size:11px;color:#888;margin-bottom:8px;font-weight:500">CARRITOS ACTIVOS (${lista.length})</p>`) +
      lista.map(i => {
        const cart = carritosActivos[i.fireId]
        return `
        <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
          align-items:center;gap:10px" onclick="window._seleccionarInv('${i.fireId}')">
          <div class="avatar">${i.nombre[0]}${i.apellido[0]}</div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${i.nombre} ${i.apellido}</div>
            <div style="font-size:12px;color:#888">${i.codigo} · ${i.tel}</div>
            ${cart ? `<div style="font-size:12px;color:#3A7D44;font-weight:500;margin-top:2px">
              🍷 ${cart.cant} ítem${cart.cant>1?'s':''} · $${Number(cart.total).toLocaleString('es-AR')}
              <span style="color:#888;font-weight:400"> · ${cart.stands} stand${cart.stands>1?'s':''}</span>
            </div>` : '<div style="font-size:11px;color:#aaa;margin-top:2px">Carrito vacío</div>'}
          </div>
          <span class="badge ${i.estado==='pagado'||i.estado==='ingresado'?'b-pago':'b-pend'}">
            ${i.estado==='pagado'||i.estado==='ingresado'?'Bono pagado':'Pendiente'}
          </span>
          <span style="color:#1A3A5C;font-size:18px">›</span>
        </div>`
      }).join('')
  }

  window._buscarInv = (autoselect = false) => {
    const q = (document.getElementById('buscar-caja')?.value || '').toLowerCase().trim()
    if (!q) { renderListaCobrar(); return }
    const res = invitados.filter(i =>
      i.estado !== 'invalidado' &&
      ((i.codigo||'').toLowerCase().includes(q) ||
       (i.nombre+' '+i.apellido).toLowerCase().includes(q)))
    if (autoselect && res.length === 1) { window._seleccionarInv(res[0].fireId); return }
    renderListaCobrar()
    return
    const el = document.getElementById('resultados-busqueda'); if (!el) return
    if (!res.length) { el.innerHTML = '<div class="empty">Sin resultados</div>'; return }
    el.innerHTML = res.map(i => `
      <div class="card" style="margin-bottom:8px;cursor:pointer;display:flex;
        align-items:center;gap:10px" onclick="window._seleccionarInv('${i.fireId}')">
        <div class="avatar">${i.nombre[0]}${i.apellido[0]}</div>
        <div style="flex:1">
          <div style="font-size:14px;font-weight:500">${i.nombre} ${i.apellido}</div>
          <div style="font-size:12px;color:#888">${i.codigo} · ${i.tel}</div>
        </div>
        <span class="badge ${i.estado==='pagado'||i.estado==='ingresado'?'b-pago':'b-pend'}">
          ${i.estado==='pagado'||i.estado==='ingresado'?'Bono pagado':'Pendiente'}
        </span>
        <span style="color:#1A3A5C;font-size:18px">›</span>
      </div>`).join('')
  }

  window._seleccionarInv = async (fireId) => {
    invSeleccionado = invitados.find(i => i.fireId === fireId)
    if (!invSeleccionado) return
    carritoInv = await leerCarrito(fireId)
    renderCobroInvitado()
  }

  async function renderCobroInvitado() {
    const el = document.getElementById('caja-content'); if (!el) return
    const inv = invSeleccionado
    const items = carritoInv.filter(s => s.items?.length)
    const total = items.reduce((s,si) => s+(si.items||[]).reduce((ss,i)=>ss+(i.sub||0),0),0)
    const pedHoy = pedidosExistentes.filter(p => p.invFireId === inv.fireId)

    el.innerHTML = `
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Buscar otro</button>
      <div class="card" style="margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="avatar" style="width:44px;height:44px;font-size:15px">
            ${inv.nombre[0]}${inv.apellido[0]}
          </div>
          <div>
            <div style="font-size:16px;font-weight:500">${inv.nombre} ${inv.apellido}</div>
            <div style="font-size:12px;color:#888">${inv.codigo}${inv.tel?' · '+inv.tel:''}</div>
          </div>
        </div>
        ${pedHoy.length ? `<div style="background:#D1FAE5;border-radius:6px;padding:6px 10px;
          font-size:12px;color:#065F46">
          ✅ Ya tiene ${pedHoy.length} pedido${pedHoy.length>1?'s':''} pagado${pedHoy.length>1?'s':''} esta noche
        </div>` : ''}
      </div>

      ${!items.length ? `
        <div class="card" style="text-align:center;padding:24px">
          <p style="font-size:15px;color:#aaa">El carrito está vacío</p>
          <p style="font-size:13px;color:#aaa;margin-top:6px">
            ${inv.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>` : `
        ${items.map(stand => `
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">
              🍷 ${stand.standNombre} · Stand #${stand.standId}
              ${stand.retiro==='envio'?'<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>':''}
            </div>
            ${(stand.items||[]).map(i => `
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${i.desc}</span><strong>$${fmt(i.sub)}</strong>
              </div>`).join('')}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #D6E4F0">
              <span>Subtotal</span>
              <span>$${fmt((stand.items||[]).reduce((s,i)=>s+(i.sub||0),0))}</span>
            </div>
          </div>`).join('')}
        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL</span><span style="color:#1A3A5C">$${fmt(total)}</span>
          </div>
          <p style="font-size:12px;color:#888;margin-top:4px">
            ${items.length} stand${items.length>1?'s':''}
          </p>
        </div>
        <div id="cobro-msg" style="font-size:12px;text-align:center;margin-bottom:8px"></div>
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px"
          onclick="window._cobrar()">
          ✓ Cobrar $${fmt(total)} y generar vouchers
        </button>`}
    `
  }

  window._volverCobrar = () => { invSeleccionado = null; carritoInv = []; renderCobrar() }

  window._cobrar = async () => {
    const inv = invSeleccionado
    const items = carritoInv.filter(s => s.items?.length)
    if (!items.length) return
    const btn = document.querySelector('#caja-content .btn-g')
    if (btn) { btn.disabled = true; btn.textContent = 'Procesando...' }
    const msg = document.getElementById('cobro-msg')
    try {
      await crearPedidosDesdeCarrito(inv, items)
      await vaciarCarrito(inv.fireId)
      msg.innerHTML = `<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${items.length} voucher${items.length>1?'s':''} generado${items.length>1?'s':''}.
      </span>`
      if (btn) btn.style.display = 'none'
    } catch(e) {
      msg.innerHTML = `<span style="color:#C0392B">Error: ${e.message}</span>`
      if (btn) { btn.disabled = false; btn.textContent = 'Reintentar' }
    }
  }

  function renderPedidosPagados() {
    const el = document.getElementById('caja-content')
    const peds = pedidosExistentes.filter(p => p.retiro !== 'envio')
    const LE = { pagado:'Pagado', listo:'Listo', entregado:'Entregado' }
    const BE = { pagado:'b-pago', listo:'b-list', entregado:'b-entr' }
    if (!peds.length) { el.innerHTML = '<div class="empty">Sin pedidos aún</div>'; return }
    el.innerHTML = peds.map(p => `
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#1A3A5C;min-width:52px">
          #${p.fireId?.slice(-4).toUpperCase()}
        </span>
        <div style="flex:1;min-width:80px">
          <div style="font-size:12px;font-weight:500">${p.invNombre||''}</div>
          <div style="font-size:11px;color:#888">${p.standNombre}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:80px">
          ${(p.items||[]).map(i=>i.desc).join(' · ')}
        </span>
        <span style="font-size:14px;font-weight:500">$${fmt(p.total||0)}</span>
        <span class="badge ${BE[p.estado]||'b-pago'}">${LE[p.estado]||p.estado}</span>
      </div>`).join('')
  }

  function renderEnvios() {
    const el = document.getElementById('caja-content')
    const envios = pedidosExistentes.filter(p => p.retiro === 'envio')
    if (!envios.length) { el.innerHTML = '<div class="empty">Sin envíos</div>'; return }
    el.innerHTML = envios.map(p => `
      <div class="card" style="margin-bottom:10px;border-left:3px solid #7C3AED">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:15px;font-weight:500;color:#1A3A5C">
            #${p.fireId?.slice(-4).toUpperCase()}
          </span>
          <span class="badge b-envi">🚚 Envío</span>
        </div>
        <div style="font-size:13px;font-weight:500;margin-bottom:4px">${p.invNombre||''}</div>
        <div style="font-size:12px;color:#666;margin-bottom:6px">
          ${p.standNombre} · ${(p.items||[]).map(i=>i.desc).join(' · ')}
        </div>
        <div style="font-size:15px;font-weight:500">$${fmt(p.total||0)}</div>
      </div>`).join('')
  }

  window._abrirScanner = async () => {
    document.getElementById('scan-overlay').style.display = 'flex'
    const statusEl = document.getElementById('scan-status')
    if (statusEl) statusEl.textContent = 'Cargando escáner...'
    try {
      await loadJsQR()
      scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('scan-video')
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
            window._cerrarScanner()
            const matchCod   = raw.match(/INV-\d+/)
            const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
            if (matchCod) {
              const inp = document.getElementById('buscar-caja')
              if (inp) { inp.value = matchCod[0]; window._buscarInv(true) }
            } else if (matchToken) {
              import('../firebase.js').then(({ buscarInvitadoPorToken }) =>
                buscarInvitadoPorToken(matchToken[1]).then(inv => {
                  if (inv) window._seleccionarInv(inv.fireId)
                })
              )
            }
            return
          }
        }
        if (scannerActive) requestAnimationFrame(tick)
      }
      video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
    } catch(e) {
      if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara. Ingresá el código manualmente.'
    }
  }

  window._cerrarScanner = () => {
    scannerActive = false
    if (scannerStream) { scannerStream.getTracks().forEach(t => t.stop()); scannerStream = null }
    const overlay = document.getElementById('scan-overlay')
    if (overlay) overlay.style.display = 'none'
  }

  renderCobrar()
}
