// src/pages/logistica.js
import { buildHeader } from '../header.js'
import { escucharPedidos, retirarDeStand, entregarDomicilio, escucharPedidosEspeciales, marcarEntregado as _marcarEntregado, actualizarPedidoEspecial } from '../firebase.js'
window.marcarEntregado = _marcarEntregado
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

export function renderLogistica(app) {
  injectStyles()
  let pedidos = [], detalle = null

  let pedidosEspeciales = [], vistaLog = 'todos'

  app.innerHTML = buildHeader({
    title: '🚚 Logística',
    sub: 'Envíos y pedidos especiales',
    backHref: '/admin'
  }) + `
    <div class="nav">
      <button class="on" onclick="window._logVista('todos',this)">📋 Pedidos</button>
      <button onclick="window._logVista('pendientes',this)">⏳ Pendientes</button>
      <button onclick="window._logVista('especiales',this)">📦 Pedidos especiales</button>
      <button onclick="window._logVista('envios',this)">🚚 Envíos</button>
    </div>
    <div class="wrap" id="log-body"></div>`

  escucharPedidos(data => { pedidos = data; if (!detalle && vistaLog==='envios') renderLista(); if (!detalle && vistaLog==='pendientes') renderPendientes(); if (!detalle && vistaLog==='todos') renderTodosPedidos(); if (vistaLog==='todos') renderTodosPedidos() })
  escucharPedidosEspeciales(data => { pedidosEspeciales = data; if (!detalle && vistaLog==='especiales') renderEspeciales(); if (!detalle && vistaLog==='envios') renderLista() })

  window._logVista = (v, btn) => {
    vistaLog = v; detalle = null
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('on'))
    btn.classList.add('on')
    if (v === 'envios') renderLista()
    else if (v === 'especiales') renderEspeciales()
    else if (v === 'pendientes') renderPendientes()
    else renderTodosPedidos()
  }

  function renderLista() {
    const el = document.getElementById('log-body'); if (!el) return
    detalle = null
    const envios = pedidos.filter(p => p.retiro === 'envio')
    const peListos = pedidosEspeciales.filter(p => p.estado === 'listo').map(p => ({
      ...p, standNombre: 'Pedido especial · ' + (p.peNum||''), retiro: 'envio',
      invNombre: p.invNombre, invCodigo: p.invCodigo, esPedidoEspecial: true
    }))
    if (!envios.length && !peListos.length) {
      el.innerHTML = '<div class="empty">🚚<br><br>Sin pedidos de envío</div>'; return
    }
    const pendientes  = [...envios.filter(p => p.estado === 'pagado' || p.estado === 'listo'), ...peListos]
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
        PEDIDOS PARA ENVIAR A DOMICILIO (${pendientes.length})</p>`
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
    const p = pedidos.find(x => x.fireId === fireId) || pedidosEspeciales.find(x => x.fireId === fireId)
    if (!p) return
    const peP = pedidosEspeciales.find(x => x.fireId === fireId)
    if (peP) {
      const el2 = document.getElementById('log-body')
      const fmtN = n => Number(n).toLocaleString('es-AR')
      const dir = peP.envio
      el2.innerHTML = '<div class="wrap" style="max-width:500px;margin:0 auto">' +
        '<button class="btn" onclick="window._logVista(&quot;envios&quot;, document.querySelector(&quot;.nav button:nth-child(1)&quot;))" style="margin-bottom:12px">← Volver</button>' +
        '<div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF">' +
          '<div style="font-size:16px;font-weight:700;color:#1A3A5C">' + (peP.peNum||'') + '</div>' +
          '<div style="font-size:14px;font-weight:500;margin-top:2px">' + (peP.invNombre||'') + '</div>' +
          '<div style="font-size:12px;color:#888">' + (peP.invCodigo||'') + (peP.familia ? ' · Familia ' + peP.familia : '') + '</div>' +
          '<div style="margin-top:8px">' + (peP.items||[]).map(i => '<div style="display:flex;justify-content:space-between;font-size:13px;padding:3px 0;border-bottom:.5px solid #eee"><span>' + i.desc + '</span><strong>$' + fmtN(i.sub) + '</strong></div>').join('') + '</div>' +
          '<div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:#1A3A5C;margin-top:8px"><span>Total</span><span>$' + fmtN(peP.total||0) + '</span></div>' +
        '</div>' +
        (dir ? '<div class="card" style="margin-bottom:12px;background:#f0f4f8">' +
          '<p style="font-size:11px;font-weight:500;color:#888;margin-bottom:6px">DATOS DE ENTREGA</p>' +
          '<div style="font-size:13px"><strong>' + dir.nombre + '</strong> · ' + dir.tel + '<br>' + dir.calle + ' ' + dir.numero + (dir.piso?', '+dir.piso:'') + ', ' + dir.localidad + ', ' + dir.provincia + '</div>' +
        '</div>' : '') +
        '<button class="btn btn-b" style="width:100%;padding:10px;margin-bottom:8px" onclick="window._peCargarDireccion(&quot;' + fireId + '&quot;)">✏️ ' + (dir ? 'Editar dirección' : 'Cargar dirección') + '</button>' +
      '</div>'
      return
    }
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

  function renderPendientes() {
    const el = document.getElementById('log-body'); if (!el) return
    detalle = null
    const pendientes = pedidos.filter(p => p.estado === 'pagado' || p.estado === 'listo')
    if (!pendientes.length) {
      el.innerHTML = '<div class="empty">⏳<br><br>Sin pedidos pendientes de entrega</div>'; return
    }
    // Agrupar por familia del invitado
    const byFam = {}
    pendientes.forEach(p => {
      const fam = p.invFamilia || p.familia || ''
      if (!byFam[fam]) byFam[fam] = { pedidos: [], total: 0 }
      byFam[fam].pedidos.push(p)
      byFam[fam].total += p.total || 0
    })
    const sinFam = Object.entries(byFam).filter(([fam]) => fam === '')
    const sorted = [...Object.entries(byFam).filter(([fam]) => fam !== '').sort((a,b) => a[0].localeCompare(b[0])), ...sinFam.map(([,data]) => ['Sin asignar', data])]
    el.innerHTML = '<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:12px;letter-spacing:.05em">PEDIDOS PENDIENTES DE ENTREGA (' + pendientes.length + ')</p>' +
      sorted.map(([fam, data]) =>
        '<div class="card" style="margin-bottom:12px;border-left:4px solid #D97706">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
            '<div style="font-size:14px;font-weight:600;color:#1A3A5C">Familia ' + fam + '</div>' +
            '<div style="font-size:13px;font-weight:500">$' + fmt(data.total) + '</div>' +
          '</div>' +
          data.pedidos.map(p =>
            '<div style="padding:6px 0;border-bottom:.5px solid #E8EFF5">' +
              '<div style="display:flex;justify-content:space-between;font-size:13px">' +
                '<span style="font-weight:500">' + (p.invNombre||'') + '</span>' +
                '<span>$' + fmt(p.total||0) + '</span>' +
              '</div>' +
              '<div style="font-size:11px;color:#888;margin-top:2px">' + (p.standNombre||'') + (p.voucherNum ? ' · VOC-' + String(p.voucherNum).padStart(3,'0') : '') + '</div>' +
              '<div style="font-size:11px;color:#555;margin-top:2px">' + (p.items||[]).map(i => i.desc).join(', ') + '</div>' +
            '</div>'
          ).join('') +
        '</div>'
      ).join('')
  }

  let logFiltro = 'pendientes'
  let logStopScanner = null

  function renderTodosPedidos() {
    const el = document.getElementById('log-body'); if (!el) return
    detalle = null

    // Agregar scanner overlay si no existe
    if (!document.getElementById('log-scan-overlay')) {
      const overlay = document.createElement('div')
      overlay.id = 'log-scan-overlay'
      overlay.style.cssText = 'display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(26,58,92,.92);z-index:300;flex-direction:column;align-items:center;justify-content:center;gap:16px'
      overlay.innerHTML = '<p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p>' +
        '<div style="position:relative"><video id="log-scan-video" autoplay playsinline muted style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video></div>' +
        '<p id="log-scan-status" style="color:#C9A96E;font-size:13px">Iniciando...</p>' +
        '<button onclick="window._logCerrarScanner()" style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);padding:8px 20px;border-radius:8px;cursor:pointer">Cancelar</button>'
      document.body.appendChild(overlay)
    }

    // Agregar modal voucher si no existe
    if (!document.getElementById('log-voucher-modal')) {
      const modal = document.createElement('div')
      modal.id = 'log-voucher-modal'
      modal.style.cssText = 'display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px'
      modal.innerHTML = '<div class="card" style="width:100%;max-width:380px"><div id="log-voucher-content"></div></div>'
      document.body.appendChild(modal)
    }

    const lista = logFiltro === 'pendientes'
      ? pedidos.filter(p => (p.estado==='pagado'||p.estado==='listo') && p.retiro !== 'envio')
      : logFiltro === 'entregados'
      ? pedidos.filter(p => p.estado==='entregado' && p.retiro !== 'envio')
      : pedidos.filter(p => p.retiro !== 'envio')

    el.innerHTML =
      '<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">' +
        '<button class="btn sf-btn ' + (logFiltro==='pendientes'?'active':'') + '" onclick="window._logSetF(&quot;pendientes&quot;,this)">🟢 Listos</button>' +
        '<button class="btn sf-btn ' + (logFiltro==='entregados'?'active':'') + '" onclick="window._logSetF(&quot;entregados&quot;,this)">✅ Entregados</button>' +
        '<button class="btn sf-btn ' + (logFiltro==='todos'?'active':'') + '" onclick="window._logSetF(&quot;todos&quot;,this)">📋 Todos</button>' +
        '<button class="btn btn-b" style="font-size:11px;padding:5px 10px;margin-left:auto" onclick="window._logEscanearVoucher()">📷 Escanear voucher</button>' +
      '</div>' +
      '<div id="log-pedidos-lista">' +
      (lista.length ? lista.map(p => {
        const entregado = p.estado === 'entregado'
        return '<div class="card" style="margin-bottom:10px;border-left:4px solid ' + (entregado?'#3A7D44':'#5BA4CF') + '">' +
          '<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">' +
            '<div>' +
              '<div style="font-size:15px;font-weight:500;color:#1A3A5C">' + (p.invNombre||'Invitado') + '</div>' +
              (p.voucherNum ? '<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(p.voucherNum).padStart(3,'0')+'</div>' : '') +
              '<div style="font-size:11px;color:#888">' + (p.invCodigo||'') + ' · ' + (p.standNombre||'') + '</div>' +
            '</div>' +
            '<span class="badge ' + (entregado?'b-entr':'b-pago') + '">' + (entregado?'✅ Entregado':'💳 Pagado') + '</span>' +
          '</div>' +
          (p.items||[]).map(i => '<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555"><span>' + i.desc + '</span><strong>$' + fmt(i.sub) + '</strong></div>').join('') +
          '<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:500;margin-top:8px;color:#1A3A5C"><span>Total</span><span>$' + fmt(p.total||0) + '</span></div>' +
          '<div style="display:flex;gap:6px;margin-top:10px">' +
            (!entregado ? '<button class="btn btn-g" style="flex:1;padding:9px" onclick="window._logScanearRemito(&quot;' + p.fireId + '&quot;)">📷 Escanear</button>' : '') +
            '<button class="btn" style="flex:1;padding:9px" onclick="window._logImprimirRemito(&quot;' + p.fireId + '&quot;,' + entregado + ')">🖨️ ' + (entregado?'Remito entregado':'Imprimir remito') + '</button>' +
          '</div>' +
        '</div>'
      }).join('') : '<div class="empty">Sin pedidos</div>') +
      '</div>'
  }

  window._logSetF = (f, btn) => {
    logFiltro = f
    renderTodosPedidos()
  }

  window._logScanearRemito = async (targetFireId) => {
    if (!window.jsQR) {
      await new Promise((res,rej) => { const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'; s.onload=res; s.onerror=rej; document.head.appendChild(s) })
    }
    const overlay = document.getElementById('log-scan-overlay')
    overlay.style.display = 'flex'
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('log-scan-video')
      video.srcObject = stream
      logStopScanner = () => { stream.getTracks().forEach(t => t.stop()); overlay.style.display = 'none' }
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const tick = () => {
        if (overlay.style.display === 'none') return
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth; canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0)
          const code = window.jsQR(ctx.getImageData(0,0,canvas.width,canvas.height).data, canvas.width, canvas.height)
          if (code) {
            logStopScanner()
            const modal = document.getElementById('log-voucher-modal')
            const content = document.getElementById('log-voucher-content')
            if (code.data.includes(targetFireId)) {
              window._logMostrarModalValido(targetFireId)
            } else {
              window._logMostrarModalInvalido()
            }
            modal.style.display = 'flex'
            return
          }
        }
        requestAnimationFrame(tick)
      }
      video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
    } catch(e) { document.getElementById('log-scan-status').textContent = 'No se pudo acceder a la cámara.' }
  }

  window._logCerrarScanner = () => { if (logStopScanner) logStopScanner(); logStopScanner = null }

  window._logEscanearVoucher = async () => {
    if (!window.jsQR) {
      await new Promise((res,rej) => { const s=document.createElement('script'); s.src='https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'; s.onload=res; s.onerror=rej; document.head.appendChild(s) })
    }
    const overlay = document.getElementById('log-scan-overlay')
    overlay.style.display = 'flex'
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      const video = document.getElementById('log-scan-video')
      video.srcObject = stream
      logStopScanner = () => { stream.getTracks().forEach(t => t.stop()); overlay.style.display = 'none' }
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const tick = () => {
        if (overlay.style.display === 'none') return
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth; canvas.height = video.videoHeight
          ctx.drawImage(video, 0, 0)
          const code = window.jsQR(ctx.getImageData(0,0,canvas.width,canvas.height).data, canvas.width, canvas.height)
          if (code) {
            logStopScanner()
            const p = pedidos.find(x => x.fireId === code.data)
            const modal = document.getElementById('log-voucher-modal')
            const content = document.getElementById('log-voucher-content')
            if (p) {
              const entregado = p.estado === 'entregado'
              window._logMostrarPedido(p)
            } else {
              window._logMostrarNoEncontrado()
            }
            modal.style.display = 'flex'
            return
          }
        }
        requestAnimationFrame(tick)
      }
      video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
    } catch(e) { document.getElementById('log-scan-status').textContent = 'No se pudo acceder a la cámara.' }
  }

  window._logImprimirRemito = (fireId, entregado) => {
    const p = pedidos.find(x => x.fireId === fireId); if (!p) return
    const fmtN = n => Number(n).toLocaleString('es-AR')
    const voc = p.voucherNum ? 'VOC-' + String(p.voucherNum).padStart(3,'0') : 'VOC-000'
    const win = window.open('', '_blank')
    win.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + voc + '</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;padding:16px}.voucher{border:2px solid #1A3A5C;border-radius:10px;padding:16px}.header{display:flex;justify-content:space-between;margin-bottom:10px;border-bottom:1px solid #D6E4F0;padding-bottom:8px}.evento{font-size:10px;color:#888;letter-spacing:.08em}.voc-num{font-size:22px;font-weight:700;color:#1A3A5C;margin-top:2px}.stand{font-size:18px;font-weight:600;color:#1A3A5C}.item{display:flex;justify-content:space-between;font-size:15px;padding:4px 0;border-bottom:.5px solid #eee}.total{display:flex;justify-content:space-between;font-size:20px;font-weight:600;margin-top:8px;color:#1A3A5C}.badge{color:#fff;padding:3px 12px;border-radius:20px;font-size:11px;display:inline-block}.sello{text-align:center;margin-top:16px;padding:10px;border:3px solid #3A7D44;border-radius:8px;color:#3A7D44;font-size:22px;font-weight:700;letter-spacing:.1em}@media print{body{padding:0}}</style></head><body><div class="voucher"><div class="header"><div><div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #' + (p.standId||'') + '</div><div class="voc-num">' + voc + '</div><div class="stand">' + (p.standNombre||'') + '</div><div style="font-size:13px;color:#555">' + (p.invNombre||'') + ' · ' + (p.invCodigo||'') + '</div></div><div style="text-align:right"><div class="badge" style="background:' + (entregado?'#1A3A5C':'#3A7D44') + '">' + (entregado?'✅ ENTREGADO':'✅ PAGADO') + '</div></div></div>' + (p.items||[]).map(i => '<div class="item"><span>' + i.desc + '</span><strong>$' + fmtN(i.sub) + '</strong></div>').join('') + '<div class="total"><span>Total</span><span>$' + fmtN(p.total||0) + '</span></div>' + (entregado ? '<div class="sello">✅ ENTREGADO</div>' : '') + '</div><script>setTimeout(()=>window.print(),500)<\/script></body></html>')
    win.document.close()
  }

  window._logMostrarPedido = (p) => {
    const content = document.getElementById('log-voucher-content')
    const modal = document.getElementById('log-voucher-modal')
    const entregado = p.estado === 'entregado'
    const fmtN = n => Number(n).toLocaleString('es-AR')
    let html = '<div style="padding:8px 0 16px">' +
      '<div style="font-size:16px;font-weight:700;color:#1A3A5C;margin-bottom:4px">' + (p.invNombre||'') + '</div>' +
      '<div style="font-size:12px;color:#888;margin-bottom:12px">VOC-' + String(p.voucherNum||0).padStart(3,'0') + ' · ' + (p.standNombre||'') + '</div>' +
      (p.items||[]).map(i => '<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:.5px solid #eee"><span>' + i.desc + '</span><strong>$' + fmtN(i.sub) + '</strong></div>').join('') +
      '<div style="display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:#1A3A5C;margin-top:8px;margin-bottom:16px"><span>Total</span><span>$' + fmtN(p.total||0) + '</span></div>'
    if (!entregado) {
      html += '<button onclick="marcarEntregado(&quot;' + p.fireId + '&quot;);document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="width:100%;padding:10px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer;margin-bottom:8px">✅ Confirmar entrega</button>'
    } else {
      html += '<div style="text-align:center;color:#3A7D44;font-weight:600;margin-bottom:12px">✅ Ya entregado</div>'
    }
    html += '<button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">Cerrar</button></div>'
    content.innerHTML = html
    modal.style.display = 'flex'
  }

  window._logMostrarNoEncontrado = () => {
    const content = document.getElementById('log-voucher-content')
    const modal = document.getElementById('log-voucher-modal')
    content.innerHTML = '<div style="text-align:center;padding:16px">' +
      '<div style="font-size:40px;margin-bottom:8px">❌</div>' +
      '<div style="font-size:16px;color:#C0392B;margin-bottom:12px">Voucher no encontrado</div>' +
      '<button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;cursor:pointer">Cerrar</button>' +
    '</div>'
    modal.style.display = 'flex'
  }

  window._logMostrarModalValido = (fireId) => {
    const content = document.getElementById('log-voucher-content')
    const modal = document.getElementById('log-voucher-modal')
    content.innerHTML = '<div style="text-align:center;padding:8px 0 16px">' +
      '<div style="font-size:48px;margin-bottom:8px">✅</div>' +
      '<div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div>' +
      '<div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega?</div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">Cancelar</button>' +
        '<button onclick="marcarEntregado(&quot;' + fireId + '&quot;);document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Confirmar entrega</button>' +
      '</div></div>'
    modal.style.display = 'flex'
  }

  window._logMostrarModalInvalido = () => {
    const content = document.getElementById('log-voucher-content')
    const modal = document.getElementById('log-voucher-modal')
    content.innerHTML = '<div style="text-align:center;padding:8px 0 16px">' +
      '<div style="font-size:48px;margin-bottom:8px">❌</div>' +
      '<div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div>' +
      '<div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div>' +
      '<button onclick="document.getElementById(&quot;log-voucher-modal&quot;).style.display=&quot;none&quot;" style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Cerrar</button>' +
    '</div>'
    modal.style.display = 'flex'
  }

  window._volverLog = () => { detalle = null; if (vistaLog==='envios') renderLista(); else renderEspeciales() }

  function renderEspeciales() {
    const el = document.getElementById('log-body'); if (!el) return
    detalle = null
    if (!pedidosEspeciales.length) {
      el.innerHTML = '<div class="empty">📦<br><br>Sin pedidos especiales todavía</div>'; return
    }
    const pendientes  = pedidosEspeciales.filter(p => p.estado === 'pagado')
    const entregados  = pedidosEspeciales.filter(p => p.estado === 'entregado')

    const cardPE = (p) =>
      '<div class="card" style="margin-bottom:10px;border-left:4px solid #5BA4CF">' +
        '<div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:6px">' +
          '<div>' +
            '<div style="font-size:14px;font-weight:500;color:#1A3A5C">' + (p.invNombre||'') + '</div>' +
            '<div style="font-size:11px;color:#888">' + (p.invCodigo||'') + ' · ' + (p.peNum||'') + '</div>' +
            (p.familia ? '<div style="font-size:11px;color:#5BA4CF;margin-top:2px">Familia ' + p.familia + '</div>' : '') +
          '</div>' +
          '<div style="text-align:right">' +
            '<div style="font-size:14px;font-weight:500">$' + fmt(p.total||0) + '</div>' +
            '<span class="badge ' + (p.estado==='entregado'?'b-entr':'b-pago') + '" style="font-size:10px">' + (p.estado==='entregado'?'Entregado':'Pendiente') + '</span>' +
          '</div>' +
        '</div>' +
        '<div style="font-size:12px;color:#555;margin-bottom:8px">' +
          (p.items||[]).map(i => i.desc + ' — $' + fmt(i.sub)).join('<br>') +
        '</div>' +
        (p.estado !== 'listo' && p.estado !== 'entregado' ? '<button class="btn btn-b" style="width:100%;padding:8px" onclick="window._peCargarDireccion(&quot;' + p.fireId + '&quot;)">📍 Cargar dirección de entrega</button>' : '<div style="font-size:12px;color:#3A7D44;text-align:center;padding:6px">✅ Dirección cargada — en Envíos</div>') +
      '</div>'

    el.innerHTML = ''
    if (pendientes.length) {
      el.innerHTML += '<p style="font-size:11px;font-weight:500;color:#D97706;margin-bottom:8px;letter-spacing:.05em">PENDIENTES DE DATOS DE ENVÍO (' + pendientes.length + ')</p>'
      el.innerHTML += pendientes.map(cardPE).join('')
    }
    if (entregados.length) {
      el.innerHTML += '<p style="font-size:11px;font-weight:500;color:#3A7D44;margin:14px 0 8px;letter-spacing:.05em">ENTREGADOS (' + entregados.length + ')</p>'
      el.innerHTML += entregados.map(cardPE).join('')
    }
  }

  window._peCargarDireccion = (fireId) => {
    const p = pedidosEspeciales.find(x => x.fireId === fireId); if (!p) return
    const el = document.getElementById('log-body')
    el.innerHTML = `
      <div class="wrap" style="max-width:500px;margin:0 auto">
        <button class="btn" onclick="window._logVista('especiales', document.querySelector('.nav button:nth-child(2)'))" style="margin-bottom:12px">← Volver</button>
        <div class="card" style="margin-bottom:12px;border-left:4px solid #5BA4CF">
          <div style="font-size:14px;font-weight:600;color:#1A3A5C">${p.peNum} · ${p.invNombre}</div>
          <div style="font-size:12px;color:#888">${p.familia ? 'Familia ' + p.familia : ''} · $${fmt(p.total||0)}</div>
        </div>
        <div class="card" style="margin-bottom:12px">
          <p style="font-size:13px;font-weight:500;color:#1A3A5C;margin-bottom:10px">📍 Dirección de entrega</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Nombre destinatario</label><input id="pe-log-nombre" style="margin-top:3px" placeholder="Nombre completo" value="${p.envio?.nombre||p.invNombre||''}"></div>
            <div><label style="font-size:11px;color:#666">Teléfono</label><input id="pe-log-tel" style="margin-top:3px" placeholder="+54 9 11..." value="${p.envio?.tel||''}"></div>
          </div>
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Calle</label><input id="pe-log-calle" style="margin-top:3px" value="${p.envio?.calle||''}"></div>
            <div><label style="font-size:11px;color:#666">Número</label><input id="pe-log-num" style="margin-top:3px" value="${p.envio?.numero||''}"></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
            <div><label style="font-size:11px;color:#666">Piso / Dpto</label><input id="pe-log-piso" style="margin-top:3px" value="${p.envio?.piso||''}"></div>
            <div><label style="font-size:11px;color:#666">Localidad</label><input id="pe-log-loc" style="margin-top:3px" value="${p.envio?.localidad||''}"></div>
          </div>
          <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Provincia</label><input id="pe-log-prov" style="margin-top:3px" value="${p.envio?.provincia||'Buenos Aires'}"></div>
          <div style="margin-bottom:12px"><label style="font-size:11px;color:#666">Observaciones</label><input id="pe-log-obs" style="margin-top:3px" placeholder="Ej: dejar en portería" value="${p.envio?.observaciones||''}"></div>
          <button class="btn btn-v" style="width:100%;padding:10px" onclick="window._peGuardarDirLog('${fireId}')">Guardar y pasar a Envíos</button>
          <div id="pe-log-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
        </div>
      </div>`
  }

  window._peGuardarDirLog = async (fireId) => {
    const dir = {
      nombre: document.getElementById('pe-log-nombre').value.trim(),
      tel: document.getElementById('pe-log-tel').value.trim(),
      calle: document.getElementById('pe-log-calle').value.trim(),
      numero: document.getElementById('pe-log-num').value.trim(),
      piso: document.getElementById('pe-log-piso').value.trim(),
      localidad: document.getElementById('pe-log-loc').value.trim(),
      provincia: document.getElementById('pe-log-prov').value.trim(),
      observaciones: document.getElementById('pe-log-obs')?.value.trim() || ''
    }
    const msg = document.getElementById('pe-log-msg')
    if (!dir.nombre || !dir.calle || !dir.localidad) {
      msg.innerHTML = '<span style="color:#C0392B">Completá nombre, calle y localidad.</span>'; return
    }
    msg.innerHTML = '<span style="color:#888">Guardando...</span>'
    try {
      await actualizarPedidoEspecial(fireId, { envio: dir, estado: 'listo' })
      msg.innerHTML = '<span style="color:#3A7D44">✓ Guardado — aparece en Envíos</span>'
      setTimeout(() => window._logVista('especiales', document.querySelector('.nav button:nth-child(2)')), 1500)
    } catch(e) {
      msg.innerHTML = '<span style="color:#C0392B">Error: ' + e.message + '</span>'
    }
  }
}
