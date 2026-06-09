// src/pages/standPanel.js
import { buildHeader } from '../header.js'
import { escucharPedidosPorStand, marcarEntregado, escucharVinos, marcarListoLogistica } from '../firebase.js'
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

// ── jsQR loader ───────────────────────────────────────────────────────────────
async function loadJsQR() {
  if (window.jsQR) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

async function iniciarScanner(videoId, onResult, statusId) {
  const statusEl = document.getElementById(statusId)
  if (statusEl) statusEl.textContent = 'Iniciando cámara...'
  await loadJsQR()
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
  const video = document.getElementById(videoId)
  if (!video) { stream.getTracks().forEach(t => t.stop()); return null }
  video.srcObject = stream
  let active = true
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const stop = () => { active = false; stream.getTracks().forEach(t => t.stop()) }
  const tick = () => {
    if (!active) return
    if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
      canvas.width = video.videoWidth; canvas.height = video.videoHeight
      ctx.drawImage(video, 0, 0)
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const code = window.jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' })
      if (code && code.data) { stop(); onResult(code.data); return }
    }
    if (active) requestAnimationFrame(tick)
  }
  if (statusEl) statusEl.textContent = 'Buscando QR...'
  video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
  return stop
}

export function renderStandPanel(app, bodega) {
  injectStyles()

  // ── CSS extra ────────────────────────────────────────────────────────────
  if (!document.getElementById('sp-css')) {
    const st = document.createElement('style')
    st.id = 'sp-css'
    st.textContent = `
      .tab-btn { border:none;border-radius:0;border-bottom:2px solid transparent;
        color:#888;padding:8px 14px;margin-bottom:-2px;background:none;
        font-size:12px;cursor:pointer;font-weight:400 }
      .tab-btn.active { border-bottom-color:#5BA4CF;color:#5BA4CF;font-weight:600 }
      .b-canc { background:#FEE2E2;color:#C0392B;border:1px solid #FCA5A5 }
      .sf-btn { font-size:11px }
      .sf-btn.active { background:#EAF3DE;color:#3B6D11;border-color:#3B6D11 }
    `
    document.head.appendChild(st)
  }

  // ── Estado ────────────────────────────────────────────────────────────────
  let pedidos = [], filtro = 'pendientes', tabActiva = 'pedidos'
  let stopInvScanner = null, stopVoucherScanner = null

  // ── Render inicial ────────────────────────────────────────────────────────
  // Override header color for stand panel
  if (!document.getElementById('stand-header-style')) {
    const st = document.createElement('style')
    st.id = 'stand-header-style'
    st.textContent = '.hdr { background: linear-gradient(135deg, #2D6A4F, #3A7D44) !important; } .gold { background: linear-gradient(90deg, #C9A96E, #A8865A, #C9A96E) !important; }'
    document.head.appendChild(st)
  }
  app.innerHTML = buildHeader({
    title: `🍷 ${bodega.nombre}`,
    sub: `Stand #${bodega.id} · Sucovi 2027`,
    actions: [
      `<button class="btn" onclick="sessionStorage.removeItem('stand-auth-${bodega.id}');location.reload()"
        style="font-size:11px;padding:5px 9px">Salir</button>`
    ]
  }) + `
    <!-- Tabs -->
    <div style="display:flex;border-bottom:2px solid #E8EFF5;overflow-x:auto;background:#fff">
      <button class="tab-btn active" id="tab-pedidos" onclick="window._setTab('pedidos')">📋 Pedidos</button>
      <button class="tab-btn" id="tab-carta" onclick="window._setTab('carta')">🍷 Mi carta</button>
      <button class="tab-btn" id="tab-resumen" onclick="window._setTab('resumen')">📊 Resumen</button>
    </div>

    <!-- Tab Pedidos -->
    <div id="tab-content-pedidos" class="wrap">
      <div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;align-items:center">
        <button class="btn sf-btn active" id="sf-listos" onclick="window._setSF('pendientes',this)">🟢 Listos</button>
        <button class="btn sf-btn" id="sf-entr" onclick="window._setSF('entregados',this)">✅ Entregados</button>
        <button class="btn sf-btn" id="sf-all" onclick="window._setSF('todos',this)">📋 Todos</button>

        <div style="margin-left:auto;display:flex;gap:6px">
          <button class="btn btn-b" style="padding:10px 16px;font-size:13px;font-weight:500;margin-left:auto" onclick="window._abrirScannerVoucher()">📷 Escanear voucher</button>
        </div>
      </div>
      <div id="sp-pedidos"></div>
    </div>

    <!-- Tab Carta -->
    <div id="tab-content-carta" class="wrap" style="display:none">
      <div id="sp-carta"><div class="empty">Cargando carta...</div></div>
    </div>

    <!-- Tab Resumen -->
    <div id="tab-content-resumen" class="wrap" style="display:none">
      <div id="sp-resumen"></div>
    </div>

    <!-- Scanner Invitado -->
    <div id="scan-overlay-inv" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el QR del invitado</p>
      <div class="scan-frame">
        <video id="scan-video-inv" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-inv" style="color:#C9A96E;font-size:13px">Iniciando...</p>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerInv()">Cancelar</button>
    </div>

    <!-- Scanner Voucher -->
    <div id="scan-overlay-voucher" class="scan-overlay" style="display:none">
      <p style="color:#fff;font-size:14px;font-weight:500">Escaneá el voucher del cliente</p>
      <div class="scan-frame">
        <video id="scan-video-voucher" autoplay playsinline muted
          style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
        <div class="scan-corner tl"></div><div class="scan-corner tr"></div>
        <div class="scan-corner bl"></div><div class="scan-corner br"></div>
      </div>
      <p id="scan-status-voucher" style="color:#C9A96E;font-size:13px">Iniciando...</p>
      <button class="btn" style="background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)"
        onclick="window._cerrarScannerVoucher()">Cancelar</button>
    </div>

    <!-- Modal voucher -->
    <div id="voucher-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.5);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:380px">
        <div id="voucher-modal-content"></div>
      </div>
    </div>`

  // ── Tabs ──────────────────────────────────────────────────────────────────
  window._setTab = (tab) => {
    tabActiva = tab
    ;['pedidos','carta','resumen'].forEach(t => {
      document.getElementById('tab-'+t)?.classList.toggle('active', t===tab)
      const el = document.getElementById('tab-content-'+t)
      if (el) el.style.display = t===tab ? 'block' : 'none'
    })
    if (tab==='carta') renderCarta()
    if (tab==='resumen') renderResumen()
  }

  // ── Filtros ───────────────────────────────────────────────────────────────
  window._setSF = (f, btn) => {
    filtro = f
    ;['sf-listos','sf-entr','sf-all','sf-log'].forEach(id => {
      document.getElementById(id)?.classList.remove('active')
    })
    btn.classList.add('active')
    renderPedidos()
  }

  // ── Pedidos ───────────────────────────────────────────────────────────────
  escucharPedidosPorStand(bodega.id, data => { pedidos = data; renderPedidos() })

  function renderPedidos() {
    const el = document.getElementById('sp-pedidos'); if (!el) return
    let lista = pedidos
    if (filtro==='pendientes') {
      lista = pedidos.filter(p => (p.estado==='pagado' || p.estado==='listo') && p.retiro !== 'envio')
    } else if (filtro==='entregados') {
      lista = pedidos.filter(p => p.estado==='entregado' && p.retiro !== 'envio')
    } else {
      lista = pedidos.filter(p => p.retiro !== 'envio')
    }
    if (!lista.length) {
      const msgs = { pendientes:'Sin pedidos listos 🎉', entregados:'Sin entregas todavía', todos:'Sin pedidos' }
      el.innerHTML = `<div class="empty">${msgs[filtro]||'Sin pedidos'}</div>`; return
    }
    el.innerHTML = lista.map(p => {
      const entregado = p.estado === 'entregado'
      return `
        <div class="card" style="margin-bottom:10px;border-left:4px solid ${entregado?'#3A7D44':'#5BA4CF'}">
          <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px">
            <div>
              <div style="font-size:15px;font-weight:500;color:#1A3A5C">${p.invNombre||'Invitado'}</div>
              ${p.voucherNum ? '<div style="font-size:10px;color:#5BA4CF;font-weight:500">VOC-'+String(p.voucherNum).padStart(3,'0')+'</div>' : ''}
              <div style="font-size:11px;color:#888">${p.invCodigo||''}</div>
            </div>
            <span class="badge ${entregado?'b-entr':'b-pago'}">${entregado?'✅ Entregado':'💳 Pagado'}</span>
          </div>
          ${(p.items||[]).map(i => `
            <div style="display:flex;justify-content:space-between;font-size:13px;
              padding:4px 0;border-bottom:.5px solid #E8EFF5;color:#555">
              <span>${i.desc}</span><strong>$${fmt(i.sub)}</strong>
            </div>`).join('')}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${fmt(p.total||0)}</span>
          </div>
          ${!entregado ? `
            <button class="btn btn-g" style="width:100%;margin-top:10px;padding:9px"
              onclick="window._scanearEsteRemito('${p.fireId}')">
              📷 Este remito
            </button>` : ''}
        </div>`
    }).join('')
  }

  window._entregarPedido = async (fireId) => { await marcarEntregado(fireId) }

  window._scanearEsteRemito = async (targetFireId) => {
    document.getElementById('scan-overlay-voucher').style.display = 'flex'
    const statusEl = document.getElementById('scan-status-voucher')
    if (statusEl) statusEl.textContent = 'Escaneá el QR de este remito...'
    try {
      stopVoucherScanner = await iniciarScanner('scan-video-voucher', (raw) => {
        window._cerrarScannerVoucher()
        if (raw.includes(targetFireId)) {
          marcarEntregado(targetFireId)
        } else {
          if (statusEl) statusEl.textContent = 'QR no corresponde a este remito'
        }
      }, 'scan-status-voucher')
    } catch(e) {
      if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara.'
    }
  }
  window._listoParaLogistica = async (fireId) => { await marcarListoLogistica(fireId) }

  // ── Carta ─────────────────────────────────────────────────────────────────
  function renderCarta() {
    const el = document.getElementById('sp-carta'); if (!el) return
    el.innerHTML = '<div class="empty">Cargando...</div>'
    escucharVinos(bodega.id, vinos => {
      if (!vinos.length) { el.innerHTML = '<div class="empty">Sin vinos cargados todavía</div>'; return }
      el.innerHTML = vinos.map(v => `
        <div class="card" style="margin-bottom:10px">
          <div style="font-size:17px;font-weight:600;color:#1A3A5C">${v.nombre}</div>
          <div style="font-size:14px;color:#666;margin-top:2px">
            ${v.varietal||''}${v.cosecha?' · '+v.cosecha:''}
          </div>
          ${v.descripcion?`<div style="font-size:13px;color:#888;margin-top:3px">${v.descripcion}</div>`:''}
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
            ${(v.unidades||[]).map(u=>`
              <span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;
                border-radius:20px;font-size:13px;font-weight:500">
                ${u.u}: $${fmt(u.p)}
              </span>`).join('')}
          </div>
        </div>`).join('')
    })
  }

  // ── Resumen ───────────────────────────────────────────────────────────────
  function renderResumen() {
    const el = document.getElementById('sp-resumen'); if (!el) return
    const validos    = pedidos.filter(p => p.estado !== 'reembolsado' && p.estado !== 'cancelado')
    const entregados = validos.filter(p => p.estado==='entregado' && p.retiro !== 'envio')
    const pendientes = validos.filter(p => (p.estado==='pagado'||p.estado==='listo') && p.retiro !== 'envio')
    const logistica  = validos.filter(p => p.retiro === 'envio')
    const totalEnt  = entregados.reduce((s,p) => s+(p.total||0), 0)
    const totalPend = pendientes.reduce((s,p) => s+(p.total||0), 0)
    const totalAll  = validos.reduce((s,p) => s+(p.total||0), 0)
    const byProd = {}
    entregados.forEach(p => (p.items||[]).forEach(i => {
      const k = i.vinoNombre + ' — ' + i.unidad
      if (!byProd[k]) byProd[k] = { cant:0, total:0 }
      byProd[k].cant += i.qty||1; byProd[k].total += i.sub||0
    }))
    const sorted = Object.entries(byProd).sort((a,b) => b[1].total-a[1].total)
    el.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:14px">
        <div class="stat"><div class="v" style="color:#3A7D44">$${fmt(totalEnt)}</div><div class="l">Entregado</div></div>
        <div class="stat"><div class="v" style="color:#D97706">$${fmt(totalPend)}</div><div class="l">Por entregar</div></div>
        <div class="stat"><div class="v">$${fmt(totalAll)}</div><div class="l">Total vendido</div></div>
        ${logistica.length ? `<div class="stat" style="grid-column:1/-1"><div class="v" style="color:#5BA4CF;font-size:14px">${logistica.length} pedido${logistica.length>1?'s':''} de envío a domicilio</div><div class="l">Manejados por logística</div></div>` : ''}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#1A3A5C;margin-bottom:8px">Detalle por vino (entregados)</p>
        ${sorted.length ? sorted.map(([prod,data]) => `
          <div style="display:flex;justify-content:space-between;padding:6px 0;
            border-bottom:.5px solid #E8EFF5;font-size:12px">
            <span style="flex:1">${prod}</span>
            <span style="color:#888;margin:0 8px">${data.cant} u.</span>
            <span style="font-weight:500">$${fmt(data.total)}</span>
          </div>`).join('') : '<div style="color:#aaa;font-size:12px;padding:8px 0">Sin entregas todavía</div>'}
      </div>`
  }

  // ── Scanner Invitado ──────────────────────────────────────────────────────
  window._abrirScannerInv = async () => {
    document.getElementById('scan-overlay-inv').style.display = 'flex'
    try {
      stopInvScanner = await iniciarScanner('scan-video-inv', (raw) => {
        window._cerrarScannerInv()
        const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
        if (matchToken) {
          window.location.href = '/stand/' + bodega.id + '?inv=' + matchToken[1]
        } else {
          document.getElementById('scan-status-inv').textContent = 'QR no reconocido — usá el QR personal del invitado'
        }
      }, 'scan-status-inv')
    } catch(e) {
      document.getElementById('scan-status-inv').textContent = 'No se pudo acceder a la cámara.'
    }
  }

  window._cerrarScannerInv = () => {
    if (stopInvScanner) { stopInvScanner(); stopInvScanner = null }
    document.getElementById('scan-overlay-inv').style.display = 'none'
  }

  // ── Scanner Voucher ───────────────────────────────────────────────────────
  window._abrirScannerVoucher = async () => {
    document.getElementById('scan-overlay-voucher').style.display = 'flex'
    try {
      stopVoucherScanner = await iniciarScanner('scan-video-voucher', (raw) => {
        window._cerrarScannerVoucher()
        const pedido = pedidos.find(p => raw.includes(p.fireId))
        if (pedido) mostrarVoucherModal(pedido)
        else document.getElementById('scan-status-voucher').textContent = 'Voucher no reconocido'
      }, 'scan-status-voucher')
    } catch(e) {
      document.getElementById('scan-status-voucher').textContent = 'No se pudo acceder a la cámara.'
    }
  }

  window._cerrarScannerVoucher = () => {
    if (stopVoucherScanner) { stopVoucherScanner(); stopVoucherScanner = null }
    document.getElementById('scan-overlay-voucher').style.display = 'none'
  }

  // ── Modal Voucher ─────────────────────────────────────────────────────────
  function mostrarVoucherModal(p) {
    const entregado = p.estado === 'entregado'
    document.getElementById('voucher-modal-content').innerHTML = `
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:36px">${entregado?'✅':'⏳'}</div>
        <h3 style="font-size:16px;font-weight:500;color:${entregado?'#3B6D11':'#854F0B'};margin-top:6px">
          ${entregado?'PAGADO — Entregar':'PENDIENTE — No entregar'}
        </h3>
      </div>
      <div style="font-size:14px;font-weight:500;margin-bottom:4px">${p.invNombre||''}</div>
      <div style="font-size:12px;color:#888;margin-bottom:10px">${p.invCodigo||''}</div>
      ${(p.items||[]).map(i => `
        <div style="display:flex;justify-content:space-between;font-size:13px;
          padding:5px 0;border-bottom:.5px solid #E8EFF5">
          <span>${i.desc}</span><strong>$${fmt(i.sub)}</strong>
        </div>`).join('')}
      <div style="display:flex;justify-content:space-between;font-size:15px;
        font-weight:500;margin-top:10px;margin-bottom:14px">
        <span>Total</span><span>$${fmt(p.total||0)}</span>
      </div>
      ${!entregado ? `
        <button class="btn btn-g" style="width:100%;padding:11px;font-size:14px"
          onclick="window._entregarPedido('${p.fireId}');document.getElementById('voucher-modal').style.display='none'">
          ✓ Confirmar entrega
        </button>` : ''}
      <button class="btn" style="width:100%;margin-top:8px"
        onclick="document.getElementById('voucher-modal').style.display='none'">Cerrar</button>`
    document.getElementById('voucher-modal').style.display = 'flex'
  }
}
