// src/pages/logistica.js
import { buildHeader } from '../header.js'
import { escucharPedidos, retirarDeStand, entregarDomicilio } from '../firebase.js'
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

export function renderLogistica(app) {
  injectStyles()
  let pedidos = [], detalle = null

  app.innerHTML = buildHeader({
    title: '🚚 Logística — Envíos',
    sub: 'Pedidos para enviar a domicilio',
    backHref: '/admin'
  }) + `<div class="wrap" id="log-body"></div>`

  escucharPedidos(data => { pedidos = data; if (!detalle) renderLista() })

  function renderLista() {
    const el = document.getElementById('log-body'); if (!el) return
    detalle = null
    const envios = pedidos.filter(p => p.retiro === 'envio')
    if (!envios.length) {
      el.innerHTML = '<div class="empty">🚚<br><br>Sin pedidos de envío</div>'; return
    }
    const pendientes  = envios.filter(p => p.estado === 'pagado' || p.estado === 'listo')
    const retirados   = envios.filter(p => p.estado === 'retirado')
    const entregados  = envios.filter(p => p.estado === 'entregado')
    const reembolsados = envios.filter(p => p.estado === 'reembolsado' || p.estado === 'cancelado')

    const cardEnvio = (p, color, showBtns) => `
      <div class="card" style="margin-bottom:10px;border-left:4px solid ${color};cursor:pointer"
        onclick="window._verDetalleLog('${p.fireId}')">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">
          <div>
            <div style="font-size:14px;font-weight:500;color:#1A3A5C">${p.invNombre||''}</div>
            <div style="font-size:11px;color:#888">${p.standNombre} · #${p.fireId?.slice(-4).toUpperCase()}</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:14px;font-weight:500">$${fmt(p.total||0)}</div>
            <div style="font-size:10px;color:#888">Ver detalle ›</div>
          </div>
        </div>
        ${p.envio ? `<div style="font-size:12px;color:#5A1E99;background:#EDE6FB;
          border-radius:6px;padding:6px 8px">
          📍 ${p.envio.calle||''} ${p.envio.numero||''}, ${p.envio.localidad||p.envio.dir||''}, ${p.envio.provincia||''}
        </div>` : ''}
      </div>`

    el.innerHTML = ''
    if (pendientes.length) {
      el.innerHTML += `<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">
        POR RETIRAR DEL STAND (${pendientes.length})</p>`
      el.innerHTML += pendientes.map(p => cardEnvio(p, '#D97706', true)).join('')
    }
    if (retirados.length) {
      el.innerHTML += `<p style="font-size:11px;font-weight:500;color:#5BA4CF;margin:14px 0 8px;letter-spacing:.05em">
        RETIRADOS — EN CAMINO (${retirados.length})</p>`
      el.innerHTML += retirados.map(p => cardEnvio(p, '#5BA4CF', true)).join('')
    }
    if (entregados.length) {
      el.innerHTML += `<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">
        ENTREGADOS (${entregados.length})</p>`
      el.innerHTML += entregados.map(p => cardEnvio(p, '#3A7D44', false)).join('')
    }
    if (reembolsados.length) {
      el.innerHTML += `<p style="font-size:11px;font-weight:500;color:#C0392B;margin:14px 0 8px;letter-spacing:.05em">
        REEMBOLSADOS (${reembolsados.length})</p>`
      el.innerHTML += reembolsados.map(p => cardEnvio(p, '#C0392B', false)).join('')
    }
  }

  window._verDetalleLog = (fireId) => {
    detalle = fireId
    const p = pedidos.find(x => x.fireId === fireId); if (!p) return
    const el = document.getElementById('log-body'); if (!el) return
    const e = p.envio || {}
    const estados = {
      pagado:     { label: '💳 Pagado — Pendiente de retiro', color: '#D97706', badge: 'b-pend' },
      listo:      { label: '✅ Listo para retirar',          color: '#D97706', badge: 'b-list' },
      retirado:   { label: '📦 Retirado del stand',           color: '#5BA4CF', badge: 'b-pago' },
      entregado:  { label: '🏠 Entregado a domicilio',        color: '#3A7D44', badge: 'b-entr' },
      reembolsado:{ label: '↩️ Reembolsado',                  color: '#C0392B', badge: 'b-canc' },
      cancelado:  { label: '❌ Cancelado',                    color: '#C0392B', badge: 'b-canc' },
    }
    const est = estados[p.estado] || estados.pagado

    el.innerHTML = `
      <button class="btn" onclick="window._volverLog()"
        style="margin-bottom:14px;color:#1A3A5C;border-color:#1A3A5C">← Volver</button>

      <div class="card" style="margin-bottom:12px;border-left:4px solid ${est.color}">
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:10px">
          <div>
            <div style="font-size:16px;font-weight:500;color:#1A3A5C">${p.invNombre||''}</div>
            <div style="font-size:12px;color:#888">${p.invCodigo||''} · Stand: ${p.standNombre}</div>
          </div>
          <span class="badge ${est.badge}" style="font-size:11px">${est.label}</span>
        </div>

        ${(p.items||[]).map(i => `
          <div style="display:flex;justify-content:space-between;font-size:13px;
            padding:5px 0;border-bottom:.5px solid #E8EFF5;color:#555">
            <span>${i.desc}</span><strong>$${fmt(i.sub)}</strong>
          </div>`).join('')}

        <div style="display:flex;justify-content:space-between;font-size:15px;
          font-weight:500;margin-top:10px;color:#1A3A5C">
          <span>Total</span><span>$${fmt(p.total||0)}</span>
        </div>
      </div>

      <!-- Datos de envío -->
      <div class="card" style="margin-bottom:12px;background:#F5F0FB;border:1px solid #D4BEFC">
        <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">🚚 Datos de envío</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px">
          <div><span style="color:#888;font-size:11px">Destinatario</span><br><strong>${e.nombre||'—'}</strong></div>
          <div><span style="color:#888;font-size:11px">Teléfono</span><br><strong>${e.tel||'—'}</strong></div>
          <div><span style="color:#888;font-size:11px">Calle y número</span><br><strong>${e.calle||''} ${e.numero||''}</strong></div>
          <div><span style="color:#888;font-size:11px">Piso / Dpto</span><br><strong>${e.piso||'—'}</strong></div>
          <div><span style="color:#888;font-size:11px">Localidad</span><br><strong>${e.localidad||e.dir||'—'}</strong></div>
          <div><span style="color:#888;font-size:11px">Provincia</span><br><strong>${e.provincia||'—'}</strong></div>
        </div>
      </div>

      <!-- Botones de acción según estado -->
      ${p.estado === 'pagado' || p.estado === 'listo' ? `
        <button class="btn btn-b" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._retirarStand('${p.fireId}')">
          📦 Confirmar retiro del stand
        </button>` : ''}
      ${p.estado === 'retirado' ? `
        <button class="btn btn-g" style="width:100%;padding:12px;font-size:14px;margin-bottom:8px"
          onclick="window._entregarDom('${p.fireId}')">
          🏠 Confirmar entrega a domicilio
        </button>` : ''}
      <button class="btn" style="width:100%;padding:10px;font-size:13px"
        onclick="window._volverLog()">Volver a la lista</button>`
  }

  window._retirarStand = async (fireId) => {
    await retirarDeStand(fireId)
    window._verDetalleLog(fireId)
  }

  window._entregarDom = async (fireId) => {
    await entregarDomicilio(fireId)
    window._verDetalleLog(fireId)
  }

  window._volverLog = () => { detalle = null; renderLista() }
}
