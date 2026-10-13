// src/pages/standPanel.js
import { buildHeader } from '../header.js'
import { escucharPedidosPorStand, marcarEntregado, escucharVinos, marcarListoLogistica, escucharStock } from '../firebase.js'
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
      <button class="btn btn-b" style="font-size:11px;padding:5px 10px;margin-left:8px" onclick="window._imprimirQRDesdePanel()">🖨️ QR</button>
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
              <span>${i.vinoCodigoLegible ? '<span style="font-size:10px;background:#1A3A5C;color:#fff;padding:1px 5px;border-radius:6px;margin-right:4px;font-weight:600">'+i.vinoCodigoLegible+'</span>' : ''}${i.desc}</span><strong>$${fmt(i.sub)}</strong>
            </div>`).join('')}
          <div style="display:flex;justify-content:space-between;font-size:14px;
            font-weight:500;margin-top:8px;color:#1A3A5C">
            <span>Total</span><span>$${fmt(p.total||0)}</span>
          </div>
          <div style="display:flex;gap:6px;margin-top:10px">
            ${!entregado ? `
            <button class="btn btn-g" style="flex:1;padding:9px"
              onclick="window._scanearEsteRemito('${p.fireId}')">
              📷 Escanear
            </button>` : ''}
            <button class="btn" style="flex:1;padding:9px"
              onclick="window._imprimirRemito('${p.fireId}', ${entregado})">
              🖨️ ${entregado ? 'Remito entregado' : 'Imprimir remito'}
            </button>
          </div>
        </div>`
    }).join('')
  }

  window._imprimirRemito = (fireId, entregado) => {
    const p = pedidos.find(x => x.fireId === fireId); if (!p) return
    const fmtN = n => Number(n).toLocaleString('es-AR')
    const voc = p.voucherNum ? 'VOC-' + String(p.voucherNum).padStart(3,'0') : 'VOC-000'
    const win = window.open('', '_blank')
    win.document.write(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <title>Remito ${voc}</title>
      <script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"><\/script>
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: system-ui, sans-serif; padding: 16px; }
        .voucher { border: 2px solid #1A3A5C; border-radius: 10px; padding: 16px; }
        .header { display: flex; justify-content: space-between; margin-bottom: 10px;
          border-bottom: 1px solid #D6E4F0; padding-bottom: 8px; }
        .evento { font-size: 10px; color: #888; letter-spacing: .08em; }
        .voc-num { font-size: 22px; font-weight: 700; color: #1A3A5C; margin-top: 2px; }
        .stand { font-size: 22px; font-weight: 600; color: #1A3A5C; }
        .inv { font-size: 16px; color: #444; }
        .item { display: flex; justify-content: space-between; font-size: 15px;
          padding: 4px 0; border-bottom: .5px solid #eee; }
        .total { display: flex; justify-content: space-between; font-size: 20px;
          font-weight: 600; margin-top: 8px; color: #1A3A5C; }
        .badge { color: #fff; padding: 3px 12px; border-radius: 20px;
          font-size: 11px; display: inline-block; margin-bottom:6px; }
        .badge-pagado { background: #3A7D44; }
        .badge-entregado { background: #1A3A5C; }
        .sello { text-align:center; margin-top:16px; padding:10px;
          border: 3px solid #3A7D44; border-radius: 8px; color: #3A7D44;
          font-size: 22px; font-weight: 700; letter-spacing: .1em; }
        .qr-box { display:flex;flex-direction:column;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid #D6E4F0; }
        .qr-hint { font-size:12px;color:#888;text-align:center;margin-top:6px }
        @media print { body { padding: 0; } }
      </style>
    </head><body>
      <div class="voucher">
        <div class="header">
          <div>
            <div class="evento">SUCOVI 2027 · VOUCHER DE RETIRO · Stand #${bodega.id}</div>
            <div class="voc-num">${voc}</div>
            <div class="stand">${bodega.nombre}</div>
            <div class="inv">${p.invNombre||''} · ${p.invCodigo||''}</div>
          </div>
          <div style="text-align:right">
            <div class="badge ${entregado ? 'badge-entregado' : 'badge-pagado'}">${entregado ? '✅ ENTREGADO' : '✅ PAGADO'}</div>
          </div>
        </div>
        ${(p.items||[]).map(i => `
          <div class="item"><span>${i.vinoCodigoLegible ? '<span style="font-size:10px;background:#1A3A5C;color:#fff;padding:1px 5px;border-radius:6px;margin-right:4px;font-weight:600">'+i.vinoCodigoLegible+'</span>' : ''}${i.desc}</span><strong>$${fmtN(i.sub)}</strong></div>
        `).join('')}
        <div class="total">
          <span>Total</span>
          <span>$${fmtN(p.total||0)}</span>
        </div>
        ${entregado ? '<div class="sello">✅ ENTREGADO</div>' : `
        <div class="qr-box">
          <canvas id="qr-remito"></canvas>
          <div class="qr-hint">Escaneá en el stand</div>
        </div>`}
      </div>
      <script>
        const c = document.getElementById('qr-remito')
        if (c && typeof qrcode !== 'undefined') {
          const qr = qrcode(0, 'M')
          qr.addData('${fireId}')
          qr.make()
          const mod = qr.getModuleCount(), sz = 200, cs = sz/mod
          c.width = sz; c.height = sz
          const ctx = c.getContext('2d')
          ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
          ctx.fillStyle = '#000'
          for(let r=0;r<mod;r++) for(let col=0;col<mod;col++)
            if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
        }
        setTimeout(() => window.print(), 800)
      <\/script>
    </body></html>`)
    win.document.close()
  }

  window._entregarPedido = async (fireId) => { await marcarEntregado(fireId) }

  window._scanearEsteRemito = async (targetFireId) => {
    document.getElementById('scan-overlay-voucher').style.display = 'flex'
    const statusEl = document.getElementById('scan-status-voucher')
    if (statusEl) statusEl.textContent = 'Escaneá el QR de este remito...'
    try {
      stopVoucherScanner = await iniciarScanner('scan-video-voucher', (raw) => {
        window._cerrarScannerVoucher()
        const modal = document.getElementById('voucher-modal')
        const content = document.getElementById('voucher-modal-content')
        if (raw.includes(targetFireId)) {
          content.innerHTML = `
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">✅</div>
              <div style="font-size:18px;font-weight:700;color:#3A7D44;margin-bottom:4px">QR válido</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">¿Confirmás la entrega de este pedido?</div>
              <div style="display:flex;gap:10px;justify-content:center">
                <button onclick="document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:14px;cursor:pointer">
                  Cancelar
                </button>
                <button onclick="marcarEntregado('${targetFireId}');document.getElementById('voucher-modal').style.display='none'"
                  style="padding:10px 20px;border-radius:8px;border:none;background:#3A7D44;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                  Confirmar entrega
                </button>
              </div>
            </div>`
        } else {
          content.innerHTML = `
            <div style="text-align:center;padding:8px 0 16px">
              <div style="font-size:48px;margin-bottom:8px">❌</div>
              <div style="font-size:18px;font-weight:700;color:#C0392B;margin-bottom:4px">QR no corresponde</div>
              <div style="font-size:14px;color:#555;margin-bottom:20px">Este QR no pertenece al remito seleccionado.</div>
              <button onclick="document.getElementById('voucher-modal').style.display='none'"
                style="padding:10px 24px;border-radius:8px;border:none;background:#1A3A5C;color:#fff;font-size:14px;font-weight:600;cursor:pointer">
                Cerrar
              </button>
            </div>`
        }
        modal.style.display = 'flex'
      }, 'scan-status-voucher')
    } catch(e) {
      if (statusEl) statusEl.textContent = 'No se pudo acceder a la cámara.'
    }
  }
  window._listoParaLogistica = async (fireId) => { await marcarListoLogistica(fireId) }

  // ── Carta ─────────────────────────────────────────────────────────────────
  let stockPanel = {}
  escucharStock(docs => {
    stockPanel = {}
    docs.filter(s => Number(s.standId) === Number(bodega.id)).forEach(s => {
      stockPanel[s.vinoId] = Math.max(0, (s.total||0) - (s.degustacion||0) - (s.reservado||0) - (s.pagado||0) - (s.entregado||0))
    })
    if (document.getElementById('sp-carta')) renderCarta()
  })

  function renderCarta() {
    const el = document.getElementById('sp-carta'); if (!el) return
    el.innerHTML = '<div class="empty">Cargando...</div>'
    escucharVinos(bodega.id, vinos => {
      if (!vinos.length) { el.innerHTML = '<div class="empty">Sin vinos cargados todavía</div>'; return }
      el.innerHTML = vinos.map(v => {
        const disp = stockPanel[v.fireId||v.id]
        const dispHtml = disp !== undefined
          ? '<span style="font-size:12px;font-weight:500;color:' + (disp===0?'#C0392B':disp<=3?'#D97706':'#3A7D44') + ';margin-left:8px">(' + disp + ' disp.)</span>'
          : ''
        return '<div class="card" style="margin-bottom:10px">' +
          '<div style="font-size:17px;font-weight:600;color:#1A3A5C">' + v.nombre + dispHtml + '</div>' +
          '<div style="font-size:14px;color:#666;margin-top:2px">' + (v.varietal||'') + (v.cosecha?' · '+v.cosecha:'') + '</div>' +
          (v.descripcion?'<div style="font-size:13px;color:#888;margin-top:3px">'+v.descripcion+'</div>':'') +
          '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">' +
          (v.unidades||[]).map(u =>
            '<span style="background:#EBF4FA;color:#1A3A5C;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500">' + u.u + ': $' + fmt(u.p) + '</span>'
          ).join('') + '</div></div>'
      }).join('')
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

window._imprimirQRDesdePanel = async () => {
  const path = window.location.pathname
  const standId = path.split('/')[2]
  const base = window.location.origin
  const url = base + '/stand/' + standId

  if (!window.qrcode) {
    await new Promise((res,rej) => {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
      s.onload = res; s.onerror = rej; document.head.appendChild(s)
    })
  }

  const qr = window.qrcode(0, 'M')
  qr.addData(url); qr.make()
  const modules = qr.getModuleCount(), sz = 300, cs = sz/modules
  const canvas = document.createElement('canvas')
  canvas.width = sz; canvas.height = sz
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
  ctx.fillStyle = '#000'
  for(let r=0;r<modules;r++) for(let col=0;col<modules;col++)
    if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
  const qrDataUrl = canvas.toDataURL('image/png')

  // Mostrar en modal
  const existingModal = document.getElementById('modal-qr-stand')
  if (existingModal) existingModal.remove()

  const modal = document.createElement('div')
  modal.id = 'modal-qr-stand'
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:400;display:flex;align-items:center;justify-content:center;padding:16px'

  const inner = document.createElement('div')
  inner.style.cssText = 'background:#fff;border-radius:16px;padding:24px;text-align:center;max-width:360px;width:100%'

  const title = document.createElement('div')
  title.style.cssText = 'font-size:11px;color:#888;letter-spacing:.08em;margin-bottom:6px'
  title.textContent = 'SUCOVI 2027 · FERIA DE VINOS'

  const nombre = document.createElement('div')
  nombre.style.cssText = 'font-size:20px;font-weight:700;color:#1A3A5C;margin-bottom:16px'
  nombre.textContent = document.querySelector('h1')?.textContent || 'Stand'

  const img = document.createElement('img')
  img.src = qrDataUrl
  img.style.cssText = 'width:260px;height:260px;border-radius:8px;display:block;margin:0 auto'

  const hint = document.createElement('div')
  hint.style.cssText = 'font-size:13px;color:#555;margin-top:12px;margin-bottom:16px'
  hint.textContent = 'Escaneá para ver la carta y hacer tu pedido'

  const closeBtn = document.createElement('button')
  closeBtn.textContent = 'Cerrar'
  closeBtn.style.cssText = 'width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;background:#fff;font-size:13px;cursor:pointer'
  closeBtn.onclick = () => modal.remove()

  inner.appendChild(title)
  inner.appendChild(nombre)
  inner.appendChild(img)
  inner.appendChild(hint)
  inner.appendChild(closeBtn)
  modal.appendChild(inner)
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  document.body.appendChild(modal)
}
