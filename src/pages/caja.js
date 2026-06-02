// src/pages/caja.js
import { escucharPedidos, avanzarEstado } from '../firebase.js'
import { injectStyles } from '../styles.js'
const fmt = n => Number(n).toLocaleString('es-AR')
const LE = { pendiente:'Pendiente', pagado:'Pagado', listo:'Listo', entregado:'Entregado' }
const BE = { pendiente:'b-pend', pagado:'b-pago', listo:'b-list', entregado:'b-entr' }
const BT = { pendiente:'Cobrar ✓', pagado:'Listo ✓', listo:'Entregar ✓' }
const BC = { pendiente:'btn-g', pagado:'btn-b', listo:'btn-v' }
const SE = { pendiente:'pagado', pagado:'listo', listo:'entregado' }

export function renderCaja(app) {
  injectStyles()
  let pedidos = [], filtro = 'pendiente'

  app.innerHTML = `
    <div class="hdr">
      <div><h1>💰 Caja central</h1><div class="sub">Cobrar pedidos · Sucovi 2027</div></div>
      <a href="/admin" class="btn" style="font-size:11px;padding:5px 9px;color:#fff;border-color:rgba(255,255,255,.3);text-decoration:none">← Panel</a>
    </div>
    <div class="gold"></div>
    <div class="wrap">
      <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap">
        <button id="cf-p" class="btn" onclick="window._setCF('pendiente',this)"
          style="font-size:11px;background:#FAEEDA;color:#854F0B;border-color:#C9A96E">🟠 Pendientes</button>
        <button id="cf-o" class="btn" onclick="window._setCF('pagado',this)" style="font-size:11px">✅ Pagados</button>
        <button id="cf-a" class="btn" onclick="window._setCF('',this)" style="font-size:11px">📋 Todos</button>
      </div>
      <div id="caja-lista"></div>
    </div>`

  const unsub = escucharPedidos(data => { pedidos = data; render() })

  window._setCF = (f, btn) => {
    filtro = f
    ;['cf-p','cf-o','cf-a'].forEach(id => {
      const b = document.getElementById(id)
      b.style.background='#fff'; b.style.color='#222'; b.style.borderColor='#ccc'
    })
    if (f==='pendiente') { btn.style.background='#FAEEDA'; btn.style.color='#854F0B'; btn.style.borderColor='#C9A96E' }
    else if (f==='pagado') { btn.style.background='#EAF3DE'; btn.style.color='#3B6D11'; btn.style.borderColor='#3B6D11' }
    else { btn.style.background='#6B1C1C'; btn.style.color='#fff'; btn.style.borderColor='#6B1C1C' }
    render()
  }

  window._avz = async (fireId, estado) => { await avanzarEstado(fireId, estado) }

  function render() {
    const el = document.getElementById('caja-lista'); if (!el) return
    const fil = pedidos.filter(p => !filtro || p.estado === filtro)
    if (!fil.length) { el.innerHTML = '<div class="empty">Sin pedidos</div>'; return }
    el.innerHTML = fil.map(p => {
      const hora = p.creadoEn?.toDate ? p.creadoEn.toDate().toLocaleTimeString('es-AR',{hour:'2-digit',minute:'2-digit'}) : '--:--'
      const num = '#' + (p.fireId?.slice(-4).toUpperCase() || '????')
      return `
        <div class="card" style="margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
            <div>
              <span style="font-size:20px;font-weight:500;color:#6B1C1C">${num}</span>
              <span style="font-size:13px;font-weight:500;margin-left:8px">${p.invNombre || ''}</span>
              ${p.retiro==='envio' ? '<span class="badge b-envi" style="margin-left:6px">🚚 Envío</span>' : ''}
            </div>
            <div style="text-align:right">
              <span class="badge ${BE[p.estado]}">${LE[p.estado]}</span>
              <div style="font-size:10px;color:#aaa;margin-top:2px">${hora}</div>
            </div>
          </div>
          <div style="font-size:12px;color:#6B1C1C;font-weight:500;margin-bottom:5px">
            📍 ${p.standNombre} · Stand #${p.standId}
          </div>
          <div style="font-size:12px;color:#666;margin-bottom:8px;line-height:1.7">
            ${(p.items||[]).map(i=>`${i.desc} <strong>$${fmt(i.sub)}</strong>`).join('<br>')}
            ${p.retiro==='envio'&&p.envio ? `<div style="margin-top:4px;font-size:11px;color:#5A1E99">🚚 ${p.envio.dir} · ${p.envio.tel}</div>` : ''}
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;border-top:.5px solid #e0d5c8;padding-top:8px">
            <span style="font-size:20px;font-weight:500">$${fmt(p.total||0)}</span>
            ${SE[p.estado]
              ? `<button class="btn ${BC[p.estado]}" onclick="window._avz('${p.fireId}','${p.estado}')">${BT[p.estado]}</button>`
              : '<span style="font-size:12px;color:#aaa">Completado</span>'}
          </div>
        </div>`
    }).join('')
  }
}
