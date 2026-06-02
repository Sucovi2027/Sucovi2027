import { buildHeader } from '../header.js'
// src/pages/bodegaVinos.js — Link propio de cada bodega para cargar vinos
import { escucharVinos, guardarVino, actualizarVino, eliminarVino } from '../firebase.js'
import { injectStyles } from '../styles.js'
const fmt = n => Number(n).toLocaleString('es-AR')

export function renderBodegaVinos(app, bodega) {
  injectStyles()
  const sesion = sessionStorage.getItem('bodega-auth-' + bodega.id)

  if (!sesion) {
    app.innerHTML = `
      ${buildHeader({ title: '🍷 ' + bodega.nombre, sub: 'Carga de carta de vinos' })}
      <div style="max-width:320px;margin:60px auto;padding:0 16px;text-align:center">
        <div style="font-size:40px;margin-bottom:12px">🔐</div>
        <p style="font-size:14px;color:#666;margin-bottom:16px">
          Ingresá la contraseña del stand para cargar los vinos
        </p>
        <input id="bp" type="password" placeholder="Contraseña"
          style="text-align:center;font-size:16px;margin-bottom:10px"
          onkeydown="if(event.key==='Enter') window._loginBodega()">
        <button class="btn btn-v" style="width:100%;padding:10px"
          onclick="window._loginBodega()">Ingresar</button>
        <div id="bp-err" style="margin-top:8px;font-size:12px;color:#A32D2D"></div>
      </div>`
    window._loginBodega = () => {
      const v = document.getElementById('bp').value.trim()
      if (v === bodega.pass) { sessionStorage.setItem('bodega-auth-'+bodega.id,'1'); renderBodegaVinos(app, bodega) }
      else document.getElementById('bp-err').textContent = 'Contraseña incorrecta'
    }
    return
  }

  let vinos = [], editandoId = null
  app.innerHTML = `
    ${buildHeader({
    title: '🍷 ' + bodega.nombre,
    sub: 'Carga de carta · Stand #' + bodega.id,
    actions: [`<button class="btn-back btn" onclick="sessionStorage.removeItem('bodega-auth-${bodega.id}');location.reload()">Salir</button>`]
  })}
    <div style="max-width:600px;margin:0 auto;padding:14px">
      <div class="card" style="margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:12px"
          id="form-titulo">Agregar vino</p>
        ${[['vn','Nombre del vino *','text','Ej: Gran Malbec 2022'],
           ['vv','Varietal / Blend','text','Ej: Malbec'],
           ['vc','Cosecha','number','2022'],
           ['vd','Descripción corta','text','Tinto con notas de...'],
           ['vb','Precio botella ($)','number',''],
           ['v6','Precio caja x6 ($)','number',''],
           ['v12','Precio caja x12 ($)','number',''],
          ].map(([id,lbl,type,ph]) => `
          <div style="margin-bottom:8px">
            <label style="font-size:11px;color:#666">${lbl}</label>
            <input id="${id}" type="${type}" placeholder="${ph}" style="margin-top:3px">
          </div>`).join('')}
        <div style="display:flex;gap:8px;margin-top:4px">
          <button class="btn btn-v" style="flex:1;padding:9px" onclick="window._guardarV()">
            Guardar
          </button>
          <button class="btn" id="btn-cancelar-edit" style="display:none"
            onclick="window._cancelarEdit()">Cancelar</button>
        </div>
        <div id="vm" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>

      <div class="card">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:10px">
          Vinos cargados
        </p>
        <div id="vl"><div class="empty">Sin vinos aún</div></div>
      </div>
    </div>`

  escucharVinos(bodega.id, data => {
    vinos = data
    const el = document.getElementById('vl'); if (!el) return
    if (!vinos.length) { el.innerHTML = '<div class="empty">Sin vinos cargados todavía</div>'; return }
    el.innerHTML = vinos.map(v => `
      <div style="padding:10px 0;border-bottom:.5px solid #e0d5c8">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div style="flex:1">
            <div style="font-size:14px;font-weight:500">${v.nombre}</div>
            <div style="font-size:11px;color:#888;margin-top:2px">
              ${v.varietal||''}${v.cosecha?' · '+v.cosecha:''}
            </div>
            ${v.descripcion?`<div style="font-size:12px;color:#666;margin-top:2px">${v.descripcion}</div>`:''}
            <div style="margin-top:4px;display:flex;gap:8px;flex-wrap:wrap">
              ${(v.unidades||[]).map(u=>
                `<span style="font-size:12px;background:#f5f0eb;padding:2px 8px;
                  border-radius:6px;color:#6B1C1C">
                  ${u.u}: $${fmt(u.p)}
                </span>`).join('')}
            </div>
          </div>
          <div style="display:flex;gap:5px;margin-left:8px">
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#185FA5;border-color:#185FA5"
              onclick="window._editarV('${v.fireId}')">✏ Editar</button>
            <button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D"
              onclick="window._eliminarV('${v.fireId}')">✕</button>
          </div>
        </div>
      </div>`).join('')
  })

  const campos = ['vn','vv','vc','vd','vb','v6','v12']
  const limpiar = () => { campos.forEach(id => { const el=document.getElementById(id); if(el) el.value='' }) }

  window._guardarV = async () => {
    const nombre = document.getElementById('vn').value.trim()
    const m = document.getElementById('vm')
    if (!nombre) { m.innerHTML='<span style="color:#A32D2D">El nombre es requerido.</span>'; return }
    const bot = parseFloat(document.getElementById('vb').value)
    const c6  = parseFloat(document.getElementById('v6').value)
    const c12 = parseFloat(document.getElementById('v12').value)
    const unidades = []
    if (bot) unidades.push({ u:'Botella',  p:bot })
    if (c6)  unidades.push({ u:'Caja x6',  p:c6  })
    if (c12) unidades.push({ u:'Caja x12', p:c12 })
    if (!unidades.length) { m.innerHTML='<span style="color:#A32D2D">Ingresá al menos un precio.</span>'; return }
    const data = { nombre, varietal:document.getElementById('vv').value.trim(),
      cosecha:document.getElementById('vc').value.trim(),
      descripcion:document.getElementById('vd').value.trim(), unidades }
    m.innerHTML='<span style="color:#888">Guardando...</span>'
    try {
      if (editandoId) { await actualizarVino(bodega.id, editandoId, data); editandoId=null }
      else { await guardarVino(bodega.id, data) }
      limpiar()
      document.getElementById('form-titulo').textContent='Agregar vino'
      document.getElementById('btn-cancelar-edit').style.display='none'
      m.innerHTML='<span style="color:#3B6D11">✓ Guardado correctamente</span>'
      setTimeout(()=>{ const el=document.getElementById('vm'); if(el) el.innerHTML='' },3000)
    } catch(e) { m.innerHTML=`<span style="color:#A32D2D">Error: ${e.message}</span>` }
  }

  window._editarV = (fireId) => {
    const v = vinos.find(x => x.fireId === fireId); if (!v) return
    editandoId = fireId
    document.getElementById('form-titulo').textContent = `Editando: ${v.nombre}`
    document.getElementById('vn').value = v.nombre || ''
    document.getElementById('vv').value = v.varietal || ''
    document.getElementById('vc').value = v.cosecha || ''
    document.getElementById('vd').value = v.descripcion || ''
    const bot = (v.unidades||[]).find(u=>u.u==='Botella')
    const c6  = (v.unidades||[]).find(u=>u.u==='Caja x6')
    const c12 = (v.unidades||[]).find(u=>u.u==='Caja x12')
    document.getElementById('vb').value = bot?.p || ''
    document.getElementById('v6').value = c6?.p  || ''
    document.getElementById('v12').value= c12?.p  || ''
    document.getElementById('btn-cancelar-edit').style.display='block'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window._cancelarEdit = () => {
    editandoId = null; limpiar()
    document.getElementById('form-titulo').textContent='Agregar vino'
    document.getElementById('btn-cancelar-edit').style.display='none'
  }

  window._eliminarV = async (fireId) => {
    const v = vinos.find(x => x.fireId === fireId)
    if (!confirm(`¿Eliminar "${v?.nombre}"?`)) return
    await eliminarVino(bodega.id, fireId)
  }
}
