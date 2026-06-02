import { buildHeader } from '../header.js'
// src/pages/caja.js
import { escucharInvitados, leerCarrito, crearPedidosDesdeCarrito,
         vaciarCarrito, escucharPedidos, marcarEntregado } from '../firebase.js'
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

export function renderCaja(app) {
  injectStyles()

  let invitados = [], pedidosExistentes = [], vista = 'cobrar'
  let invSeleccionado = null, carritoInv = []
  let scannerStream = null

  app.innerHTML = `
    ${buildHeader({ title:'💰 Caja central', sub:'Sucovi 2027 · Roma 656, Olivos', backHref:'/admin' })}

    <!-- tabs -->
    <div class="nav">
      <button class="on" onclick="window._cajaVista('cobrar',this)">💳 Cobrar</button>
      <button onclick="window._cajaVista('pedidos',this)">📋 Pedidos pagados</button>
      <button onclick="window._cajaVista('logistica',this)">🚚 Envíos</button>
    </div>

    <div id="caja-content" class="wrap"></div>

    <!-- Scanner overlay -->
    <div id="scan-overlay" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video" autoplay playsinline></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status" style="color:#C9A96E;font-size:13px">Buscando QR...</p>
      <button class="btn" onclick="window._cerrarScanner()"
        style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">
        Cancelar
      </button>
    </div>`

  escucharInvitados(data => { invitados = data })
  escucharPedidos(data => { pedidosExistentes = data; if (vista !== 'cobrar') renderVista() })

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

  // ── COBRAR ────────────────────────────────────────────────────────────
  function renderCobrar() {
    const el = document.getElementById('caja-content')
    if (invSeleccionado) { renderCobroInvitado(); return }
    el.innerHTML = `
      <p style="font-size:13px;color:#666;margin-bottom:12px">
        Buscá al invitado por código o escaneá su QR
      </p>
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <input id="buscar-caja" placeholder="Código INV-0001 o nombre..."
          style="flex:1" oninput="window._buscarInv()"
          onkeydown="if(event.key==='Enter') window._buscarInv(true)">
        <button class="btn btn-v" onclick="window._abrirScanner()">📷 QR</button>
      </div>
      <div id="resultados-busqueda"></div>`
  }

  window._buscarInv = (autoselect = false) => {
    const q = (document.getElementById('buscar-caja')?.value || '').toLowerCase().trim()
    if (!q) { document.getElementById('resultados-busqueda').innerHTML = ''; return }
    const res = invitados.filter(i =>
      i.estado !== 'invalidado' &&
      ((i.codigo||'').toLowerCase().includes(q) ||
       (i.nombre+' '+i.apellido).toLowerCase().includes(q)))

    if (autoselect && res.length === 1) { window._seleccionarInv(res[0].fireId); return }

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
        <span style="color:#6B1C1C;font-size:18px">›</span>
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

    // Verificar si ya tiene pedidos pagados hoy
    const pedHoy = pedidosExistentes.filter(p => p.invFireId === inv.fireId)

    el.innerHTML = `
      <button class="btn" onclick="window._volverCobrar()"
        style="margin-bottom:14px;color:#6B1C1C;border-color:#6B1C1C">
        ← Buscar otro invitado
      </button>

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
        ${pedHoy.length ? `
          <div style="background:#EAF3DE;border-radius:6px;padding:6px 10px;font-size:12px;
            color:#3B6D11;margin-bottom:8px">
            ✅ Ya tiene ${pedHoy.length} pedido${pedHoy.length>1?'s':''} pagado${pedHoy.length>1?'s':''} esta noche
          </div>` : ''}
      </div>

      ${!items.length ? `
        <div class="card" style="text-align:center;padding:24px">
          <p style="font-size:15px;color:#aaa;margin-bottom:8px">El carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            ${inv.nombre} todavía no agregó vinos desde los stands.
          </p>
        </div>` : `
        ${items.map(stand => `
          <div class="card" style="margin-bottom:10px">
            <div style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">
              🍷 ${stand.standNombre} · Stand #${stand.standId}
              <span class="badge b-envi" style="margin-left:6px;${stand.retiro!=='envio'?'display:none':''}">
                🚚 Envío
              </span>
            </div>
            ${(stand.items||[]).map(i => `
              <div style="display:flex;justify-content:space-between;font-size:13px;
                color:#555;padding:4px 0;border-bottom:.5px solid #f5f0eb">
                <span>${i.desc}</span>
                <strong>$${fmt(i.sub)}</strong>
              </div>`).join('')}
            <div style="display:flex;justify-content:space-between;font-size:13px;
              font-weight:500;margin-top:8px;padding-top:6px;border-top:.5px solid #e0d5c8">
              <span>Subtotal</span>
              <span>$${fmt((stand.items||[]).reduce((s,i)=>s+(i.sub||0),0))}</span>
            </div>
          </div>`).join('')}

        <div class="card" style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;font-size:20px;font-weight:500">
            <span>TOTAL A COBRAR</span>
            <span style="color:#6B1C1C">$${fmt(total)}</span>
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
    const inv   = invSeleccionado
    const items = carritoInv.filter(s => s.items?.length)
    if (!items.length) return
    const btn = document.querySelector('#caja-content .btn-g')
    if (btn) { btn.disabled = true; btn.textContent = 'Procesando...' }
    const msg = document.getElementById('cobro-msg')
    try {
      await crearPedidosDesdeCarrito(inv, items)
      await vaciarCarrito(inv.fireId)
      msg.innerHTML = `<span style="color:#3B6D11;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! Se generaron ${items.length} voucher${items.length>1?'s':''}.
        El cliente puede verlos en su QR de acceso.
      </span>`
      if (btn) { btn.style.display = 'none' }
    } catch(e) {
      msg.innerHTML = `<span style="color:#A32D2D">Error: ${e.message}</span>`
      if (btn) { btn.disabled = false; btn.textContent = 'Reintentar' }
    }
  }

  // ── PEDIDOS PAGADOS ───────────────────────────────────────────────────
  function renderPedidosPagados() {
    const el = document.getElementById('caja-content')
    const peds = pedidosExistentes.filter(p => p.retiro !== 'envio')
    if (!peds.length) { el.innerHTML = '<div class="empty">Sin pedidos aún</div>'; return }
    const LE = { pagado:'Pagado', listo:'Listo', entregado:'Entregado' }
    const BE = { pagado:'b-pago', listo:'b-list', entregado:'b-entr' }
    el.innerHTML = peds.map(p => `
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">
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

  // ── ENVÍOS ────────────────────────────────────────────────────────────
  function renderEnvios() {
    const el = document.getElementById('caja-content')
    const envios = pedidosExistentes.filter(p => p.retiro === 'envio')
    if (!envios.length) { el.innerHTML = '<div class="empty">Sin pedidos de envío</div>'; return }
    el.innerHTML = envios.map(p => `
      <div class="card" style="margin-bottom:10px;border-left:3px solid #5A1E99">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:15px;font-weight:500;color:#6B1C1C">
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

  // ── QR SCANNER ────────────────────────────────────────────────────────
  window._abrirScanner = async () => {
    const overlay = document.getElementById('scan-overlay')
    overlay.style.display = 'flex'
    try {
      scannerStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      })
      const video = document.getElementById('scan-video')
      video.srcObject = scannerStream

      // Use BarcodeDetector if available, else fallback message
      if ('BarcodeDetector' in window) {
        const detector = new BarcodeDetector({ formats: ['qr_code'] })
        const scan = async () => {
          try {
            const codes = await detector.detect(video)
            if (codes.length > 0) {
              const raw = codes[0].rawValue
              // Extraer código INV- o token del URL
              const match = raw.match(/INV-\d+/) || raw.match(/inv=([A-Z0-9]+)/)
              if (match) {
                const codigo = match[0].startsWith('INV') ? match[0] : null
                const token  = !codigo ? match[1] : null
                window._cerrarScanner()
                if (codigo) {
                  document.getElementById('buscar-caja').value = codigo
                  window._buscarInv(true)
                } else if (token) {
                  const { buscarInvitadoPorToken } = await import('../firebase.js')
                  const inv = await buscarInvitadoPorToken(token)
                  if (inv) window._seleccionarInv(inv.fireId)
                }
                return
              }
            }
          } catch(e) {}
          if (document.getElementById('scan-overlay').style.display !== 'none') {
            requestAnimationFrame(scan)
          }
        }
        requestAnimationFrame(scan)
      } else {
        document.getElementById('scan-status').textContent =
          'Tu navegador no soporta escaneo automático. Ingresá el código manualmente.'
      }
    } catch(e) {
      document.getElementById('scan-status').textContent =
        'No se pudo acceder a la cámara. Ingresá el código manualmente.'
    }
  }

  window._cerrarScanner = () => {
    if (scannerStream) { scannerStream.getTracks().forEach(t => t.stop()); scannerStream = null }
    document.getElementById('scan-overlay').style.display = 'none'
  }

  renderCobrar()
}
