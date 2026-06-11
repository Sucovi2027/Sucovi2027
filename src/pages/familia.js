import { buscarInvitadosPorFamilia, verificarFamilyToken } from '../firebase.js'
import { buildHeader } from '../header.js'
import { injectStyles } from '../styles.js'

async function loadQRLib() {
  if (window.qrcode) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

async function descargarQRInvitado(inv) {
  await loadQRLib()
  const base = window.location.origin
  const link = base + '/acceso?inv=' + inv.token
  const canvas = document.createElement('canvas')
  const W = 600, H = 800
  canvas.width = W; canvas.height = H
  const ctx = canvas.getContext('2d')
  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 0, H)
  grad.addColorStop(0, '#1A3A5C')
  grad.addColorStop(0.55, '#2C5F8A')
  grad.addColorStop(1, '#3A7D44')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, W, H)
  // Gold bar
  ctx.fillStyle = '#C9A96E'
  ctx.fillRect(0, H - 4, W, 4)
  // Event name
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.font = '500 18px system-ui, -apple-system, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN', W/2, 54)
  // Invitado name
  ctx.fillStyle = '#ffffff'
  ctx.font = '500 38px system-ui, -apple-system, sans-serif'
  ctx.fillText(inv.nombre + ' ' + inv.apellido, W/2, 110)
  // Code
  ctx.fillStyle = 'rgba(255,255,255,0.75)'
  ctx.font = '400 22px system-ui, -apple-system, sans-serif'
  ctx.fillText(inv.codigo, W/2, 146)
  // Badge
  ctx.fillStyle = '#3A7D44'
  const bw = 200, bh = 34, bx = W/2 - bw/2, by = 164
  roundRect(ctx, bx, by, bw, bh, 17)
  ctx.fill()
  ctx.fillStyle = '#ffffff'
  ctx.font = '500 15px system-ui, -apple-system, sans-serif'
  ctx.fillText('Bono confirmado', W/2, by + 23)
  // QR white card
  const cardW = 320, cardH = 340, cardX = W/2 - cardW/2, cardY = 220
  ctx.fillStyle = '#ffffff'
  roundRect(ctx, cardX, cardY, cardW, cardH, 16)
  ctx.fill()
  // Draw QR inside card
  const qr = qrcode(0, 'M')
  qr.addData(link)
  qr.make()
  const modules = qr.getModuleCount()
  const qrSize = 240
  const qrX = cardX + (cardW - qrSize) / 2
  const qrY = cardY + 24
  const cellSize = qrSize / modules
  ctx.fillStyle = '#000000'
  for (let row = 0; row < modules; row++)
    for (let col = 0; col < modules; col++)
      if (qr.isDark(row, col))
        ctx.fillRect(qrX + col*cellSize, qrY + row*cellSize, cellSize, cellSize)
  // Code under QR
  ctx.fillStyle = '#1A3A5C'
  ctx.font = '500 26px system-ui, -apple-system, sans-serif'
  ctx.fillText(inv.codigo, W/2, cardY + cardH - 44)
  ctx.fillStyle = '#888'
  ctx.font = '400 14px system-ui, -apple-system, sans-serif'
  ctx.fillText('Mostrá este QR en la entrada', W/2, cardY + cardH - 20)
  // Bottom info
  ctx.fillStyle = 'rgba(255,255,255,0.85)'
  ctx.font = '400 18px system-ui, -apple-system, sans-serif'
  ctx.fillText('Sáb 20 jun 2026  ·  19:30 hs', W/2, cardY + cardH + 50)
  ctx.fillText('Roma 656, Olivos', W/2, cardY + cardH + 80)
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.font = '400 13px system-ui, -apple-system, sans-serif'
  ctx.fillText('Personal e intransferible · Un solo uso en la entrada', W/2, H - 24)
  // Download
  const a = document.createElement('a')
  a.download = 'QR_' + inv.nombre + '_' + inv.apellido + '.png'
  a.href = canvas.toDataURL()
  a.click()
}

