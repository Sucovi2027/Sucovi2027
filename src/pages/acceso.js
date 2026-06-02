import { buildInvHeader } from '../header.js'
// src/pages/acceso.js
import { buscarInvitadoPorToken, escucharPedidosPorInvitado } from '../firebase.js'
import { injectStyles } from '../styles.js'
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

  // pagado o ingresado — mostrar QR + carrito + vouchers
  body.innerHTML = `
    <div style="font-size:10px;color:#aaa;letter-spacing:.08em;margin-bottom:6px">SUCOVI 2027 · FERIA DE VINOS</div>
    <h2 style="font-size:20px;font-weight:500;margin-bottom:4px">${inv.nombre} ${inv.apellido}</h2>
    <span class="badge ${inv.estado==='ingresado'?'b-ingr':'b-pago'}" style="display:inline-block;margin-bottom:16px">
      ${inv.estado==='ingresado'?'✅ Ingresó al evento':'✅ Bono confirmado'}
    </span>

    <!-- QR de ingreso -->
    <div style="background:#f5f0eb;border-radius:12px;padding:16px;margin-bottom:14px">
      <canvas id="qr-acc" width="160" height="160"
        style="display:block;margin:0 auto 8px;border-radius:8px"></canvas>
      <p style="font-size:18px;font-weight:500;color:#6B1C1C;letter-spacing:.12em">${inv.codigo}</p>
      <p style="font-size:11px;color:#aaa;margin-top:3px">
        ${inv.estado==='ingresado'?'Ya ingresaste — ¡Disfrutá!':'Mostrá este código en la entrada'}
      </p>
    </div>

    <!-- Link al carrito -->
    <a href="/carrito?inv=${token}"
      style="display:block;background:#6B1C1C;color:#fff;border-radius:8px;
        padding:12px;font-size:14px;font-weight:500;text-decoration:none;margin-bottom:14px">
      🛒 Ver mi carrito de compras
    </a>

    <!-- Vouchers de pedidos pagados -->
    <div id="vouchers-acc"></div>

    <p style="font-size:11px;color:#aaa;margin-top:12px">
      Sáb 20 jun 2026 · 19:30 hs · Roma 656, Olivos
    </p>`

  setTimeout(() => drawQR('qr-acc', inv.codigo, 160), 50)

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

function drawQR(id, data, size) {
  const c = document.getElementById(id); if (!c) return
  const ctx = c.getContext('2d'); c.width=size; c.height=size
  const cells=21, cell=size/cells
  ctx.fillStyle='#fff'; ctx.fillRect(0,0,size,size); ctx.fillStyle='#1a1a1a'
  const seed = String(data).split('').reduce((a,ch)=>a+ch.charCodeAt(0),0)
  const bit  = (x,y) => ((x*7+y*13+seed*(x+1))%17)<8
  for(let y=0;y<cells;y++) for(let x=0;x<cells;x++){
    const iF=(fx,fy)=>x>=fx&&x<=fx+6&&y>=fy&&y<=fy+6
    const iFI=(fx,fy)=>x>=fx+2&&x<=fx+4&&y>=fy+2&&y<=fy+4
    if(iF(0,0)||iF(14,0)||iF(0,14)){
      const d=(iF(0,0)&&(x===0||x===6||y===0||y===6||iFI(0,0)))||
              (iF(14,0)&&(x===14||x===20||y===0||y===6||(x>=16&&x<=18&&y>=2&&y<=4)))||
              (iF(0,14)&&(x===0||x===6||y===14||y===20||(x>=2&&x<=4&&y>=16&&y<=18)))
      if(d) ctx.fillRect(x*cell,y*cell,cell,cell); continue
    }
    if(bit(x,y)) ctx.fillRect(x*cell+.5,y*cell+.5,cell-1,cell-1)
  }
}
