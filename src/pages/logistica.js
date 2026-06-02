import { buildHeader } from '../header.js'
// src/pages/logistica.js
import { escucharPedidos, avanzarEstado } from '../firebase.js'
import { injectStyles } from '../styles.js'
const fmt = n => Number(n).toLocaleString('es-AR')
const LE = { pendiente:'Pendiente', pagado:'Pagado', listo:'Listo', entregado:'Entregado' }
const BE = { pendiente:'b-pend', pagado:'b-pago', listo:'b-list', entregado:'b-entr' }
const BT = { pendiente:'Cobrar ✓', pagado:'Listo ✓', listo:'Entregar ✓' }
const BC = { pendiente:'btn-g', pagado:'btn-b', listo:'btn-v' }
const SE = { pendiente:'pagado', pagado:'listo', listo:'entregado' }

export function renderLogistica(app) {
  injectStyles()
  let pedidos = []

  app.innerHTML = `
    ${buildHeader({ title:'🚚 Logística — Envíos', sub:'Pedidos para enviar a domicilio', backHref:'/admin' })}
    <div class="wrap" id="log-lista"></div>`

  const unsub = escucharPedidos(data => { pedidos = data; render() })
  window._avzLog = async (fireId, estado) => { await avanzarEstado(fireId, estado) }

  function render() {
    const el = document.getElementById('log-lista'); if (!el) return
    const envios = pedidos.filter(p => p.retiro === 'envio')
    if (!envios.length) {
      el.innerHTML = '<div class="empty">🚚<br><br>Sin pedidos de envío</div>'; return
    }
    const pend = envios.filter(p => p.estado !== 'entregado')
    const comp = envios.filter(p => p.estado === 'entregado')
    el.innerHTML =
      (pend.length ? `<p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">Pendientes (${pend.length})</p>` : '') +
      pend.map(p => `
        <div class="card" style="margin-bottom:10px;border-left:3px solid #5A1E99">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:15px;font-weight:500;color:#6B1C1C">#${p.fireId?.slice(-4).toUpperCase()}</span>
            <span class="badge ${BE[p.estado]}">${LE[p.estado]}</span>
          </div>
          <div style="font-size:13px;font-weight:500;margin-bottom:4px">${p.invNombre || ''}</div>
          <div style="font-size:12px;color:#666;margin-bottom:6px">
            ${p.standNombre} · ${(p.items||[]).map(i=>i.desc).join(' · ')}
          </div>
          ${p.envio ? `
            <div style="background:#EDE6FB;border-radius:8px;padding:8px 10px;font-size:12px;color:#5A1E99;margin-bottom:8px">
              <strong>${p.envio.nombre}</strong><br>${p.envio.dir}<br>${p.envio.tel}
            </div>` : ''}
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:15px;font-weight:500">$${fmt(p.total||0)}</span>
            ${SE[p.estado]
              ? `<button class="btn ${BC[p.estado]}" style="font-size:12px"
                  onclick="window._avzLog('${p.fireId}','${p.estado}')">${BT[p.estado]}</button>`
              : ''}
          </div>
        </div>`).join('') +
      (comp.length ? `<div class="sep"></div><p style="font-size:12px;color:#aaa;margin:8px 0">Completados (${comp.length})</p>` : '') +
      comp.map(p => `
        <div style="display:flex;justify-content:space-between;padding:6px 0;
          border-bottom:.5px solid #e0d5c8;font-size:12px">
          <span>#${p.fireId?.slice(-4).toUpperCase()} — ${p.invNombre}</span>
          <span class="badge b-entr">Entregado</span>
        </div>`).join('')
  }
}
