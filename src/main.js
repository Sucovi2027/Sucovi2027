// src/main.js
import { BODEGAS, buscarInvitadoPorToken } from './firebase.js'
import { renderAdmin }      from './pages/admin.js'
import { renderCaja }       from './pages/caja.js'
import { renderStand }      from './pages/stand.js'
import { renderStandPanel } from './pages/standPanel.js'
import { renderBodegaVinos} from './pages/bodegaVinos.js'
import { renderPuerta }     from './pages/puerta.js'
import { renderLogistica }  from './pages/logistica.js'
import { renderAcceso }     from './pages/acceso.js'
import { renderRegistro }   from './pages/registro.js'
import { renderCarrito }    from './pages/carrito.js'

async function route() {
  const base = '/Sucovi2027'
  const path   = window.location.pathname.replace(base, '') || '/'
  const params = new URLSearchParams(window.location.search)
  const app    = document.getElementById('app')

  // /stand/:id?inv=TOKEN
  const standMatch = path.match(/^\/stand\/(\d+)$/)
  if (standMatch) {
    const bodegaId = parseInt(standMatch[1])
    const bodega   = BODEGAS.find(b => b.id === bodegaId)
    if (!bodega) { app.innerHTML = err('Stand no encontrado'); return }
    const token = params.get('inv')
    const invitado = token ? await buscarInvitadoPorToken(token) : null
    return renderStand(app, bodega, invitado)
  }

  // /panel/:id?key=XXXX — panel del stand (requiere key)
  const panelMatch = path.match(/^\/panel\/(\d+)$/)
  if (panelMatch) {
    const bodega = BODEGAS.find(b => b.id === parseInt(panelMatch[1]))
    if (!bodega) { app.innerHTML = err('Panel no encontrado'); return }
    const key = params.get('key')
    if (key && key !== bodega.key) { app.innerHTML = err('Acceso no autorizado'); return }
    if (!key) {
      // No key: show key required screen
      app.innerHTML = err('Link inválido — usá el link completo que te enviaron')
      return
    }
    return renderStandPanel(app, bodega)
  }

  // /bodega/:id/vinos?key=XXXX — carga de vinos por bodega
  const vinosMatch = path.match(/^\/bodega\/(\d+)\/vinos$/)
  if (vinosMatch) {
    const bodega = BODEGAS.find(b => b.id === parseInt(vinosMatch[1]))
    if (!bodega) { app.innerHTML = err('Bodega no encontrada'); return }
    const key = params.get('key')
    if (key && key !== bodega.key) { app.innerHTML = err('Acceso no autorizado'); return }
    return renderBodegaVinos(app, bodega)
  }

  // /carrito?inv=TOKEN
  if (path === '/carrito') {
    const token = params.get('inv')
    const invitado = token ? await buscarInvitadoPorToken(token) : null
    return renderCarrito(app, invitado)
  }

  // /acceso?inv=TOKEN
  if (path === '/acceso') return renderAcceso(app, params.get('inv'))

  // /registro — auto-registro público
  if (path === '/registro') return renderRegistro(app)

  if (path === '/caja')      return renderCaja(app)
  if (path === '/puerta')    return renderPuerta(app)
  if (path === '/logistica') return renderLogistica(app)

  return renderAdmin(app)
}

function err(msg) {
  return `<div style="padding:60px;text-align:center;color:#aaa;font-size:14px">${msg}</div>`
}

route()
window.addEventListener('popstate', route)

// GitHub Pages SPA redirect handler
;(function() {
  var p = window.location.search.match(/[?&]p=([^&]+)/)
  if (p) {
    var base = '/Sucovi2027'
    var path = decodeURIComponent(p[1].replace(/~and~/g, '&'))
    window.history.replaceState(null, null, base + '/' + path)
  }
})()
