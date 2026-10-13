// src/pages/caja.js
import { BODEGAS, escucharInvitados, leerCarrito, crearPedidosDesdeCarrito, cobrarStock, liberarReservaStock,
         vaciarCarrito, escucharPedidos, cancelarPedido, reembolsarPedido, escucharVinos, crearPedidoEspecial, actualizarPedidoEspecial, escucharPedidosEspeciales } from '../firebase.js'
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
      <button onclick="window._cajaVista('especial',this)">📦 Pedido especial</button>

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
    if (vista === 'especial') renderPedidoEspecial()

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
            <div style="font-size:12px;color:#888">${i.codigo} · ${i.tel}${i.familia?' · Familia '+i.familia:''}</div>
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
            <div style="font-size:12px;color:#888">${inv.codigo}${inv.tel?' · '+inv.tel:''}${inv.familia?' · Familia '+inv.familia:''}</div>
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
        <button class="btn" style="width:100%;padding:10px;font-size:13px;margin-top:6px;color:#D97706;border-color:#D97706"
          onclick="window._imprimirPreVoucher()">
          🧾 Pre-voucher (pendiente de pago)
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

  window._imprimirPreVoucher = () => {
    const inv = invSeleccionado; if (!inv) return
    const items = carritoInv.filter(s => s.items?.length)
    if (!items.length) return
    const fmt = n => Number(n).toLocaleString('es-AR')
    const win = window.open('', '_blank')
    win.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8"><title>Pre-voucher</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #D97706; border-radius: 10px; padding: 16px; margin-bottom: 16px; page-break-inside: avoid; }
        .header { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #FDE68A; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .stand { font-size: 22px; font-weight: 600; color: #1A3A5C; }
        .inv { font-size: 16px; color: #444; }
        .item { display: flex; justify-content: space-between; font-size: 15px; padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px; font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .sello { text-align:center; margin-top:16px; padding:12px; border: 4px solid #D97706; border-radius: 8px; color: #D97706; font-size: 28px; font-weight: 900; letter-spacing: .15em; }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
    ${items.map(stand => `
      <div class="voucher">
        <div class="header">
          <div>
            <div class="evento">SUCOVI 2027 · PRE-VOUCHER · Stand #${stand.standId}</div>
            <div class="stand">${stand.standNombre}</div>
            <div class="inv">${inv.nombre} ${inv.apellido} · ${inv.codigo}${inv.familia ? ' · Familia ' + inv.familia : ''}</div>
          </div>
          <div style="text-align:right">
            <div style="background:#FEF3C7;color:#D97706;padding:3px 12px;border-radius:20px;font-size:11px;font-weight:600">⏳ PENDIENTE</div>
          </div>
        </div>
        ${(stand.items||[]).map(i => `
          <div class="item"><span>${i.vinoCodigoLegible ? '<span style="font-size:10px;background:#1A3A5C;color:#fff;padding:1px 5px;border-radius:6px;margin-right:4px">'+i.vinoCodigoLegible+'</span>' : ''}${i.desc}</span><strong>$${fmt(i.sub)}</strong></div>
        `).join('')}
        <div class="total"><span>Total</span><span>$${fmt((stand.items||[]).reduce((s,i)=>s+(i.sub||0),0))}</span></div>
        <div class="sello">⏳ PENDIENTE DE PAGO</div>
      </div>`).join('')}
    <script>setTimeout(()=>window.print(),500)<\/script>
    </body></html>`)
    win.document.close()
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
        .voc-num { font-size: 22px; font-weight: 700; color: #1A3A5C; letter-spacing: .04em; margin-top: 2px; }
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
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${stand.standId}</div>
              <div class="voc-num">${window._lastPedidosIds && items[idx] ? 'VOC-'+String((window._lastVoucherNums||[])[idx]||0).padStart(3,'0') : 'VOC-000'}</div>
              <div class="stand">${stand.standNombre}</div>
              <div class="inv">${inv.nombre} ${inv.apellido} · ${inv.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(stand.items||[]).map(i => `
            <div class="item"><span>${i.vinoCodigoLegible ? '<span style="font-size:10px;background:#1A3A5C;color:#fff;padding:1px 6px;border-radius:8px;margin-right:5px;font-weight:600">'+i.vinoCodigoLegible+'</span>' : ''}${i.desc}</span><strong>$${fmt(i.sub)}</strong></div>
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
              <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${stand.standId}</div>
              <div class="voc-num">${window._lastPedidosIds && items[idx] ? 'VOC-'+String((window._lastVoucherNums||[])[idx]||0).padStart(3,'0') : 'VOC-000'}</div>
              <div class="stand">${stand.standNombre}</div>
              <div class="inv">${inv.nombre} ${inv.apellido} · ${inv.codigo}</div>
            </div>
            <div style="text-align:right">
              <div class="badge">✅ PAGADO</div>
            </div>
          </div>
          ${(stand.items||[]).map(i => `
            <div class="item"><span>${i.vinoCodigoLegible ? '<span style="font-size:10px;background:#1A3A5C;color:#fff;padding:1px 6px;border-radius:8px;margin-right:5px;font-weight:600">'+i.vinoCodigoLegible+'</span>' : ''}${i.desc}</span><strong>$${fmt(i.sub)}</strong></div>
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
      const pedidoRefs = await crearPedidosDesdeCarrito(inv, items)
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
      // Usar IDs y voucherNums devueltos directamente por crearPedidosDesdeCarrito (orden garantizado)
      window._lastPedidosIds = pedidoRefs.map(r => r.fireId)
      window._lastVoucherNums = pedidoRefs.map(r => r.voucherNum)
      console.log('voucherNums (garantizados):', window._lastVoucherNums)
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
    window._lastVoucherNums = peds.filter(p => p.estado === 'pagado').map(p => p.voucherNum||0)

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

    const drawVoucher = (item, pid, voucherNum, startY) => {
      const itemCount = (item.items||[]).length
      const h = Math.max(90, 62 + itemCount * 7)
      // Border
      doc.setDrawColor(26, 58, 92)
      doc.setLineWidth(0.5)
      doc.roundedRect(10, startY, 190, h, 3, 3, 'S')
      // Header bar
      doc.setFillColor(26, 58, 92)
      doc.roundedRect(10, startY, 190, 16, 3, 3, 'F')
      doc.rect(10, startY+10, 190, 6, 'F')
      // Header text
      doc.setTextColor(180, 180, 180)
      doc.setFontSize(7)
      doc.setFont('helvetica', 'normal')
      doc.text('SUCOVI 2027  .  VOUCHER DE RETIRO', 15, startY+7)
      doc.text('Stand #' + item.standId, 195, startY+7, { align: 'right' })
      // VOC number - grande y prominente
      const vocStr = voucherNum ? 'VOC-' + String(voucherNum).padStart(3,'0') : 'VOC-000'
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(18)
      doc.setFont('helvetica', 'bold')
      doc.text(vocStr, 15, startY+14)
      // PAGADO badge en header
      doc.setFillColor(58, 125, 68)
      doc.roundedRect(158, startY+9, 38, 8, 2, 2, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(8)
      doc.setFont('helvetica', 'bold')
      doc.text('V PAGADO', 177, startY+14.5, { align: 'center' })
      // Nombre bodega
      doc.setTextColor(26, 58, 92)
      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.text(item.standNombre, 15, startY+26)
      // Invitado
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(100, 100, 100)
      doc.text((inv.nombre||'') + ' ' + (inv.apellido||'') + '  .  ' + (inv.codigo||''), 15, startY+33)
      // Separador
      doc.setDrawColor(220, 220, 220)
      doc.setLineWidth(0.3)
      doc.line(15, startY+37, 195, startY+37)
      // Items
      let iy = startY+44
      ;(item.items||[]).forEach(i => {
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor(50, 50, 50)
        doc.text(i.desc, 15, iy)
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(30, 30, 30)
        doc.text('$' + Number(i.sub).toLocaleString('es-AR'), 145, iy, { align: 'right' })
        doc.setFont('helvetica', 'normal')
        iy += 7
      })
      // Separador total
      doc.setDrawColor(180, 180, 180)
      doc.setLineWidth(0.3)
      doc.line(15, iy, 145, iy)
      iy += 6
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(26, 58, 92)
      doc.text('Total', 15, iy)
      doc.text('$' + Number((item.items||[]).reduce((s,i)=>s+(i.sub||0),0)).toLocaleString('es-AR'), 145, iy, { align: 'right' })
      // QR
      if (pid && window.qrcode) {
        try {
          const qr = window.qrcode(0, 'M')
          qr.addData(pid)
          qr.make()
          const modules = qr.getModuleCount()
          const sz = 32
          const cs = sz / modules
          const qx = 158, qy = startY + 38
          doc.setFillColor(255,255,255)
          doc.rect(qx-1, qy-1, sz+2, sz+2, 'F')
          doc.setFillColor(0,0,0)
          for (let r=0; r<modules; r++)
            for (let col=0; col<modules; col++)
              if (qr.isDark(r, col))
                doc.rect(qx+col*cs, qy+r*cs, cs, cs, 'F')
          doc.setFontSize(6)
          doc.setFont('helvetica', 'normal')
          doc.setTextColor(120,120,120)
          doc.text('Escaneá en el stand', qx+sz/2, qy+sz+4, { align: 'center' })
        } catch(e) {}
      }
      return startY + h + 8
    }

    items.forEach((item, idx) => {
      if (idx > 0 && y > 130) { doc.addPage(); y = 15 }
      y = drawVoucher(item, pids[idx], (window._lastVoucherNums||[])[idx], y)
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

  // ── Pedido Especial ──────────────────────────────────────────────────────
  let peInv = null, peItems = [], peVinos = {}

  function renderPedidoEspecial() {
    const el = document.getElementById('caja-content')
    el.innerHTML = `
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📦 Pedido especial — Pago en caja</p>
          <p style="font-size:12px;color:#888;margin-bottom:10px">Buscá el invitado por código o escaneá su QR</p>
          <div style="display:flex;gap:8px;margin-bottom:8px">
            <input id="pe-codigo" type="text" placeholder="INV-0001 o apellido"
              style="flex:1;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px;text-transform:uppercase"
              oninput="this.value=this.value.toUpperCase()">
            <button class="btn btn-b" style="padding:8px 12px" onclick="window._peBuscar()">Buscar</button>
            <button class="btn" style="padding:8px 10px" onclick="window._peScanner()">📷</button>
          </div>
          <div id="pe-inv-info"></div>
        </div>
        <div id="pe-carta" style="display:none">
          <div class="card" style="margin-bottom:12px">
            <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">Seleccioná los vinos</p>
            <div id="pe-vinos-lista"></div>
          </div>
          <div id="pe-resumen" class="card" style="display:none;margin-bottom:12px"></div>
          <button id="pe-btn-cobrar" class="btn btn-v" style="width:100%;padding:12px;font-size:15px;display:none"
            onclick="window._peCobrar()">💳 Cobrar pedido especial</button>
        </div>
        <div id="pe-msg" style="text-align:center;font-size:13px;margin-top:8px"></div>
      </div>`
    peInv = null; peItems = []
    cargarVinosPE()
    // Historial al pie
    setTimeout(() => {
      const el = document.getElementById('caja-content')
      if (!el) return
      const hist = document.createElement('div')
      hist.id = 'pe-hist-lista'
      hist.style.cssText = 'max-width:500px;margin:12px auto 0'
      el.appendChild(hist)
      escucharPedidosEspeciales(data => {
        const el2 = document.getElementById('pe-hist-lista'); if (!el2) return
        if (!data.length) return
        const sorted = [...data].sort((a,b) => (b.creadoEn||'').localeCompare(a.creadoEn||''))
        el2.innerHTML = '<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">PEDIDOS ESPECIALES COBRADOS HOY</p>' +
          sorted.map(p =>
            '<div class="card" style="margin-bottom:8px;border-left:3px solid #5BA4CF;cursor:pointer" onclick="window._peVerDetalle(&quot;' + p.fireId + '&quot;)">' +
              '<div style="display:flex;justify-content:space-between;align-items:start">' +
                '<div><div style="font-size:13px;font-weight:600;color:#1A3A5C">' + (p.peNum||'') + ' · ' + (p.invNombre||'') + '</div>' +
                '<div style="font-size:11px;color:#888">' + (p.invCodigo||'') + (p.familia ? ' · Familia ' + p.familia : '') + '</div>' +
                '<div style="font-size:12px;color:#555;margin-top:4px">' + (p.items||[]).map(i => i.desc).join(', ') + '</div></div>' +
                '<div style="text-align:right;flex-shrink:0;margin-left:8px"><div style="font-size:14px;font-weight:600">$' + fmt(p.total||0) + '</div>' +
                '<span class="badge ' + (p.estado==='entregado'?'b-entr':'b-pago') + '" style="font-size:10px">' + (p.estado==='entregado'?'Entregado':'Pendiente') + '</span>' +
                '<div style="font-size:10px;color:#888;margin-top:2px">Ver detalle ›</div></div>' +
              '</div>' +
            '</div>'
          ).join('')
        window._peVerDetalle = (fireId) => {
          const p = sorted.find(x => x.fireId === fireId); if (!p) return
          peUltimo = p
          const fmtN = n => Number(n).toLocaleString('es-AR')
          const el3 = document.getElementById('caja-content'); if (!el3) return
          const dir = p.envio
          el3.innerHTML = '<div class="wrap" style="max-width:500px;margin:0 auto">' +
            '<button class="btn" onclick="window._cajaVista(&quot;especial&quot;, document.querySelector(&quot;.nav button:nth-child(3)&quot;))" style="margin-bottom:12px">← Volver</button>' +
            '<div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF">' +
              '<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">' +
                '<div><div style="font-size:18px;font-weight:700;color:#1A3A5C">' + (p.peNum||'') + '</div>' +
                '<div style="font-size:14px;font-weight:500">' + (p.invNombre||'') + '</div>' +
                '<div style="font-size:12px;color:#888">' + (p.invCodigo||'') + (p.familia ? ' · Familia ' + p.familia : '') + '</div></div>' +
                '<span class="badge ' + (p.estado==='entregado'?'b-entr':'b-pago') + '">' + (p.estado==='entregado'?'Entregado':'Pendiente') + '</span>' +
              '</div>' +
              (p.items||[]).map(i => '<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>' + i.desc + '</span><strong>$' + fmtN(i.sub) + '</strong></div>').join('') +
              '<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$' + fmtN(p.total||0) + '</span></div>' +
            '</div>' +
            (dir ? '<div class="card" style="margin-bottom:12px;background:#f0f4f8"><p style="font-size:11px;font-weight:500;color:#888;margin-bottom:6px">DATOS DE ENTREGA</p><div style="font-size:13px"><strong>' + dir.nombre + '</strong> · ' + dir.tel + '<br>' + dir.calle + ' ' + dir.numero + (dir.piso?', '+dir.piso:'') + ', ' + dir.localidad + ', ' + dir.provincia + '</div></div>' : '') +
            '<button class="btn btn-b" style="width:100%;padding:12px;font-size:14px" onclick="window._peImprimirVoucher()">🖨️ Imprimir voucher</button>' +
          '</div>'
        }
      })
    }, 300)
  }

  async function cargarVinosPE() {
    peVinos = {}
    let cargados = 0
    BODEGAS.forEach(b => {
      escucharVinos(b.id, vinos => {
        peVinos[b.id] = { bodega: b, vinos: vinos.filter(v => (v.unidades||[]).some(u => u.unidadesPorCaja)) }
        cargados++
        if (cargados === BODEGAS.length) renderVinosPE()
      })
    })
  }

  function renderVinosPE() {
    const el = document.getElementById('pe-vinos-lista'); if (!el) return
    const bodegas = Object.values(peVinos).filter(b => b.vinos.length > 0)
    if (!bodegas.length) { el.innerHTML = '<div class="empty">No hay vinos con precio de caja cargado todavía.</div>'; return }
    el.innerHTML = '<div style="margin-bottom:12px"><input id="pe-buscar-vino" type="text" placeholder="Buscar vino..." style="width:100%;padding:8px;border:1px solid #ccc;border-radius:6px;font-size:14px" oninput="window._peFiltrarVinos()"></div>' +
      bodegas.map(({ bodega, vinos }) =>
      '<div style="margin-bottom:14px">' +
        '<div class="pe-bodega-bloque"><div class="pe-bodega-titulo" style="font-size:12px;font-weight:600;color:#1A3A5C;margin-bottom:6px;text-transform:uppercase">' + bodega.nombre + '</div>' +
        vinos.map(v => {
          const caja = (v.unidades||[]).find(u => u.unidadesPorCaja)
          if (!caja) return ''
          return '<div class="pe-vino-wrap" data-nombre="' + v.nombre.toLowerCase() + '"><div class="pe-vino-row" style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:.5px solid #eee">' +
            '<div style="flex:1">' +
              '<div style="font-size:13px;font-weight:500">' + v.nombre + '</div>' +
              '<div style="font-size:11px;color:#888">' + (v.varietal||'') + ' · Caja x' + caja.unidadesPorCaja + ' · $' + fmt(caja.p) + '</div>' +
            '</div>' +
            '<div style="display:flex;align-items:center;gap:8px">' +
              '<button class="qty-btn" onclick="window._peQty(' + bodega.id + ',\'' + v.fireId + '\',-1)">−</button>' +
              '<span id="pe-qty-' + bodega.id + '-' + v.fireId + '" style="min-width:20px;text-align:center;font-size:14px">0</span>' +
              '<button class="qty-btn" onclick="window._peQty(' + bodega.id + ',\'' + v.fireId + '\',1)">+</button>' +
            '</div>' +
          '</div></div>'
        }).join('') +
      '</div>'
    ).join('')
  }

  window._peFiltrarVinos = () => {
    const q = (document.getElementById('pe-buscar-vino')?.value || '').toLowerCase()
    document.querySelectorAll('#pe-vinos-lista .pe-vino-wrap').forEach(wrap => {
      wrap.style.display = wrap.dataset.nombre.toLowerCase().includes(q) ? '' : 'none'
    })
    document.querySelectorAll('#pe-vinos-lista .pe-bodega-bloque').forEach(bloque => {
      const visible = [...bloque.querySelectorAll('.pe-vino-wrap')].some(w => w.style.display !== 'none')
      bloque.style.display = visible ? '' : 'none'
    })
  }

  window._peBuscar = () => {
    const q = document.getElementById('pe-codigo').value.trim().toUpperCase()
    if (!q) return
    const el = document.getElementById('pe-inv-info')
    const encontrados = invitados.filter(i => i.codigo === q || (i.nombre + ' ' + i.apellido).toUpperCase().includes(q))
    if (!encontrados.length) { el.innerHTML = '<div style="color:#C0392B;font-size:12px">Invitado no encontrado</div>'; return }
    if (encontrados.length === 1) {
      window._peSeleccionar(encontrados[0].fireId)
    } else {
      el.innerHTML = '<div style="font-size:12px;color:#555;margin-bottom:6px">Seleccioná el invitado:</div>' +
        encontrados.map(inv =>
          '<div onclick="window._peSeleccionar(\'' + inv.fireId + '\')" style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px;cursor:pointer;margin-bottom:6px;border:1px solid #D6E4F0">' +
          '<strong>' + inv.nombre + ' ' + inv.apellido + '</strong> · ' + inv.codigo +
          (inv.familia ? ' · Familia ' + inv.familia : '') +
          '</div>'
        ).join('')
    }
  }

  window._peSeleccionar = (fireId) => {
    const inv = invitados.find(i => i.fireId === fireId); if (!inv) return
    peInv = inv
    const el = document.getElementById('pe-inv-info')
    el.innerHTML = '<div style="background:#f0f4f8;border-radius:8px;padding:10px;font-size:13px">' +
      '<strong>' + inv.nombre + ' ' + inv.apellido + '</strong> · ' + inv.codigo +
      (inv.familia ? ' · Familia ' + inv.familia : '') +
      '</div>'
    document.getElementById('pe-carta').style.display = 'block'
    renderVinosPE()
  }

  window._peScanner = async () => {
    await loadJsQR()
    const overlay = document.getElementById('scan-overlay')
    overlay.style.display = 'flex'
    scannerActive = true
    try {
      scannerStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('scan-video')
      video.srcObject = scannerStream
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const scan = () => {
        if (!scannerActive) return
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth; canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0)
          const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const code = window.jsQR(img.data, img.width, img.height)
          if (code) {
            window._cerrarScanner()
            const match = code.data.match(/inv=([A-Z0-9]+)/i)
            if (match) {
              const inv = invitados.find(i => i.token === match[1])
              if (inv) { document.getElementById('pe-codigo').value = inv.codigo; window._peBuscar() }
            }
          }
        }
        requestAnimationFrame(scan)
      }
      scan()
    } catch(e) { document.getElementById('scan-status').textContent = 'No se pudo acceder a la cámara.' }
  }

  window._peQty = (standId, vinoId, delta) => {
    const key = standId + '_' + vinoId
    const idx = peItems.findIndex(i => i.key === key)
    const bodegaData = peVinos[standId]
    if (!bodegaData) return
    const vino = bodegaData.vinos.find(v => (v.fireId||v.id) === vinoId)
    if (!vino) return
    const caja = (vino.unidades||[]).find(u => u.unidadesPorCaja)
    if (!caja) return
    if (idx >= 0) {
      peItems[idx].qty = Math.max(0, peItems[idx].qty + delta)
      if (peItems[idx].qty === 0) peItems.splice(idx, 1)
    } else if (delta > 0) {
      peItems.push({ key, standId: Number(standId), standNombre: bodegaData.bodega.nombre,
        vinoNombre: vino.nombre, vinoId, qty: 1, precioCaja: caja.p,
        unidadesPorCaja: caja.unidadesPorCaja,
        desc: vino.nombre + ' — Caja x' + caja.unidadesPorCaja + ' ×1', sub: caja.p })
    }
    const qtyEl = document.getElementById('pe-qty-' + standId + '-' + vinoId)
    const item = peItems.find(i => i.key === key)
    if (qtyEl) qtyEl.textContent = item ? item.qty : 0
    if (item) { item.sub = item.precioCaja * item.qty; item.desc = vino.nombre + ' — Caja x' + caja.unidadesPorCaja + ' ×' + item.qty }
    const resumen = document.getElementById('pe-resumen')
    const btnCobrar = document.getElementById('pe-btn-cobrar')
    if (!peItems.length) { resumen.style.display = 'none'; btnCobrar.style.display = 'none'; return }
    const total = peItems.reduce((s, i) => s + i.sub, 0)
    resumen.style.display = 'block'; btnCobrar.style.display = 'block'
    resumen.innerHTML = '<p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Resumen</p>' +
      peItems.map(i => '<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>' + i.desc + '</span><strong>$' + fmt(i.sub) + '</strong></div>').join('') +
      '<div style="display:flex;justify-content:space-between;font-size:16px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$' + fmt(total) + '</span></div>'
  }

  let peUltimo = null

  window._peCobrar = async () => {
    if (!peInv || !peItems.length) return
    const msg = document.getElementById('pe-msg')
    const btn = document.getElementById('pe-btn-cobrar')
    btn.disabled = true; btn.style.opacity = '0.6'
    msg.innerHTML = '<span style="color:#888">Procesando...</span>'
    try {
      const total = peItems.reduce((s, i) => s + i.sub, 0)
      const result = await crearPedidoEspecial({
        invFireId: peInv.fireId, invNombre: peInv.nombre + ' ' + peInv.apellido,
        invCodigo: peInv.codigo, familia: peInv.familia || '', items: peItems, total
      })
      peUltimo = { ...result, invNombre: peInv.nombre + ' ' + peInv.apellido,
        invCodigo: peInv.codigo, familia: peInv.familia || '', items: [...peItems], total }
      peInv = null; peItems = []
      renderPEDireccion()
    } catch(e) {
      msg.innerHTML = '<span style="color:#C0392B">Error: ' + e.message + '</span>'
      btn.disabled = false; btn.style.opacity = '1'
    }
  }

  function renderPEDireccion() {
    const el = document.getElementById('caja-content')
    el.innerHTML = `
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px;border-left:4px solid #3A7D44">
          <div style="font-size:15px;font-weight:600;color:#3A7D44;margin-bottom:4px">✅ ${peUltimo.peNum} registrado</div>
          <div style="font-size:13px;color:#555">${peUltimo.invNombre} · $${fmt(peUltimo.total)}</div>
        </div>
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📍 Datos de entrega</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Nombre destinatario</label><input id="pe-dir-nombre" style="margin-top:3px" placeholder="Nombre completo"></div>
            <div><label style="font-size:11px;color:#666">Teléfono</label><input id="pe-dir-tel" style="margin-top:3px" placeholder="+54 9 11..."></div>
          </div>
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Calle</label><input id="pe-dir-calle" style="margin-top:3px"></div>
            <div><label style="font-size:11px;color:#666">Número</label><input id="pe-dir-num" style="margin-top:3px"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Piso / Dpto</label><input id="pe-dir-piso" style="margin-top:3px"></div>
            <div><label style="font-size:11px;color:#666">Localidad</label><input id="pe-dir-loc" style="margin-top:3px"></div>
          </div>
          <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Provincia</label><input id="pe-dir-prov" style="margin-top:3px" value="Buenos Aires"></div>
          <div style="margin-bottom:12px"><label style="font-size:11px;color:#666">Observaciones</label><input id="pe-dir-obs" style="margin-top:3px" placeholder="Ej: dejar en portería"></div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-v" style="flex:1;padding:10px" onclick="window._peGuardarDir()">Guardar dirección e imprimir</button>
            <button class="btn" style="padding:10px" onclick="window._peSaltarDir()">Saltar</button>
          </div>
          <div id="pe-dir-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
        </div>
      </div>`
  }

  window._peGuardarDir = async () => {
    const dir = {
      nombre: document.getElementById('pe-dir-nombre').value.trim(),
      tel: document.getElementById('pe-dir-tel').value.trim(),
      calle: document.getElementById('pe-dir-calle').value.trim(),
      numero: document.getElementById('pe-dir-num').value.trim(),
      piso: document.getElementById('pe-dir-piso').value.trim(),
      localidad: document.getElementById('pe-dir-loc').value.trim(),
      provincia: document.getElementById('pe-dir-prov').value.trim(),
      observaciones: document.getElementById('pe-dir-obs')?.value.trim() || ''
    }
    const msg = document.getElementById('pe-dir-msg')
    if (!dir.nombre || !dir.calle || !dir.localidad) {
      msg.innerHTML = '<span style="color:#C0392B">Completá al menos nombre, calle y localidad.</span>'; return
    }
    msg.innerHTML = '<span style="color:#888">Guardando...</span>'
    await actualizarPedidoEspecial(peUltimo.fireId, { envio: dir })
    peUltimo.envio = dir
    window._peImprimirVoucher()
  }

  window._peSaltarDir = () => { window._peImprimirVoucher() }

  window._peImprimirVoucher = () => {
    const p = peUltimo; if (!p) return
    const win = window.open('', '_blank')
    const fmtN = n => Number(n).toLocaleString('es-AR')
    const dir = p.envio
    win.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8"><title>${p.peNum}</title>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px; margin-bottom: 16px; page-break-inside: avoid; }
        .header { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .pe-num { font-size: 22px; font-weight: 700; color: #1A3A5C; margin-top: 2px; }
        .item { display: flex; justify-content: space-between; font-size: 15px; padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px; font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .badge { background: #1A3A5C; color: #fff; padding: 3px 12px; border-radius: 20px; font-size: 11px; display: inline-block; }
        .dir-box { background: #f0f4f8; border-radius: 8px; padding: 10px; margin-top: 12px; font-size: 13px; }
        .sello { text-align:center; margin-top:16px; padding:10px; border: 3px solid #5BA4CF; border-radius: 8px; color: #5BA4CF; font-size: 20px; font-weight: 700; letter-spacing: .1em; }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
      <div class="voucher">
        <div class="header">
          <div>
            <div class="evento">SUCOVI 2027 · PEDIDO ESPECIAL</div>
            <div class="pe-num">${p.peNum}</div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C;margin-top:4px">${p.invNombre}</div>
            <div style="font-size:13px;color:#888">${p.invCodigo}${p.familia ? ' · Familia ' + p.familia : ''}</div>
          </div>
          <div style="text-align:right">
            <div class="badge">✅ PAGADO</div>
          </div>
        </div>
        ${(p.items||[]).map(i => '<div class="item"><span>' + i.desc + '</span><strong>$' + fmtN(i.sub) + '</strong></div>').join('')}
        <div class="total"><span>Total</span><span>$${fmtN(p.total)}</span></div>
        ${dir ? '<div class="dir-box"><strong>📍 Entrega:</strong> ' + dir.nombre + ' · ' + dir.tel + '<br>' + dir.calle + ' ' + dir.numero + (dir.piso ? ', ' + dir.piso : '') + ', ' + dir.localidad + ', ' + dir.provincia + '</div>' : ''}
        <div class="sello">📦 PEDIDO ESPECIAL — SIN QR</div>
      </div>
      <script>setTimeout(() => window.print(), 500)<\/script>
    </body></html>`)
    win.document.close()
    setTimeout(() => renderPEHistorial(), 1000)
  }

  function renderPEHistorial() {
    const el = document.getElementById('caja-content')
    el.innerHTML = `
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <div class="card" style="margin-bottom:12px;border-left:4px solid #3A7D44">
          <div style="font-size:13px;font-weight:600;color:#3A7D44">✅ ${peUltimo?.peNum} guardado</div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:14px">
          <button class="btn btn-v" style="flex:1;padding:10px" onclick="window._cajaVista('especial', document.querySelector('.nav button:nth-child(3)'))">+ Nuevo pedido especial</button>
          <button class="btn" style="flex:1;padding:10px" onclick="window._peImprimirVoucher()">🖨️ Reimprimir</button>
        </div>
        <div id="pe-historial-lista"><div class="empty">Cargando historial...</div></div>
      </div>`
    escucharPedidosEspeciales(data => {
      const el2 = document.getElementById('pe-historial-lista'); if (!el2) return
      if (!data.length) { el2.innerHTML = '<div class="empty">Sin pedidos especiales</div>'; return }
      const sorted = [...data].sort((a,b) => (b.creadoEn||'').localeCompare(a.creadoEn||''))
      el2.innerHTML = '<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:8px;letter-spacing:.05em">PEDIDOS ESPECIALES COBRADOS</p>' +
        sorted.map(p =>
          '<div class="card" style="margin-bottom:8px;border-left:3px solid #5BA4CF">' +
            '<div style="display:flex;justify-content:space-between;align-items:start">' +
              '<div>' +
                '<div style="font-size:13px;font-weight:600;color:#1A3A5C">' + (p.peNum||'') + ' · ' + (p.invNombre||'') + '</div>' +
                '<div style="font-size:11px;color:#888">' + (p.invCodigo||'') + (p.familia ? ' · Familia ' + p.familia : '') + '</div>' +
                '<div style="font-size:12px;color:#555;margin-top:4px">' + (p.items||[]).map(i => i.desc).join(', ') + '</div>' +
              '</div>' +
              '<div style="text-align:right;flex-shrink:0;margin-left:8px">' +
                '<div style="font-size:14px;font-weight:600">$' + fmt(p.total||0) + '</div>' +
                '<span class="badge ' + (p.estado==='entregado'?'b-entr':'b-pago') + '" style="font-size:10px">' + (p.estado==='entregado'?'Entregado':'Pendiente') + '</span>' +
              '</div>' +
            '</div>' +
          '</div></div>'
        ).join('')
    })
  }

  renderCobrar()

  // Botón de ayuda flotante
  const helpBtn = document.createElement('button')
  helpBtn.innerHTML = '?'
  helpBtn.style.cssText = 'position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)'
  helpBtn.onclick = () => document.getElementById('modal-ayuda-caja').style.display = 'flex'
  document.body.appendChild(helpBtn)

  const helpModal = document.createElement('div')
  helpModal.id = 'modal-ayuda-caja'
  helpModal.style.cssText = 'display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px'
  helpModal.innerHTML =
    '<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">' +
        '<div style="font-size:16px;font-weight:700;color:#1A3A5C">Panel de caja</div>' +
        '<button onclick="document.getElementById(&quot;modal-ayuda-caja&quot;).style.display=&quot;none&quot;" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button>' +
      '</div>' +
      '<div style="font-size:13px;color:#333;line-height:1.7">' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📷 Escanear código del invitado</div>' +
          '<div>Escaneá el QR o ingresá el código del invitado (ej: INV-0001) para ver su carrito de compras con todos los vinos que seleccionó en los stands.</div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">💳 Cobrar</div>' +
          '<div>Una vez verificado el carrito, tocá <strong>Cobrar</strong> para registrar el pago. Se genera automáticamente un voucher con número correlativo (VOC-001, VOC-002, etc.).</div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">⬇️ Descargar PDF</div>' +
          '<div>Después de cobrar podés descargar el voucher en PDF para entregar al invitado. El voucher incluye el QR para retirar los vinos en cada stand.</div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">↩️ Reembolsar</div>' +
          '<div>Si un pedido fue cobrado por error, podés reembolsarlo desde la lista de pedidos. El stand no podrá marcarlo como entregado.</div>' +
        '</div>' +
        '<div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">' +
          '⚠️ Verificá siempre el total antes de cobrar. El reembolso no devuelve dinero automáticamente.' +
        '</div>' +
      '</div>' +
    '</div>'
  helpModal.addEventListener('click', e => { if (e.target === helpModal) helpModal.style.display = 'none' })
  document.body.appendChild(helpModal)
}
