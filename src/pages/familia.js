import { buscarInvitadosPorFamilia, verificarFamilyToken, actualizarInvitado } from '../firebase.js'
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
                '<button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5" onclick="window._editarInvFam(' + idx + ')">✏️</button>' +
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

  // Botón de ayuda flotante
  const helpBtn = document.createElement('button')
  helpBtn.innerHTML = '?'
  helpBtn.style.cssText = 'position:fixed;bottom:20px;left:20px;width:36px;height:36px;border-radius:50%;background:#1A3A5C;color:#fff;border:none;font-size:18px;font-weight:700;cursor:pointer;z-index:100;box-shadow:0 2px 8px rgba(0,0,0,.25)'
  helpBtn.onclick = () => document.getElementById('modal-ayuda-fam').style.display = 'flex'
  document.body.appendChild(helpBtn)

  // Modal de ayuda
  const helpModal = document.createElement('div')
  helpModal.id = 'modal-ayuda-fam'
  helpModal.style.cssText = 'display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:300;align-items:center;justify-content:center;padding:16px'
  helpModal.innerHTML =
    '<div style="background:#fff;width:100%;max-width:440px;border-radius:12px;padding:20px;max-height:85vh;overflow-y:auto">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">' +
        '<div style="font-size:16px;font-weight:700;color:#1A3A5C">¿Cómo usar esta página?</div>' +
        '<button onclick="document.getElementById(\'modal-ayuda-fam\').style.display=\'none\'" style="background:none;border:none;font-size:20px;cursor:pointer;color:#888">×</button>' +
      '</div>' +
      '<div style="font-size:13px;color:#333;line-height:1.7">' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">✏️ Editar datos</div>' +
          '<div>Antes de enviar la invitación, verificá que el <strong>nombre</strong>, <strong>apellido</strong> y <strong>teléfono</strong> de cada invitado sean correctos. Tocá el botón ✏️ para corregirlos.</div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📱 Enviar por WhatsApp</div>' +
          '<div>Tocá el botón <strong>WA</strong> para abrir WhatsApp con el mensaje de invitación ya redactado. El mensaje incluye el link personal del invitado con su QR. <strong>Verificá los datos antes de enviar.</strong></div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">📥 Descargar QR</div>' +
          '<div>Descargá la imagen del QR personal de cada invitado para compartirla por otro medio si es necesario.</div>' +
        '</div>' +
        '<div style="margin-bottom:14px">' +
          '<div style="font-weight:600;color:#1A3A5C;margin-bottom:4px">👁️ Ver QR</div>' +
          '<div>Abre la página personal del invitado donde puede ver su QR, sus compras y acceder a los stands el día del evento.</div>' +
        '</div>' +
        '<div style="background:#FEF3C7;border-radius:8px;padding:10px;font-size:12px;color:#92400E">' +
          '⚠️ <strong>Importante:</strong> El link de cada invitado es personal e intransferible. No lo compartas con otras personas.' +
        '</div>' +
      '</div>' +
    '</div>'
  helpModal.addEventListener('click', e => { if (e.target === helpModal) helpModal.style.display = 'none' })
  document.body.appendChild(helpModal)

  // Agregar modal de edición al DOM
  const modalEl = document.createElement('div')
  modalEl.id = 'modal-edit-fam'
  modalEl.style.cssText = 'display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px'
  modalEl.innerHTML =
    '<div style="background:#fff;width:100%;max-width:420px;border-radius:12px;padding:20px">' +
      '<h3 style="font-size:14px;font-weight:500;color:#1A3A5C;margin-bottom:14px">Editar invitado</h3>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">' +
        '<div><label style="font-size:11px;color:#666">Nombre</label><input id="fam-edit-nom" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div>' +
        '<div><label style="font-size:11px;color:#666">Apellido</label><input id="fam-edit-ape" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div>' +
      '</div>' +
      '<div style="margin-bottom:12px"><label style="font-size:11px;color:#666">WhatsApp</label><input id="fam-edit-tel" style="margin-top:3px;width:100%;padding:6px;border:1px solid #ccc;border-radius:6px"></div>' +
      '<div style="display:flex;gap:8px">' +
        '<button onclick="window._guardarEditFam()" style="flex:1;padding:9px;background:#1A3A5C;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer">Guardar</button>' +
        '<button onclick="window._cerrarEditFam()" style="flex:1;padding:9px;background:#fff;color:#555;border:1px solid #ccc;border-radius:8px;font-size:14px;cursor:pointer">Cancelar</button>' +
      '</div>' +
      '<div id="fam-edit-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>' +
    '</div>'
  document.body.appendChild(modalEl)

  window._editarInvFam = (idx) => {
    const inv = window._invitadosFamilia[idx]
    if (!inv) return
    window._editIdxFam = idx
    window._editFireIdFam = inv.fireId
    document.getElementById('fam-edit-nom').value = inv.nombre || ''
    document.getElementById('fam-edit-ape').value = inv.apellido || ''
    document.getElementById('fam-edit-tel').value = inv.tel || ''
    document.getElementById('fam-edit-msg').innerHTML = ''
    document.getElementById('modal-edit-fam').style.display = 'flex'
  }

  window._guardarEditFam = async () => {
    const m = document.getElementById('fam-edit-msg')
    const n = document.getElementById('fam-edit-nom').value.trim()
    const a = document.getElementById('fam-edit-ape').value.trim()
    const t = document.getElementById('fam-edit-tel').value.trim()
    if (!n || !a || !t) { m.innerHTML = '<span style="color:#C0392B">Nombre, apellido y WhatsApp son obligatorios.</span>'; return }
    m.innerHTML = '<span style="color:#888">Guardando...</span>'
    try {
      await actualizarInvitado(window._editFireIdFam, { nombre: n, apellido: a, tel: t })
      // Actualizar localmente
      window._invitadosFamilia[window._editIdxFam].nombre = n
      window._invitadosFamilia[window._editIdxFam].apellido = a
      window._invitadosFamilia[window._editIdxFam].tel = t
      m.innerHTML = '<span style="color:#3A7D44">✓ Guardado correctamente</span>'
      setTimeout(() => window._cerrarEditFam(), 1200)
    } catch(e) { m.innerHTML = '<span style="color:#C0392B">Error: ' + e.message + '</span>' }
  }

  window._cerrarEditFam = () => {
    document.getElementById('modal-edit-fam').style.display = 'none'
  }

  window._dlQR = async (idx) => {
    const inv = window._invitadosFamilia[idx]
    if (inv) await descargarQRInvitado(inv)
  }
}
