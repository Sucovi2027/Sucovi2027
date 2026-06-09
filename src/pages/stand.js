import { buildHeader, buildInvHeader } from '../header.js'
// src/pages/stand.js
import { escucharVinos, escucharCarrito, agregarAlCarrito, escucharStock, intentarReservarStock, liberarReservaStock,
         eliminarItemCarrito, actualizarRetiroStand } from '../firebase.js'
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

export function renderStand(app, bodega, invitado) {
  injectStyles()

  // Sin invitado o inválido
  if (!invitado || invitado.estado === 'invalidado') {
    app.innerHTML = buildHeader({ title: '🍷 ' + bodega.nombre, sub: 'Stand #' + bodega.id + ' · Sucovi 2027' }) + `
      <div style="max-width:400px;margin:40px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <h2 style="font-size:18px;font-weight:500;color:#6B1C1C;margin-bottom:8px">
          Acceso requerido
        </h2>
        <p style="font-size:14px;color:#666;line-height:1.6;margin-bottom:20px">
          Escaneá el QR personal del invitado o ingresá su código manualmente.
        </p>

        <!-- Ingreso manual -->
        <div style="display:flex;gap:8px;margin-bottom:8px">
          <input id="inv-cod-manual" placeholder="INV-0001.Apellido"
            style="flex:1;font-size:15px;text-transform:uppercase;letter-spacing:.05em;text-align:center"
            onkeydown="if(event.key==='Enter') window._buscarInvStand()">
          <button class="btn btn-v" onclick="window._buscarInvStand()" style="white-space:nowrap">
            Ir →
          </button>
        </div>
        <button class="btn btn-b" onclick="window._abrirScannerStand()"
          style="width:100%;padding:10px;font-size:13px;margin-bottom:12px">
          📷 Escanear QR del invitado
        </button>
        <div id="inv-cod-err" style="font-size:12px;color:#C0392B;margin-bottom:12px"></div>

        <!-- Stock msg modal -->
        <div id="stand-msg-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
          background:rgba(0,0,0,.5);z-index:400;align-items:center;justify-content:center">
          <div id="stand-msg-box" style="background:#fff;border-radius:14px;padding:28px 32px;
            text-align:center;font-size:18px;font-weight:500;min-width:220px;box-shadow:0 8px 32px rgba(0,0,0,.2)">
          </div>
        </div>
        <!-- Scanner overlay -->
        <div id="scan-overlay-stand" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
          background:rgba(26,58,92,.92);z-index:300;flex-direction:column;
          align-items:center;justify-content:center;gap:16px">
          <p style="color:#fff;font-size:14px;font-weight:500">Apuntá al QR del invitado</p>
          <video id="scan-video-stand" autoplay playsinline muted
            style="width:280px;height:280px;object-fit:cover;border-radius:12px"></video>
          <p id="scan-status-stand" style="color:#C9A96E;font-size:13px">Iniciando...</p>
          <button onclick="window._cerrarScannerStand()"
            style="background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);
              border-radius:8px;padding:8px 20px;cursor:pointer;font-size:13px">
            Cancelar
          </button>
        </div>

        <p style="font-size:12px;color:#aaa;margin-top:8px">
          Consultas: José Pannunzio +54 9 11 5400-1313
        </p>
      </div>`

    // Load invitados to search by code
    window._buscarInvStand = async () => {
      const input = (document.getElementById('inv-cod-manual')?.value || '').trim()
      const errEl = document.getElementById('inv-cod-err')
      if (!input) return

      // Format: V001.Apellido
      const parts = input.split('.')
      if (parts.length !== 2) {
        errEl.textContent = 'Formato: INV-0001.Apellido'
        return
      }
      const cod = parts[0].toUpperCase().trim()
      const apellidoIngresado = parts[1].toLowerCase().trim()

      errEl.textContent = 'Buscando...'
      try {
        const { buscarInvitadoPorCodigo } = await import('../firebase.js')
        const inv = await buscarInvitadoPorCodigo(cod)
        if (!inv) { errEl.textContent = 'Código no encontrado'; return }
        if (inv.estado === 'invalidado') { errEl.textContent = 'Invitado invalidado'; return }
        // Verify apellido
        if (!inv.apellido.toLowerCase().startsWith(apellidoIngresado)) {
          errEl.textContent = 'Código o apellido incorrecto'
          return
        }
        window.location.href = '/stand/' + bodega.id + '?inv=' + inv.token
      } catch(e) {
        errEl.textContent = 'Error: ' + e.message
      }
    }
    return
  }

  if (invitado.estado === 'pendiente') {
    app.innerHTML = buildHeader({ title: '🍷 ' + bodega.nombre, sub: 'Stand #' + bodega.id + ' · Sucovi 2027' }) + `
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">⏳</div>
        <h2 style="font-size:18px;font-weight:500;color:#854F0B;margin-bottom:8px">
          Bono pendiente de pago
        </h2>
        <p style="font-size:14px;color:#666;">
          Hola ${invitado.nombre}, tu bono ($35.000) todavía no fue confirmado.<br>
          Pasá por la entrada para abonar.
        </p>
      </div>`
    return
  }

  let vinos = [], carritoStand = null, retiro = 'stand'
  const invLink = `/carrito?inv=${invitado.token}`

  app.innerHTML = buildHeader({
    title: '🍷 ' + bodega.nombre,
    sub: bodega.region + ' · Stand #' + bodega.id,
    actions: [
      `<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px">
        <div style="font-size:11px;background:rgba(255,255,255,.18);padding:3px 8px;border-radius:6px;color:#fff">✓ ${invitado.nombre}</div>
        <a href="${invLink}" style="font-size:10px;color:rgba(255,255,255,.75)">Ver carrito →</a>
      </div>`
    ]
  }) + `

    <div style="max-width:440px;margin:0 auto;padding:14px">
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        🎟 Degustaciones incluidas en tu bono.<br>
        Elegí botellas o cajas para llevar — se acumulan en tu carrito y pagás todo junto en caja.
      </div>

      <!-- Stock msg modal -->
      <div id="stand-msg-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:400;align-items:center;justify-content:center">
        <div id="stand-msg-box" style="background:#fff;border-radius:14px;padding:32px 40px;text-align:center;font-size:20px;font-weight:600;min-width:240px;box-shadow:0 8px 32px rgba(0,0,0,.25)"></div>
      </div>
      <div id="menu-lista"><div class="empty">Cargando carta...</div></div>

      <!-- Opción de retiro para este stand -->
      <div id="retiro-box" style="display:none;margin-top:14px">
        <p style="font-size:12px;font-weight:500;color:#555;margin-bottom:6px">
          ¿Cómo retirás de <strong>${bodega.nombre}</strong>?
        </p>
        <div class="retiro-opt">
          <div class="retiro-btn sel" id="rb-stand" onclick="window._sRet('stand')">
            🍷<br><span style="font-size:11px">Retiro en stand</span>
          </div>
  
        </div>

          </div>
        </div>
      </div>

      <!-- Resumen de lo que tiene de este stand -->
      <div id="stand-resumen" style="display:none;margin-top:10px">
        <div class="card" style="background:#f8f8f8">
          <p style="font-size:11px;font-weight:500;color:#6B1C1C;margin-bottom:6px">
            En tu carrito de ${bodega.nombre}:
          </p>
          <div id="stand-resumen-lines"></div>
          <div style="font-size:12px;color:#aaa;margin-top:8px;text-align:center">
            <a href="${invLink}" style="color:#6B1C1C;text-decoration:underline">
              Ver carrito completo →
            </a>
          </div>
        </div>
      </div>

      <div id="add-msg" style="text-align:center;font-size:12px;color:#3B6D11;
        margin-top:8px;min-height:20px"></div>
    </div>

    <!-- FAB carrito -->
    <button class="cart-fab" id="cart-fab" style="display:none"
      onclick="window.location.href='${invLink}'">
      🛒 <span id="cart-fab-txt">Ver carrito</span>
    </button>`

  // Escuchar vinos
  window._stockDisponible = {}
  let stockDisponible = window._stockDisponible
  escucharStock(stockDocs => {
    console.log("STOCK DOCS:", stockDocs.length, "bodega:", bodega.id)
    stockDisponible = {}
    stockDocs.filter(s => Number(s.standId) === Number(bodega.id)).forEach(s => {
      stockDisponible[s.vinoId] = Math.max(0,(s.total||0) - (s.degustacion||0) - (s.reservado||0) - (s.pagado||0) - (s.entregado||0))
    })
    vinos.forEach((v,vi) => { const el=document.getElementById("disp-"+vi); if(!el) return; const d=stockDisponible[v.fireId||v.id]; if(d!==undefined){el.textContent="("+d+" disp.)";el.style.color=d===0?"#C0392B":d<=3?"#D97706":"#888"} })
  })

  escucharVinos(bodega.id, data => { vinos = data; renderMenu(); setTimeout(() => { vinos.forEach((v,vi) => { const el=document.getElementById("disp-"+vi); if(!el) return; const d=stockDisponible[v.fireId||v.id]; if(d!==undefined){el.textContent="("+d+" disp.)";el.style.color=d===0?"#C0392B":d<=3?"#D97706":"#888"} }) }, 300) })

  const localQty = {}

  // Escuchar carrito de este invitado para mostrar resumen
  escucharCarrito(invitado.fireId, items => {
    const standItem = items.find(i => Number(i.standId) === bodega.id)
    carritoStand = standItem || null
    if (standItem && standItem.items) {
      standItem.items.forEach(item => {
        if (item.key && localQty[item.key] === undefined) {
          localQty[item.key] = item.qty || 0
          const [vi, ui] = item.key.split('_').map(Number)
          const el = document.getElementById('qv' + vi + '_' + ui)
          if (el) el.textContent = localQty[item.key]
        }
      })
    }
    const total = items.reduce((s, si) =>
      s + (si.items || []).reduce((ss, i) => ss + (i.sub || 0), 0), 0)
    const totalItems = items.reduce((s, si) => s + (si.items || []).length, 0)

    const fab = document.getElementById('cart-fab')
    const txt = document.getElementById('cart-fab-txt')
    if (fab && totalItems > 0) {
      fab.style.display = 'flex'
      txt.textContent = `Ver carrito · $${fmt(total)}`
    } else if (fab) { fab.style.display = 'none' }

    // mostrar resumen de este stand
    if (standItem && standItem.items?.length) {
      retiro = standItem.retiro || 'stand'
      document.getElementById('rb-stand')?.classList.toggle('sel', retiro === 'stand')

      document.getElementById('retiro-box').style.display = 'block'
      document.getElementById('stand-resumen').style.display = 'block'
      document.getElementById('stand-resumen-lines').innerHTML =
        standItem.items.map(i => `
          <div style="display:flex;justify-content:space-between;font-size:12px;
            color:#555;margin-bottom:4px">
            <span>${i.desc}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-weight:500">$${fmt(i.sub)}</span>
              <button onclick="window._quitarItem('${i.key}')"
                style="border:none;background:none;color:#A32D2D;cursor:pointer;
                font-size:13px;padding:0 2px">✕</button>
            </div>
          </div>`).join('')
    } else {
      document.getElementById('stand-resumen').style.display = 'none'
      if (standItem === null) document.getElementById('retiro-box').style.display = 'none'
    }
  })

  function renderMenu() {
    const el = document.getElementById('menu-lista'); if (!el) return
    if (!vinos.length) {
      el.innerHTML = '<div class="empty">La carta estará disponible pronto.</div>'; return
    }
    el.innerHTML = vinos.map((v, vi) => `
      <div class="vino-card">
        <div style="font-size:17px;font-weight:600;color:#1A3A5C">${v.nombre}</div>
        <div style="font-size:11px;color:#888;margin-top:2px">
          <span style="font-size:14px;color:#555">${v.varietal || ''}${v.cosecha ? ' · ' + v.cosecha : ''}</span>
        </div>
        ${v.descripcion ? `<div style="font-size:13px;color:#666;margin-top:3px">${v.descripcion}</div>` : ''}
        ${(v.unidades || []).map((u, ui) => `
          <div class="qty-row">
            <span class="qty-label">
              ${u.u} — <span style="color:#6B1C1C;font-weight:600">$${fmt(u.p)}</span>
              <span id="disp-${vi}" style="font-size:11px;margin-left:6px"></span>
            </span>
            <button class="qty-btn" id="btnm${vi}_${ui}" onclick="window._agregar(${vi},${ui},-1)">−</button>
            <span id="qv${vi}_${ui}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" id="btnp${vi}_${ui}" onclick="window._agregar(${vi},${ui},1)">+</button>
          </div>`).join('')}
      </div>`).join('')
  }

  // local qty state

  window._agregar = async (vi, ui, delta) => {
    const v = vinos[vi]; if (!v) return
    const u = (v.unidades || [])[ui]; if (!u) return
    const key = `${vi}_${ui}`
    // Disable buttons while processing
    const btnId = `btn${delta>0?'p':'m'}${vi}_${ui}`
    const btnEl = document.getElementById(btnId)
    if (btnEl) { btnEl.disabled = true; btnEl.style.opacity = '0.4' }
    if (delta > 0) {
      const vid = v.fireId||v.id
      const ok = await intentarReservarStock(bodega.id, vid, delta)
      if (!ok) {
        window._showStandMsg('Sin stock disponible', '#C0392B')
        setTimeout(() => window._hideStandMsg(), 1800)
        if (btnEl) { btnEl.disabled = false; btnEl.style.opacity = '1' }
        return
      }
    }
    localQty[key] = Math.max(0, (localQty[key] || 0) + delta)
    const el = document.getElementById(`qv${vi}_${ui}`)
    if (el) el.textContent = localQty[key]

    if (delta < 0) await liberarReservaStock(bodega.id, v.fireId||v.id, 1).catch(()=>{})
    if (localQty[key] === 0) {
      await eliminarItemCarrito(invitado.fireId, bodega.id, key)
    } else {
      const item = {
        key,
        desc: `${v.nombre} — ${u.u} ×${localQty[key]}`,
        sub:  u.p * localQty[key],
        vinoNombre: v.nombre, vinoId: v.fireId||v.id||v.nombre, unidad: u.u, precio: u.p, qty: localQty[key]
      }
      window._showStandMsg('⏳ Guardando...', '#5BA4CF')
      const msg = document.getElementById('add-msg')
      msg.style.cssText = 'font-size:18px;color:#5BA4CF;text-align:center;padding:8px'
      await agregarAlCarrito(invitado.fireId, bodega.id, bodega.nombre, item, retiro)

      // Update local stockDisponible immediately
      const vid = v.fireId||v.id
      if (stockDisponible[vid] !== undefined) stockDisponible[vid] = Math.max(0, stockDisponible[vid] - delta)
      document.getElementById('retiro-box').style.display = 'block'
      window._showStandMsg('✓ Agregado al carrito', '#3B6D11')
      if (btnEl) { btnEl.disabled = false; btnEl.style.opacity = '1' }
      setTimeout(() => window._hideStandMsg(), 1500)
      msg.textContent = ''
      msg.style.cssText = ''
    }
  }

  window._sRet = async (r) => {
    retiro = r
    document.getElementById('rb-stand').classList.toggle('sel', r === 'stand')

    
    await actualizarRetiroStand(invitado.fireId, bodega.id, r)
  }

  window._quitarItem = async (key) => {
    await eliminarItemCarrito(invitado.fireId, bodega.id, key)
    const [vi, ui] = key.split('_').map(Number)
    localQty[key] = 0
    const el = document.getElementById(`qv${vi}_${ui}`)
    if (el) el.textContent = 0
  }
}