export async function renderFamilia(app, familia, token) {
  injectStyles()

  const valido = await verificarFamilyToken(familia, token)
  if (!valido) {
    app.innerHTML = buildHeader({ title: 'Acceso denegado', sub: 'SUCOVI 2027' }) +
      '<div style="max-width:480px;margin:40px auto;padding:16px;text-align:center">' +
      '<div style="font-size:40px;margin-bottom:12px">🔒</div>' +
      '<div style="font-size:16px;color:#A32D2D">Link invalido o expirado</div></div>'
    return
  }

  const invitados = await buscarInvitadosPorFamilia(familia)
  const titulo = familia.charAt(0).toUpperCase() + familia.slice(1).toLowerCase()
  const badgeClass = { pagado: 'b-pago', ingresado: 'b-ingr', pendiente: 'b-pend', invalidado: 'b-canc' }
  const badgeLabel = { pagado: 'Bono confirmado', ingresado: 'Ingreso', pendiente: 'Pendiente', invalidado: 'Invalidado' }
  const base = window.location.origin

  app.innerHTML = buildHeader({ title: 'Familia ' + titulo, sub: 'SUCOVI 2027 · ' + invitados.length + ' invitado' + (invitados.length !== 1 ? 's' : '') }) +
    '<div style="max-width:600px;margin:0 auto;padding:16px">' +
    (invitados.length === 0
      ? '<div class="empty">No se encontraron invitados.</div>'
      : invitados.map((inv, idx) => {
          const initials = ((inv.nombre||'')[0]||'') + ((inv.apellido||'')[0]||'')
          const link = base + '/acceso?inv=' + inv.token
          const waTxt = inv.estado === 'ingresado'
            ? 'Hola ' + inv.nombre + '! 🍷\n\nYa estás dentro de SUCOVI 2027 — ¡disfrutá la noche!\n\nSi necesitás tu QR para los stands:\n👉 ' + link + '\n\n_Personal e intransferible._'
            : inv.estado === 'pagado'
            ? 'Hola ' + inv.nombre + '! 🍷\n\nTe confirmo tu acreditación para *SUCOVI 2027*.\n\n📅 Sáb 20 jun 2026 · 19:30 hs\n📍 Roma 656, Olivos\n\n✅ *Bono confirmado* ($35.000)\nIncluye degustaciones + copa + empanada.\n\nTu QR personal:\n👉 ' + link + '\n\n_Personal e intransferible. Un solo uso en la entrada._'
            : 'Hola ' + inv.nombre + '! 🍷\n\nQuedaste registrado/a en *SUCOVI 2027*.\n\n📅 Sáb 20 jun 2026 · 19:30 hs\n📍 Roma 656, Olivos\n\n⏳ Bono pendiente de pago ($35.000)\nPodés abonar en la puerta.\n\nConsultas: José Pannunzio +54 9 11 5400-1313'
          const waMsg = encodeURIComponent(waTxt)
          const tel = (inv.tel||'').replace(/\D/g,'')
          const waLink = tel ? 'https://wa.me/' + (tel.startsWith('54')?tel:'54'+tel) + '?text=' + waMsg : null
          return '<div class="card" style="margin-bottom:10px">' +
            '<div style="display:flex;align-items:center;gap:12px">' +
              '<div style="width:40px;height:40px;border-radius:50%;background:#1A3A5C;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600;flex-shrink:0">' + initials + '</div>' +
              '<div style="flex:1;min-width:0">' +
                '<div style="font-size:15px;font-weight:600;color:#1A3A5C">' + inv.nombre + ' ' + inv.apellido + '</div>' +
                '<div style="font-size:12px;color:#888">' + (inv.codigo||'') + '</div>' +
                '<span class="badge ' + (badgeClass[inv.estado]||'') + '" style="margin-top:4px;display:inline-block">' + (badgeLabel[inv.estado]||inv.estado) + '</span>' +
              '</div>' +
              '<div style="display:flex;gap:6px;flex-shrink:0">' +
                (waLink ? '<a href="' + waLink + '" target="_blank" class="btn" style="padding:4px 8px;font-size:11px">📱 WA</a>' : '') +
                '<button class="btn btn-b" style="padding:4px 8px;font-size:11px" onclick="window._dlQR(' + idx + ')">📥 QR</button>' +
                '<a href="' + link + '" class="btn btn-v" style="padding:4px 8px;font-size:11px">Ver QR</a>' +
              '</div>' +
            '</div>' +
          '</div>'
        }).join('')
    ) +
    '</div>'

  window._invitadosFamilia = invitados
  window._dlQR = async (idx) => {
    const inv = window._invitadosFamilia[idx]
    if (inv) await descargarQRInvitado(inv)
  }
}
