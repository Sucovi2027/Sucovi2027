import { buildHeader, buildInvHeader } from '../header.js'
// src/pages/stand.js
import { escucharVinos, escucharCarrito, agregarAlCarrito,
         eliminarItemCarrito, actualizarRetiroStand } from '../firebase.js'
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

export function renderStand(app, bodega, invitado) {
  injectStyles()

  // Sin invitado o inválido
  if (!invitado || invitado.estado === 'invalidado') {
    app.innerHTML = buildHeader({ title: '🍷 ' + bodega.nombre, sub: 'Stand #' + bodega.id + ' · Sucovi 2027' }) + `
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <h2 style="font-size:18px;font-weight:500;color:#6B1C1C;margin-bottom:8px">
          Acceso requerido
        </h2>
        <p style="font-size:14px;color:#666;line-height:1.6">
          Para hacer pedidos necesitás escanear tu QR personal de acreditación primero.<br><br>
          Si ya tenés tu QR, escanealo nuevamente.
        </p>
        <p style="font-size:12px;color:#aaa;margin-top:16px">
          Consultas: José Pannunzio +54 9 11 5400-1313
        </p>
      </div>`
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
  const invLink = `/acceso?inv=${invitado.token}`

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
          <div class="retiro-btn" id="rb-envio" onclick="window._sRet('envio')">
            🚚<br><span style="font-size:11px">Envío a domicilio</span>
          </div>
        </div>
        <div id="envio-form" style="display:none;margin-bottom:12px">
          <div class="card">
            <p style="font-size:12px;font-weight:500;color:#5A1E99;margin-bottom:8px">
              🚚 Datos de envío para ${bodega.nombre}
            </p>
            <div style="display:flex;flex-direction:column;gap:6px">
              <input id="env-nom" placeholder="Nombre completo">
              <input id="env-tel" placeholder="Teléfono de contacto">
              <input id="env-dir" placeholder="Dirección completa">
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
  escucharVinos(bodega.id, data => { vinos = data; renderMenu() })

  // Escuchar carrito de este invitado para mostrar resumen
  escucharCarrito(invitado.fireId, items => {
    const standItem = items.find(i => Number(i.standId) === bodega.id)
    carritoStand = standItem || null
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
      document.getElementById('rb-envio')?.classList.toggle('sel', retiro === 'envio')
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
            </span>
            <button class="qty-btn" onclick="window._agregar(${vi},${ui},-1)">−</button>
            <span id="qv${vi}_${ui}" style="font-size:14px;font-weight:500;min-width:20px;text-align:center">0</span>
            <button class="qty-btn" onclick="window._agregar(${vi},${ui},1)">+</button>
          </div>`).join('')}
      </div>`).join('')
  }

  // local qty state
  const localQty = {}

  window._agregar = async (vi, ui, delta) => {
    const v = vinos[vi]; if (!v) return
    const u = (v.unidades || [])[ui]; if (!u) return
    const key = `${vi}_${ui}`
    localQty[key] = Math.max(0, (localQty[key] || 0) + delta)
    const el = document.getElementById(`qv${vi}_${ui}`)
    if (el) el.textContent = localQty[key]

    if (localQty[key] === 0) {
      await eliminarItemCarrito(invitado.fireId, bodega.id, key)
    } else {
      const item = {
        key,
        desc: `${v.nombre} — ${u.u} ×${localQty[key]}`,
        sub:  u.p * localQty[key],
        vinoNombre: v.nombre, unidad: u.u, precio: u.p, qty: localQty[key]
      }
      await agregarAlCarrito(invitado.fireId, bodega.id, bodega.nombre, item, retiro)
      document.getElementById('retiro-box').style.display = 'block'
      const msg = document.getElementById('add-msg')
      msg.textContent = `✓ ${v.nombre} (${u.u}) agregado al carrito`
      setTimeout(() => { msg.textContent = '' }, 2000)
    }
  }

  window._sRet = async (r) => {
    retiro = r
    document.getElementById('rb-stand').classList.toggle('sel', r === 'stand')
    document.getElementById('rb-envio').classList.toggle('sel', r === 'envio')
    document.getElementById('envio-form').style.display = r === 'envio' ? 'block' : 'none'
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
