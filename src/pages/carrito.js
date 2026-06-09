import { buildHeader } from '../header.js'
// src/pages/carrito.js
import { escucharCarrito, eliminarItemCarrito,
         actualizarRetiroStand, crearPedidosDesdeCarrito, vaciarCarrito } from '../firebase.js'
import { injectStyles } from '../styles.js'

const fmt = n => Number(n).toLocaleString('es-AR')

export function renderCarrito(app, invitado) {
  injectStyles()

  if (!invitado || invitado.estado === 'invalidado') {
    app.innerHTML = `
      <div class="hdr"><div><h1>🛒 Carrito</h1></div></div>
      <div class="gold"></div>
      <div style="max-width:400px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:48px;margin-bottom:12px">🔒</div>
        <p style="font-size:14px;color:#666">Necesitás tu QR de acreditación para ver el carrito.</p>
      </div>`
    return
  }

  let carritoItems = []

  app.innerHTML = `
    ${buildHeader({ title: '🛒 Mi carrito', sub: invitado.nombre + ' ' + invitado.apellido + ' · ' + invitado.codigo, backHref: '/acceso?inv=' + invitado.token, backLabel: '← Mi QR', backStyle: 'background:#A32D2D;color:#fff;border-color:#A32D2D' })}
    <div style="max-width:480px;margin:0 auto;padding:14px" id="carrito-body">
      <div class="empty">Cargando carrito...</div>
    </div>`

  const unsub = escucharCarrito(invitado.fireId, items => {
    carritoItems = items
    renderCarritoBody()
  })

  function renderCarritoBody() {
    const body = document.getElementById('carrito-body'); if (!body) return

    if (!carritoItems.length || !carritoItems.some(s => s.items?.length)) {
      body.innerHTML = `
        <div class="empty" style="padding:48px 20px">
          <div style="font-size:48px;margin-bottom:12px">🛒</div>
          <p style="font-size:15px;font-weight:500;margin-bottom:8px">Tu carrito está vacío</p>
          <p style="font-size:13px;color:#aaa">
            Escaneá el QR de cualquier stand para agregar vinos.
          </p>
        </div>`
      return
    }

    const total = carritoItems.reduce((s, si) =>
      s + (si.items || []).reduce((ss, i) => ss + (i.sub || 0), 0), 0)

    body.innerHTML = `
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:9px 12px;font-size:12px;color:#6B4000;margin-bottom:14px">
        Revisá tu pedido antes de ir a caja. Podés quitar ítems si es necesario.
      </div>

      ${carritoItems.filter(s => s.items?.length).map(stand => `
        <div class="card" style="margin-bottom:12px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-size:14px;font-weight:500;color:#6B1C1C">
              🍷 ${stand.standNombre}
            </div>
            <span style="font-size:11px;color:#aaa">Stand #${stand.standId}</span>
          </div>

          ${stand.items.map(i => `
            <div style="display:flex;justify-content:space-between;align-items:center;
              padding:6px 0;border-bottom:.5px solid #f0ebe4">
              <span style="font-size:13px;color:#333">${i.desc}</span>
              <div style="display:flex;align-items:center;gap:10px;flex-shrink:0">
                <span style="font-size:13px;font-weight:500">$${fmt(i.sub)}</span>
                <button onclick="window._quitarCarrito('${stand.standDocId}','${i.key}')"
                  style="border:none;background:none;color:#A32D2D;cursor:pointer;
                  font-size:14px;padding:0 4px;font-weight:500">✕</button>
              </div>
            </div>`).join('')}

          <div style="margin-top:10px">
            <p style="font-size:11px;color:#666;font-weight:500;margin-bottom:6px">
              Retiro de ${stand.standNombre}:
            </p>
            <div class="retiro-opt">
              <div class="retiro-btn ${stand.retiro !== 'envio' ? 'sel' : ''}"
                id="rb-${stand.standDocId}-stand"
                onclick="window._cambiarRetiro('${stand.standDocId}',${stand.standId},'stand')">
                🍷<br><span style="font-size:11px">Retiro en stand</span>
              </div>

            </div>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:13px;
            font-weight:500;margin-top:6px;padding-top:6px;border-top:.5px solid #e0d5c8">
            <span>Subtotal ${stand.standNombre}</span>
            <span>$${fmt((stand.items||[]).reduce((s,i)=>s+(i.sub||0),0))}</span>
          </div>
        </div>`).join('')}

      <div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:500">
          <span>Total</span>
          <span style="color:#6B1C1C">$${fmt(total)}</span>
        </div>
        <p style="font-size:12px;color:#888;margin-top:6px">
          Llevá este carrito a caja para pagar. El cajero escanea tu código y ve todo.
        </p>
      </div>

      <div style="background:#E6F1FB;border:.5px solid #185FA5;border-radius:8px;
        padding:10px 14px;font-size:12px;color:#185FA5;margin-bottom:14px;text-align:center">
        📍 Tu código de caja: <strong style="font-size:16px;letter-spacing:.1em">${invitado.codigo}</strong>
      </div>

      <div id="carrito-msg" style="font-size:12px;text-align:center;min-height:16px;margin-bottom:8px"></div>`
  }

  window._quitarCarrito = async (standDocId, itemKey) => {
    const stand = carritoItems.find(s => s.standDocId === standDocId)
    if (!stand) return
    await eliminarItemCarrito(invitado.fireId, Number(stand.standId), itemKey)
  }

  window._cambiarRetiro = async (standDocId, standId, retiro) => {
    await actualizarRetiroStand(invitado.fireId, Number(standId), retiro)
  }
}
