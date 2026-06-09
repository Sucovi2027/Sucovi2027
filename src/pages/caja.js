// src/pages/caja.js
import { escucharInvitados, leerCarrito, crearPedidosDesdeCarrito, cobrarStock, liberarReservaStock,
         vaciarCarrito, escucharPedidos, cancelarPedido, reembolsarPedido } from '../firebase.js'
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

  }

  // Cache de carritos activos
  let carritosActivos = {} // { invFireId: { total, items } }

  async function cargarCarritosActivos() {
    // Carga carritos de todos los invitados en paralelo (solo los activos)
    const activos = invitados.filter(i => i.estado === 'ingresado')
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
        <button class="btn btn-g" style="width:100%;padding:14px;font-size:16px;margin-bottom:8px"
          onclick="window._cobrar()">
          ✓ Cobrar $${fmt(total)} y generar vouchers
        </button>
        <div id="voucher-actions" style="display:none;margin-top:10px;display:flex;gap:8px;flex-direction:column">
          <button class="btn btn-b" style="width:100%;padding:10px;font-size:14px"
            onclick="window._imprimirVouchers()">
            🖨️ Imprimir vouchers
          </button>
          <button class="btn btn-g" style="width:100%;padding:10px;font-size:14px"
            onclick="window._enviarVouchersWA()">
            📱 Enviar por WhatsApp
          </button>
          <button class="btn" style="width:100%;padding:10px;font-size:14px;background:#6B21A8;color:#fff;border-color:#6B21A8"
            onclick="window._descargarVoucherPDF()">
            ⬇️ Descargar PDF
          </button>
          <button class="btn" style="width:100%;padding:10px;font-size:13px;color:#C0392B;border-color:#C0392B"
            onclick="window._cancelarCarrito()">
            ❌ Cancelar y vaciar carrito
          </button>
        </div>`}
    `
  }

  window._imprimirVouchers = () => {
    const { inv, items } = window._lastCobrado || {}
    if (!inv || !items) return
    const fmt = n => Number(n).toLocaleString('es-AR')
    const win = window.open('', '_blank')
    win.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Vouchers - ${inv.nombre} ${inv.apellido}</title>
      <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"><\/script>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px;
          margin-bottom: 16px; page-break-inside: avoid; }

        .header { display: flex; justify-content: space-between; margin-bottom: 10px;
          border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .stand { font-size: 22px; font-weight: 600; color: #1A3A5C; }
        .inv { font-size: 16px; color: #444; }
        .item { display: flex; justify-content: space-between; font-size: 15px;
          padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px;
          font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .badge { background: #3A7D44; color: #fff; padding: 3px 12px;
          border-radius: 20px; font-size: 11px; display: inline-block; margin-bottom:6px; }
        .qr-box { display:flex;flex-direction:column;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid #D6E4F0; }
        .qr-hint { font-size:12px;color:#888;text-align:center;margin-top:6px }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
    ${window._lastPedidosIds ? window._lastPedidosIds.map((pedidoId, idx) => {
      const stand = items[idx]
      if (!stand) return ''
      return `
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO${window._lastPedidosIds && items[idx] ? ' · VOC-'+String((window._lastVoucherNums||[])[idx]||0).padStart(3,'0') : ''}</div>
              <div class="stand">${stand.standNombre}</div>
              <div class="inv">${inv.nombre} ${inv.apellido} · ${inv.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
              <div style="font-size:10px;color:#888;margin-top:4px">Stand #${stand.standId}</div>
            </div>
          </div>
          ${(stand.items||[]).map(i => `
            <div class="item"><span>${i.desc}</span><strong>$${fmt(i.sub)}</strong></div>
          `).join('')}
          <div class="total">
            <span>Total</span>
            <span>$${fmt((stand.items||[]).reduce((s,i)=>s+(i.sub||0),0))}</span>
          </div>
        </div>
        <div class="qr-box">
          <canvas id="qr-${idx}"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>
      </div>`
    }).join('') : items.map(stand => `
      <div class="voucher">
        <div class="voucher-body">
          <div class="header">
            <div>
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO${window._lastPedidosIds && items[idx] ? ' · VOC-'+String((window._lastVoucherNums||[])[idx]||0).padStart(3,'0') : ''}</div>
              <div class="stand">${stand.standNombre}</div>
              <div class="inv">${inv.nombre} ${inv.apellido} · ${inv.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(stand.items||[]).map(i => `
            <div class="item"><span>${i.desc}</span><strong>$${fmt(i.sub)}</strong></div>
          `).join('')}
          <div class="total"><span>Total</span><span>$${fmt((stand.items||[]).reduce((s,i)=>s+(i.sub||0),0))}</span></div>
        </div>
      </div>`).join('')}
    <script>
      if (typeof qrcode !== 'undefined' && window.opener && window.opener._lastPedidosIds) {
        window.opener._lastPedidosIds.forEach((id, idx) => {
          const c = document.getElementById('qr-' + idx)
          if (!c) return
          const qr = qrcode(0, 'M')
          qr.addData(id)
          qr.make()
          const mod = qr.getModuleCount(), sz = 200, cs = sz/mod
          c.width = sz; c.height = sz
          const ctx = c.getContext('2d')
          ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
          ctx.fillStyle = '#000'
          for(let r=0;r<mod;r++) for(let col=0;col<mod;col++)
            if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
        })
      }
      setTimeout(() => { window.print(); }, 800)
    <\/script>
    </body></html>`)
    win.document.close()
  }

  window._enviarVouchersWA = () => {
    const { inv, items } = window._lastCobrado || {}
    if (!inv || !items) return
    const fmt = n => Number(n).toLocaleString('es-AR')
    const lineas = items.map(stand => {
      const sub = (stand.items||[]).reduce((s,i)=>s+(i.sub||0),0)
      const detalle = (stand.items||[]).map(i => `  • ${i.desc}: $${fmt(i.sub)}`).join('\n')
      return `🍷 *${stand.standNombre}* (Stand #${stand.standId})\n${detalle}\n  Total: $${fmt(sub)}`
    }).join('\n\n')
    const total = items.reduce((s,si) => s+(si.items||[]).reduce((ss,i)=>ss+(i.sub||0),0), 0)
    const msg = `Hola ${inv.nombre}! 🍷\n\nAquí están tus vouchers de SUCOVI 2027:\n\n${lineas}\n\n💰 *Total pagado: $${fmt(total)}*\n\nPresentá cada voucher en el stand correspondiente para retirar tus vinos. \n\n_Sáb 20 jun 2026 · Roma 656, Olivos_`
    const tel = inv.tel?.replace(/\D/g, '')
    const waUrl = 'https://wa.me/54' + tel + '?text=' + encodeURIComponent(msg)
    window.open(waUrl, '_blank')
  }

  window._cancelarCarrito = async () => {
    if (!confirm('¿Cancelar y vaciar el carrito de ' + invSeleccionado.nombre + '?')) return
    // Liberar reservado en stock
    for (const stand of carritoInv) {
      for (const item of (stand.items||[])) {
        if (item.vinoId) await liberarReservaStock(stand.standId, item.vinoId, item.qty||1).catch(()=>{})
      }
    }
    await vaciarCarrito(invSeleccionado.fireId)
    invSeleccionado = null; carritoInv = []
    renderCobrar()
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
      // Mover reservado a pagado en stock
      for (const stand of items) {
        for (const item of (stand.items||[])) {
          if (item.vinoId) await cobrarStock(stand.standId, item.vinoId, item.qty||1).catch(()=>{})
        }
      }
      await vaciarCarrito(inv.fireId)
      msg.innerHTML = `<span style="color:#065F46;font-size:14px;font-weight:500">
        ✅ ¡Cobrado! ${items.length} voucher${items.length>1?'s':''} generado${items.length>1?'s':''}.
      </span>`
      if (btn) btn.style.display = 'none'
      const va = document.getElementById('voucher-actions')
      if (va) va.style.display = 'flex'
      // Store cobrado data for print/WA — get pedido IDs from Firebase
      window._lastCobrado = { inv, items }
      // Load pedido IDs for QR generation
      const { escucharPedidosPorInvitado } = await import('../firebase.js')
      escucharPedidosPorInvitado(inv.fireId, peds => {
        const nuevos = peds.filter(p => items.some(s => s.standId === p.standId))
        window._lastPedidosIds = nuevos.map(p => p.fireId)
        window._lastVoucherNums = nuevos.map(p => p.voucherNum||0)
        console.log('voucherNums:', window._lastVoucherNums)
      })
    } catch(e) {
      msg.innerHTML = `<span style="color:#C0392B">Error: ${e.message}</span>`
      if (btn) { btn.disabled = false; btn.textContent = 'Reintentar' }
    }
  }

  function renderPedidosPagados() {
    const el = document.getElementById('caja-content')
    // Group by invitado
    const peds = pedidosExistentes.filter(p => p.retiro !== 'envio')
    const LE = { pagado:'Pagado', listo:'Listo', entregado:'Entregado' }
    const BE = { pagado:'b-pago', listo:'b-list', entregado:'b-entr' }
    if (!peds.length) { el.innerHTML = '<div class="empty">Sin pedidos aún</div>'; return }
    // Group by invFireId
    const byInv = {}
    peds.forEach(p => {
      if (!byInv[p.invFireId]) byInv[p.invFireId] = { nombre: p.invNombre, codigo: p.invCodigo||'', peds: [] }
      byInv[p.invFireId].peds.push(p)
    })
    el.innerHTML = Object.entries(byInv).map(([invId, data]) => {
      const total = data.peds.reduce((s,p) => s+(p.total||0), 0)
      return `
      <div class="card" style="margin-bottom:10px;cursor:pointer" onclick="window._verDetallePedido('${invId}')">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="avatar" style="width:36px;height:36px;font-size:12px;flex-shrink:0">
            ${(data.nombre||'??')[0]}${(data.nombre||'??').split(' ')[1]?.[0]||''}
          </div>
          <div style="flex:1;min-width:0">
            <div style="font-size:14px;font-weight:500">${data.nombre||''}</div>
            <div style="font-size:11px;color:#888">${data.peds.length} stand${data.peds.length>1?'s':''} · ${data.peds.map(p=>'<span class="badge '+BE[p.estado]+'" style="font-size:10px">'+p.standNombre+'</span>').join(' ')}</div>
          </div>
          <div style="text-align:right;flex-shrink:0">
            <div style="font-size:15px;font-weight:500">$${fmt(total)}</div>
            <div style="font-size:11px;color:#5BA4CF">Ver detalle ›</div>
          </div>
        </div>
      </div>`
    }).join('')
  }

  window._verDetallePedido = (invFireId) => {
    const el = document.getElementById('caja-content')
    const peds = pedidosExistentes.filter(p => p.invFireId === invFireId)
    const inv = invitados.find(i => i.fireId === invFireId) || { nombre: peds[0]?.invNombre||'', apellido:'', codigo: peds[0]?.invCodigo||'', tel:'' }
    const items = peds.filter(p => p.estado !== 'reembolsado' && p.estado !== 'cancelado').map(p => ({
      standId: p.standId, standNombre: p.standNombre, retiro: p.retiro,
      items: p.items||[], fireId: p.fireId
    }))
    const total = peds.filter(p => p.estado !== 'reembolsado' && p.estado !== 'cancelado')
                      .reduce((s,p) => s+(p.total||0), 0)
    window._lastCobrado = { inv, items }
    window._lastPedidosIds = peds.filter(p => p.estado === 'pagado').map(p => p.fireId)

    const colorBorde = { pagado:'#5BA4CF', entregado:'#3A7D44', reembolsado:'#C0392B', cancelado:'#C0392B', listo:'#D97706' }
    const BE = { pagado:'b-pago', listo:'b-list', entregado:'b-entr', reembolsado:'b-canc', cancelado:'b-canc' }
    const LE = { pagado:'💳 Pagado', listo:'✅ Listo', entregado:'📦 Entregado', reembolsado:'↩️ Reembolsado', cancelado:'❌ Cancelado' }

    el.innerHTML = `
      <button class="btn" onclick="window._cajaVista('pedidos', document.querySelector('.nav button:nth-child(2)'))"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>
      <div class="card" style="margin-bottom:12px">
        <div style="font-size:16px;font-weight:500">${inv.nombre} ${inv.apellido}</div>
        <div style="font-size:12px;color:#888">${inv.codigo}${inv.tel?' · '+inv.tel:''}</div>
      </div>
      ${peds.map(p => `
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${colorBorde[p.estado]||'#5BA4CF'};
          ${p.estado==='reembolsado'||p.estado==='cancelado'?'opacity:.7':''}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:500;color:#1A3A5C">🍷 ${p.standNombre}</div>
            <span class="badge ${BE[p.estado]||'b-pago'}">${LE[p.estado]||p.estado}</span>
          </div>
          ${(p.items||[]).map(i => `
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555;
              ${p.estado==='reembolsado'||p.estado==='cancelado'?'text-decoration:line-through':''}">
              <span>${i.desc}</span><strong>$${fmt(i.sub)}</strong>
            </div>`).join('')}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Subtotal</span>
            <span ${p.estado==='reembolsado'||p.estado==='cancelado'?'style="text-decoration:line-through;color:#C0392B"':''}>
              $${fmt(p.total||0)}
            </span>
          </div>
          ${p.estado==='pagado' ? `
            <button class="btn" style="margin-top:10px;width:100%;padding:7px;font-size:12px;
              color:#C0392B;border-color:#C0392B"
              onclick="window._reembolsarUnPedido('${p.fireId}','${invFireId}')">
              ↩️ Reembolsar este stand
            </button>` : ''}
          ${p.estado==='reembolsado' ? `
            <div style="font-size:11px;color:#C0392B;margin-top:6px">
              Reembolsado el ${p.reembolsadoAt ? new Date(p.reembolsadoAt).toLocaleString('es-AR') : ''}
            </div>` : ''}
        </div>`).join('')}
      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>TOTAL COBRADO</span><span style="color:#1A3A5C">$${fmt(total)}</span>
        </div>
        <div style="font-size:11px;color:#888;margin-top:4px">Sin incluir reembolsos</div>
      </div>
      <div style="display:flex;gap:8px;flex-direction:column">
        <button class="btn btn-b" style="width:100%;padding:10px;font-size:14px"
          onclick="window._imprimirVouchers()">🖨️ Imprimir vouchers</button>
        <button class="btn btn-g" style="width:100%;padding:10px;font-size:14px"
          onclick="window._enviarVouchersWA()">📱 Enviar por WhatsApp</button>
        <button class="btn" style="width:100%;padding:10px;font-size:14px;background:#6B21A8;color:#fff;border-color:#6B21A8"
          onclick="window._descargarVoucherPDF()">⬇️ Descargar PDF</button>
      </div>`
  }

  window._reembolsarUnPedido = async (fireId, invFireId) => {
    if (!confirm('¿Reembolsar este pedido? El stand no podrá marcarlo como entregado.')) return
    await reembolsarPedido(fireId)
    window._verDetallePedido(invFireId)
  }

  window._descargarVoucherPDF = async () => {
    const { inv, items } = window._lastCobrado || {}
    if (!inv || !items) return

    // Load jsPDF
    if (!window.jspdf) {
      await new Promise((res, rej) => {
        const s = document.createElement('script')
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
        s.onload = res; s.onerror = rej
        document.head.appendChild(s)
      })
    }
    // Load QR lib
    if (!window.qrcode) {
      await new Promise((res, rej) => {
        const s = document.createElement('script')
        s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
        s.onload = res; s.onerror = rej
        document.head.appendChild(s)
      })
    }

    const { jsPDF } = window.jspdf
    const doc = new jsPDF({ unit: 'mm', format: 'a4' })
    const pids = window._lastPedidosIds || []
    let y = 15

    const drawVoucher = (item, pid, startY) => {
      const h = 80
      // Border
      doc.setDrawColor(26, 58, 92)
      doc.setLineWidth(0.4)
      doc.roundedRect(10, startY, 190, h, 3, 3, 'S')
      // Header bar
      doc.setFillColor(26, 58, 92)
      doc.roundedRect(10, startY, 190, 18, 3, 3, 'F')
      doc.setFillColor(26, 58, 92)
      doc.rect(10, startY+12, 190, 6, 'F')
      // Gold line
      doc.setFillColor(201, 169, 110)
      doc.rect(10, startY+18, 190, 1.5, 'F')
      // Header text
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text('SUCOVI 2027 · VOUCHER DE RETIRO', 15, startY+10)
      doc.setFontSize(8)
      doc.setFont('helvetica', 'normal')
      doc.text('Stand #' + item.standId, 185, startY+10, { align: 'right' })
      // Body
      doc.setTextColor(26, 58, 92)
      doc.setFontSize(13)
      doc.setFont('helvetica', 'bold')
      doc.text('🍷 ' + item.standNombre, 15, startY+28)
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(80, 80, 80)
      doc.text((inv.nombre||'') + ' ' + (inv.apellido||'') + ' · ' + (inv.codigo||''), 15, startY+36)
      // Items
      let iy = startY+44
      ;(item.items||[]).forEach(i => {
        doc.setFontSize(10)
        doc.setTextColor(60, 60, 60)
        doc.text(i.desc, 15, iy)
        doc.setFont('helvetica', 'bold')
        doc.text('$' + Number(i.sub).toLocaleString('es-AR'), 195, iy, { align: 'right' })
        doc.setFont('helvetica', 'normal')
        iy += 7
      })
      // Total
      doc.setDrawColor(200, 200, 200)
      doc.setLineWidth(0.3)
      doc.line(15, iy, 195, iy)
      iy += 5
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(26, 58, 92)
      doc.text('Total', 15, iy)
      doc.text('$' + Number((item.items||[]).reduce((s,i)=>s+(i.sub||0),0)).toLocaleString('es-AR'), 195, iy, { align: 'right' })
      // Badge
      doc.setFillColor(58, 125, 68)
      doc.roundedRect(130, startY+26, 30, 8, 2, 2, 'F')
      doc.setTextColor(255,255,255)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'bold')
      doc.text('✅ PAGADO', 145, startY+31.5, { align: 'center' })
      // QR
      if (pid && window.qrcode) {
        try {
          const qr = window.qrcode(0, 'M')
          qr.addData(pid)
          qr.make()
          const modules = qr.getModuleCount()
          const sz = 28
          const cs = sz / modules
          const qx = 168, qy = startY + 26
          doc.setFillColor(255,255,255)
          doc.rect(qx-1, qy-1, sz+2, sz+2, 'F')
          doc.setFillColor(0,0,0)
          for (let r=0; r<modules; r++)
            for (let col=0; col<modules; col++)
              if (qr.isDark(r, col))
                doc.rect(qx+col*cs, qy+r*cs, cs, cs, 'F')
          doc.setFontSize(6)
          doc.setTextColor(120,120,120)
          doc.text('Escaneá en el stand', qx+sz/2, qy+sz+4, { align: 'center' })
        } catch(e) {}
      }
      return startY + h + 8
    }

    items.forEach((item, idx) => {
      if (idx > 0 && y > 130) { doc.addPage(); y = 15 }
      y = drawVoucher(item, pids[idx], y)
    })

    doc.save('Voucher_' + (inv.nombre||'').replace(/ /g,'_') + '_SUCOVI2027.pdf')
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
