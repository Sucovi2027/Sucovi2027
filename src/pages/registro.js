import { buildHeader } from '../header.js'
// src/pages/registro.js — Auto-registro público
import { crearInvitado, escucharInvitados } from '../firebase.js'
import { injectStyles } from '../styles.js'
const genToken  = () => Math.random().toString(36).slice(2,10).toUpperCase()

export function renderRegistro(app) {
  injectStyles()
  let totalInv = 0
  // Necesitamos el contador para generar el código
  const unsub = escucharInvitados(data => { totalInv = data.length; unsub() })

  app.innerHTML = `
    ${buildHeader({ title: '🍷 Sucovi 2027', sub: 'Registro de invitados · Roma 656, Olivos · 20 jun 2026' })}
    <div style="max-width:480px;margin:0 auto;padding:20px 16px">
      <div style="background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;
        padding:12px 14px;font-size:13px;color:#6B4000;margin-bottom:20px">
        Completá tus datos para registrarte. Una vez confirmado el pago del bono ($35.000),
        recibirás tu QR de acceso por WhatsApp.
      </div>
      <div class="card" id="reg-form">
        <p style="font-size:14px;font-weight:500;color:#6B1C1C;margin-bottom:14px">Mis datos</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
          <div>
            <label style="font-size:11px;color:#666">Nombre *</label>
            <input id="rn" placeholder="Juan" style="margin-top:3px">
          </div>
          <div>
            <label style="font-size:11px;color:#666">Apellido *</label>
            <input id="ra" placeholder="Pérez" style="margin-top:3px">
          </div>
        </div>
        <div style="margin-bottom:10px">
          <label style="font-size:11px;color:#666">WhatsApp *</label>
          <input id="rt" placeholder="+54 9 11 XXXX-XXXX" style="margin-top:3px">
        </div>
        <div style="margin-bottom:10px">
          <label style="font-size:11px;color:#666">Email (opcional)</label>
          <input id="re" type="email" placeholder="juan@gmail.com" style="margin-top:3px">
        </div>
        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:#666">Familia SUCOVI (opcional)</label>
          <input id="rf" placeholder="¿A través de qué familia recibiste la invitación?" style="margin-top:3px">
        </div>
        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:#666">Comentarios (opcional)</label>
          <input id="rc" placeholder="Alergias, necesidades especiales..." style="margin-top:3px">
        </div>
        <button class="btn btn-v" style="width:100%;padding:11px;font-size:15px"
          onclick="window._autoRegistrar()">
          Registrarme
        </button>
        <div id="reg-msg" style="margin-top:10px;font-size:13px;text-align:center"></div>
      </div>
      <p style="font-size:11px;color:#aaa;text-align:center;margin-top:16px">
        Consultas: José Pannunzio · +54 9 11 5400-1313
      </p>
    </div>`

  window._autoRegistrar = async () => {
    const n  = document.getElementById('rn').value.trim()
    const a  = document.getElementById('ra').value.trim()
    const t  = document.getElementById('rt').value.trim()
    const e  = document.getElementById('re').value.trim()
    const f  = document.getElementById('rf').value.trim()
    const c  = document.getElementById('rc').value.trim()
    const m  = document.getElementById('reg-msg')
    if (!n || !a || !t) {
      m.innerHTML = '<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>'; return
    }
    m.innerHTML = '<span style="color:#888">Registrando...</span>'
    try {
      const snap = await import('../firebase.js').then(f => f.escucharInvitados)
      const codigo = 'INV-' + String(totalInv + 1).padStart(4,'0')
      await crearInvitado({
        nombre: n, apellido: a, tel: t,
        ...(e && { email: e }),
        ...(f && { familia: f }),
        ...(c && { comentarios: c }),
        estado: 'pendiente', codigo, token: genToken()
      })
      document.getElementById('reg-form').innerHTML = `
        <div style="text-align:center;padding:20px 0">
          <div style="font-size:48px;margin-bottom:12px">✅</div>
          <h2 style="font-size:18px;font-weight:500;color:#3B6D11;margin-bottom:8px">
            ¡Registro exitoso!
          </h2>
          <p style="font-size:14px;color:#555;line-height:1.6">
            Hola <strong>${n}</strong>, quedaste registrado/a.<br>
            El organizador confirmará tu pago y te enviará el QR de acceso por WhatsApp.
          </p>
          <div style="margin-top:16px;background:#f5f0eb;border-radius:8px;
            padding:12px;font-size:13px;color:#666">
            📅 Sáb 20 jun 2026 · 19:30 hs<br>
            📍 Roma 656, Olivos
          </div>
        </div>`
    } catch(err) {
      m.innerHTML = `<span style="color:#A32D2D">Error: ${err.message}</span>`
    }
  }
}