// Scanner global para stand/acceso
window._abrirScannerStand = async () => {
  const overlay = document.getElementById('scan-overlay-stand')
  if (overlay) overlay.style.display = 'flex'
  const statusEl = document.getElementById('scan-status-stand')
  try {
    if (!window.jsQR) {
      await new Promise((res,rej) => {
        const s = document.createElement('script')
        s.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js'
        s.onload = res; s.onerror = rej; document.head.appendChild(s)
      })
    }
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    const video = document.getElementById('scan-video-stand')
    video.srcObject = stream
    if (statusEl) statusEl.textContent = 'Buscando QR...'
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    let active = true
    const stop = () => { active = false; stream.getTracks().forEach(t => t.stop()) }
    const tick = () => {
      if (!active) return
      if (video.readyState === video.HAVE_ENOUGH_DATA && video.videoWidth > 0) {
        canvas.width = video.videoWidth; canvas.height = video.videoHeight
        ctx.drawImage(video, 0, 0)
        const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const code = window.jsQR(img.data, img.width, img.height, { inversionAttempts: 'dontInvert' })
        if (code && code.data) {
          stop()
          window._cerrarScannerStand()
          const raw = code.data
          const matchToken = raw.match(/inv=([A-Z0-9]+)/i)
          // Get current stand id from URL
          const standId = window.location.pathname.split('/')[2]
          if (matchToken && standId) {
            window.location.href = '/stand/' + standId + '?inv=' + matchToken[1]
          }
          return
        }
      }
      if (active) requestAnimationFrame(tick)
    }
    video.addEventListener('loadeddata', () => requestAnimationFrame(tick))
  } catch(e) {
    if (statusEl) statusEl.textContent = 'No se pudo acceder a la camara.'
  }
}

window._cerrarScannerStand = () => {
  const overlay = document.getElementById('scan-overlay-stand')
  if (overlay) overlay.style.display = 'none'
  const video = document.getElementById('scan-video-stand')
  if (video && video.srcObject) { video.srcObject.getTracks().forEach(t => t.stop()); video.srcObject = null }
}
window._showStandMsg = (txt, color) => {
  const modal = document.getElementById('stand-msg-modal')
  const box = document.getElementById('stand-msg-box')
  if (!modal || !box) return
  box.textContent = txt
  box.style.color = color || '#1A3A5C'
  modal.style.display = 'flex'
}
window._hideStandMsg = () => {
  const modal = document.getElementById('stand-msg-modal')
  if (modal) modal.style.display = 'none'
}
