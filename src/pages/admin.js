// src/pages/admin.js
import { buildHeader } from '../header.js'
import { BODEGAS, escucharInvitados, crearInvitado, actualizarInvitado,
         escucharPedidos, guardarVino, eliminarVino, actualizarVino,
         escucharVinos, limpiarDatosPrueba } from '../firebase.js'
import { injectStyles } from '../styles.js'

// ── QR REAL (qrcode-generator) ────────────────────────────────────────────
async function loadQRLib() {
  if (window.qrcode) return
  await new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
    s.onload = res; s.onerror = rej
    document.head.appendChild(s)
  })
}

async function drawQR(canvasId, data, size) {
  await loadQRLib()
  const c = document.getElementById(canvasId)
  if (!c) return
  try {
    const qr = qrcode(0, 'M')
    qr.addData(String(data))
    qr.make()
    const modules = qr.getModuleCount()
    const cellSize = size / modules
    c.width = size; c.height = size
    const ctx = c.getContext('2d')
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, size, size)
    ctx.fillStyle = '#000'
    for (let row = 0; row < modules; row++) {
      for (let col = 0; col < modules; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize)
        }
      }
    }
  } catch(e) {
    console.error('QR error:', e)
  }
}


const fmt = n => Number(n).toLocaleString('es-AR')
const genToken  = () => Math.random().toString(36).slice(2,10).toUpperCase()
const genCodigo = n  => 'INV-' + String(n).padStart(4,'0')

function eBdg(e) {
  return { pendiente:'<span class="badge b-pend">Pendiente</span>',
           pagado:   '<span class="badge b-pago">Bono pagado</span>',
           ingresado:'<span class="badge b-ingr">Ingresó</span>',
           invalidado:'<span class="badge b-inv">Invalidado</span>' }[e] || ''
}
const SE={pendiente:'pagado',pagado:'listo',listo:'entregado'}
const LE={pendiente:'Pendiente',pagado:'Pagado',listo:'Listo',entregado:'Entregado'}
const BE={pendiente:'b-pend',pagado:'b-pago',listo:'b-list',entregado:'b-entr'}

export function renderAdmin(app) {
  injectStyles()
  let invitados=[], pedidos=[], tabActiva='inv', modalInvFireId=null

  app.innerHTML = buildHeader({
    title: 'Sucovi 2027',
    sub: '20 jun 2026 · 19:30 hs · Roma 656, Olivos',
  }) + `
    <div style="display:flex;gap:5px;padding:8px 12px;background:#1A3A5C;flex-wrap:wrap">
      <a href="/puerta"    class="btn btn-a" style="font-size:11px;padding:5px 9px;text-decoration:none">🚪 Puerta</a>
      <a href="/caja"      class="btn btn-b" style="font-size:11px;padding:5px 9px;text-decoration:none">💰 Caja</a>
      <a href="/logistica" class="btn btn-p" style="font-size:11px;padding:5px 9px;text-decoration:none">🚚 Logística</a>
      <a href="/registro"  class="btn" style="font-size:11px;padding:5px 9px;text-decoration:none;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)">📝 Registro</a>
    </div>` + `
    <div class="nav">
      <button class="on" onclick="window._aTab('inv',this)">👥 Invitados</button>
      <button onclick="window._aTab('reg',this)">➕ Registrar</button>
      <button onclick="window._aTab('excel',this)">📊 Importar Excel</button>
      <button onclick="window._aTab('ped',this)">🛒 Pedidos</button>
      <button onclick="window._aTab('stands',this)">🍷 Stands / QR</button>
      <button onclick="window._aTab('res',this)">📊 Resumen</button>
      <button onclick="window._aTab('config',this)">⚙️ Config</button>
    </div>
    <div id="tab-content" class="wrap"></div>

    <!-- Modal WA -->
    <div id="modal-wa" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;
      background:rgba(0,0,0,.45);z-index:200;align-items:center;justify-content:center;padding:16px">
      <div class="card" style="width:100%;max-width:380px;max-height:90vh;overflow-y:auto">
        <h3 id="mw-tit" style="font-size:14px;font-weight:500;color:#6B1C1C;margin-bottom:12px"></h3>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <canvas id="mw-canvas" width="80" height="80" style="border-radius:6px;flex-shrink:0"></canvas>
          <div style="min-width:0">
            <p id="mw-cod" style="font-size:15px;font-weight:500;color:#6B1C1C;letter-spacing:.08em"></p>
            <p id="mw-bdg" style="margin-top:3px"></p>
            <p id="mw-link" style="font-size:10px;color:#aaa;margin-top:3px;word-break:break-all"></p>
          </div>
        </div>
        <div class="sep"></div>
        <p style="font-size:11px;color:#666;margin-bottom:5px;font-weight:500">MENSAJE WHATSAPP</p>
        <div id="mw-msg" style="background:#f5f0eb;border-radius:8px;padding:9px 11px;
          font-size:12px;color:#555;line-height:1.6;white-space:pre-wrap;
          max-height:160px;overflow-y:auto"></div>
        <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
          <button class="btn btn-g" style="flex:1;font-size:12px" onclick="window._copWA()">📋 Copiar</button>
          <button class="btn btn-a" id="mw-btn-p" style="flex:1;font-size:12px" onclick="window._pagarM()"></button>
        </div>
        <button class="btn" style="width:100%;margin-top:6px;font-size:12px" onclick="window._cModal()">Cerrar</button>
      </div>
    </div>`

  escucharInvitados(data => {
    invitados = data
    if (tabActiva==='inv') renderTabInv()
    if (tabActiva==='res') renderTabRes()
  })
  escucharPedidos(data => {
    pedidos = data
    if (tabActiva==='ped') renderTabPed()
    if (tabActiva==='res') renderTabRes()
  })

  window._aTab = (tab, btn) => {
    tabActiva = tab
    document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('on'))
    btn.classList.add('on')
    const fns={inv:renderTabInv,reg:renderTabReg,excel:renderTabExcel,ped:renderTabPed,
               stands:renderTabStands,res:renderTabRes,config:renderTabConfig}
    fns[tab]?.()
  }

  // ── TAB: Invitados ───────────────────────────────────────────────────
  function renderTabInv() {
    const tc = document.getElementById('tab-content')
    if (!document.getElementById('buscar-inv')) {
      tc.innerHTML = `
        <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
          <input id="buscar-inv" placeholder="Buscar nombre, código o familia..." style="flex:1;min-width:140px" oninput="window._fInv()">
          <select id="fil-est" onchange="window._fInv()" style="width:auto;min-width:120px">
            <option value="">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="pagado">Pagado</option>
            <option value="ingresado">Ingresó</option>
            <option value="invalidado">Invalidados</option>
          </select>
        </div>
        <div class="card" id="lista-inv"></div>`
    }
    window._fInv = () => {
      const q=(document.getElementById('buscar-inv')?.value||'').toLowerCase()
      const ef=document.getElementById('fil-est')?.value||''
      const list=invitados.filter(i=>(i.nombre+' '+i.apellido+' '+(i.codigo||'')+' '+(i.familia||'')).toLowerCase().includes(q)&&(!ef||i.estado===ef))
      const el=document.getElementById('lista-inv'); if(!el) return
      if(!list.length){el.innerHTML='<div class="empty">Sin resultados</div>';return}
      el.innerHTML=list.map(i=>`
        <div class="row" style="${i.estado==='invalidado'?'opacity:.5':''}">
          <div class="avatar">${(i.nombre?.[0]||'?')}${(i.apellido?.[0]||'')}</div>
          <div style="flex:1;min-width:80px">
            <div style="font-size:13px;font-weight:500">${i.nombre} ${i.apellido}</div>
            <div style="font-size:11px;color:#888">${i.tel}${i.familia?' · '+i.familia:''}</div>
          </div>
          <div style="font-size:11px;color:#aaa">${i.codigo||''}</div>
          ${eBdg(i.estado)}
          <div style="display:flex;gap:4px;margin-left:auto;flex-wrap:wrap">
            <button class="btn" style="padding:4px 8px;font-size:11px" onclick="window._abrirWA('${i.fireId}')">📱 WA</button>
            ${i.estado!=='invalidado'
              ?`<button class="btn" style="padding:4px 8px;font-size:11px;color:#A32D2D;border-color:#A32D2D" onclick="window._invalidar('${i.fireId}','${i.nombre} ${i.apellido}')">✕ Invalidar</button>`
              :`<button class="btn" style="padding:4px 8px;font-size:11px;color:#3B6D11;border-color:#3B6D11" onclick="window._reactivar('${i.fireId}')">↩ Reactivar</button>`}
          </div>
        </div>`).join('')
    }
    window._fInv()
  }

  window._invalidar = async (fid,nom)=>{if(!confirm(`¿Invalidar a ${nom}?`))return;await actualizarInvitado(fid,{estado:'invalidado'})}
  window._reactivar = async (fid)=>await actualizarInvitado(fid,{estado:'pendiente'})

  // ── TAB: Registrar ───────────────────────────────────────────────────
  function renderTabReg() {
    document.getElementById('tab-content').innerHTML=`
      <div class="card" style="max-width:480px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:14px">Registrar invitado</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px">
          <div><label style="font-size:11px;color:#666">Nombre *</label><input id="rn" placeholder="Juan" style="margin-top:3px"></div>
          <div><label style="font-size:11px;color:#666">Apellido *</label><input id="ra" placeholder="Pérez" style="margin-top:3px"></div>
        </div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">WhatsApp *</label><input id="rt" placeholder="+54 9 11 XXXX-XXXX" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Email (opcional)</label><input id="re" type="email" placeholder="juan@gmail.com" style="margin-top:3px"></div>
        <div style="margin-bottom:8px"><label style="font-size:11px;color:#666">Familia SUCOVI (opcional)</label><input id="rf" placeholder="Ej: Familia García" style="margin-top:3px"></div>
        <div style="margin-bottom:14px"><label style="font-size:11px;color:#666">Comentarios (opcional)</label><input id="rc" placeholder="Alergias, necesidades..." style="margin-top:3px"></div>
        <div style="margin-bottom:14px">
          <label style="font-size:11px;color:#666">Pago</label>
          <div style="display:flex;gap:16px;margin-top:6px">
            <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="radio" name="rp" value="pendiente" checked style="width:auto"> Paga en puerta</label>
            <label style="display:flex;align-items:center;gap:5px;font-size:12px;cursor:pointer"><input type="radio" name="rp" value="pagado" style="width:auto"> Ya pagó</label>
          </div>
        </div>
        <button class="btn btn-v" style="width:100%;padding:10px" onclick="window._registrar()">Registrar y generar QR</button>
        <div id="reg-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`
  }

  window._registrar = async ()=>{
    const n=document.getElementById('rn').value.trim(),a=document.getElementById('ra').value.trim(),t=document.getElementById('rt').value.trim()
    const p=document.querySelector('input[name="rp"]:checked').value,m=document.getElementById('reg-msg')
    if(!n||!a||!t){m.innerHTML='<span style="color:#A32D2D">Nombre, apellido y WhatsApp son obligatorios.</span>';return}
    m.innerHTML='<span style="color:#888">Guardando...</span>'
    try{
      const codigo=genCodigo(invitados.length+1),token=genToken()
      const ref=await crearInvitado({nombre:n,apellido:a,tel:t,
        email:document.getElementById('re').value.trim()||undefined,
        familia:document.getElementById('rf').value.trim()||undefined,
        comentarios:document.getElementById('rc').value.trim()||undefined,
        estado:p,codigo,token})
      m.innerHTML=`<span style="color:#3B6D11">✓ ${n} ${a} (${codigo})</span>`
      ;['rn','ra','rt','re','rf','rc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''})
      if(p==='pagado') setTimeout(()=>window._abrirWA(ref.id),600)
    }catch(e){m.innerHTML=`<span style="color:#A32D2D">Error: ${e.message}</span>`}
  }

  // ── TAB: Excel ───────────────────────────────────────────────────────
  function renderTabExcel() {
    document.getElementById('tab-content').innerHTML=`
      <div class="card" style="max-width:540px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Importar invitados desde Excel</p>
        <div style="background:#f5f0eb;border-radius:8px;padding:10px 12px;font-size:12px;color:#666;margin-bottom:14px;line-height:1.6">
          El archivo Excel debe tener estas columnas en orden:<br>
          <strong>A: Nombre</strong> · <strong>B: Apellido</strong> · <strong>C: WhatsApp</strong> · 
          D: Email · E: Familia SUCOVI · F: Comentarios · G: Pagado (SI/NO)<br>
          La primera fila puede ser encabezado (se detecta automáticamente).
        </div>
        <input type="file" id="excel-file" accept=".xlsx,.xls,.csv"
          style="margin-bottom:12px" onchange="window._procesarExcel(this)">
        <div id="excel-preview" style="margin-bottom:10px"></div>
        <button class="btn btn-v" id="btn-importar" style="width:100%;padding:9px;display:none"
          onclick="window._importarExcel()">
          Importar invitados
        </button>
        <div id="excel-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`
  }

  let excelData = []
  window._procesarExcel = async (input) => {
    const file = input.files[0]; if (!file) return
    const preview = document.getElementById('excel-preview')
    preview.innerHTML = '<p style="font-size:12px;color:#888">Procesando...</p>'
    try {
      const XLSX = await import('https://cdn.sheetjs.com/xlsx-0.20.0/package/xlsx.mjs')
      const buf  = await file.arrayBuffer()
      const wb   = XLSX.read(buf)
      const ws   = wb.Sheets[wb.SheetNames[0]]
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1 })
      // Detectar si primera fila es encabezado
      const startRow = typeof rows[0][0] === 'string' && rows[0][0].toLowerCase().includes('nombre') ? 1 : 0
      excelData = rows.slice(startRow).filter(r => r[0] && r[1] && r[2]).map(r => ({
        nombre:      String(r[0]||'').trim(),
        apellido:    String(r[1]||'').trim(),
        tel:         String(r[2]||'').trim(),
        email:       r[3] ? String(r[3]).trim() : undefined,
        familia:     r[4] ? String(r[4]).trim() : undefined,
        comentarios: r[5] ? String(r[5]).trim() : undefined,
        estado:      String(r[6]||'').toUpperCase()==='SI' ? 'pagado' : 'pendiente'
      }))
      preview.innerHTML = `
        <p style="font-size:12px;color:#3B6D11;margin-bottom:8px">
          ✓ ${excelData.length} invitados detectados
        </p>
        <div style="max-height:200px;overflow-y:auto;border:.5px solid #e0d5c8;border-radius:8px">
          ${excelData.slice(0,5).map(r=>`
            <div style="padding:6px 10px;border-bottom:.5px solid #f0ebe4;font-size:12px">
              ${r.nombre} ${r.apellido} · ${r.tel} · <span class="badge ${r.estado==='pagado'?'b-pago':'b-pend'}">${r.estado==='pagado'?'Pagado':'Pendiente'}</span>
            </div>`).join('')}
          ${excelData.length>5?`<div style="padding:6px 10px;font-size:11px;color:#aaa">...y ${excelData.length-5} más</div>`:''}
        </div>`
      document.getElementById('btn-importar').style.display = 'block'
    } catch(e) {
      preview.innerHTML = `<p style="color:#A32D2D;font-size:12px">Error al leer el archivo: ${e.message}</p>`
    }
  }

  window._importarExcel = async () => {
    if (!excelData.length) return
    const btn = document.getElementById('btn-importar')
    const msg = document.getElementById('excel-msg')
    btn.disabled = true; btn.textContent = 'Importando...'
    msg.innerHTML = '<span style="color:#888">Procesando...</span>'
    let ok = 0, err = 0
    const base = invitados.length
    for (let i = 0; i < excelData.length; i++) {
      try {
        const d = excelData[i]
        await crearInvitado({ ...d, codigo: genCodigo(base+i+1), token: genToken() })
        ok++
      } catch(e) { err++ }
    }
    msg.innerHTML = `<span style="color:#3B6D11">✓ ${ok} invitados importados${err?` (${err} errores)`:''}</span>`
    btn.style.display = 'none'; excelData = []
  }

  // ── TAB: Pedidos ─────────────────────────────────────────────────────
  function renderTabPed() {
    const tc=document.getElementById('tab-content')
    if(!pedidos.length){tc.innerHTML='<div class="empty">Sin pedidos aún 🍷</div>';return}
    tc.innerHTML=pedidos.map(p=>`
      <div class="card" style="margin-bottom:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span style="font-size:13px;font-weight:500;color:#6B1C1C;min-width:52px">#${p.fireId?.slice(-4).toUpperCase()}</span>
        <div style="flex:1;min-width:90px">
          <div style="font-size:12px;font-weight:500">${p.invNombre||''}</div>
          <div style="font-size:11px;color:#888">${p.standNombre}${p.retiro==='envio'?' · <span style="color:#5A1E99">Envío</span>':''}</div>
        </div>
        <span style="font-size:12px;color:#666;flex:2;min-width:100px">${(p.items||[]).map(i=>i.desc).join(' · ')}</span>
        <span style="font-size:14px;font-weight:500">$${fmt(p.total||0)}</span>
        <span class="badge ${BE[p.estado]}">${LE[p.estado]}</span>
      </div>`).join('')
  }

  // ── TAB: Stands y QR ────────────────────────────────────────────────
  function renderTabStands() {
    const base=window.location.origin
    document.getElementById('tab-content').innerHTML=`
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>QR de pedidos:</strong> se imprime en el stand — los clientes lo escanean con su QR de acceso.<br>
        <strong>Panel stand:</strong> para el personal de la bodega (ver pedidos + marcar entregas).<br>
        <strong>Carga vinos:</strong> para que cada bodega cargue su carta directamente.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${BODEGAS.map(b=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${b.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${b.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${b.region}</div>
            <canvas id="qr-s${b.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="font-size:10px;color:#aaa;margin-bottom:8px;word-break:break-all">${base}/stand/${b.id}</div>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${base}/stand/${b.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <a href="${base}/panel/${b.id}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none">Panel stand</a>
              <a href="${base}/bodega/${b.id}/vinos" target="_blank" class="btn" style="font-size:11px;padding:5px;text-decoration:none;color:#3B6D11;border-color:#3B6D11">Cargar vinos</a>
              <div style="font-size:10px;color:#aaa">Pass: <strong>${b.pass}</strong></div>
            </div>
          </div>`).join('')}
      </div>`
    BODEGAS.forEach(b=>setTimeout(()=>drawQR('qr-s'+b.id,`${base}/stand/${b.id}`,110),50))
  }

  // ── TAB: Resumen ─────────────────────────────────────────────────────
  function renderTabRes() {
    const ipag=invitados.filter(i=>i.estado==='pagado').length
    const iing=invitados.filter(i=>i.estado==='ingresado').length
    const rec=(ipag+iing)*35000
    const vtas=pedidos.reduce((s,p)=>s+(p.total||0),0)
    const byS={}
    pedidos.forEach(p=>{if(!byS[p.standId])byS[p.standId]={n:p.standNombre,t:0,c:0};byS[p.standId].t+=p.total||0;byS[p.standId].c++})
    const sorted=Object.values(byS).sort((a,b)=>b.t-a.t)
    document.getElementById('tab-content').innerHTML=`
      <div class="stats">
        ${[[invitados.filter(i=>i.estado!=='invalidado').length,'Invitados'],[ipag+iing,'Con bono'],
           ['$'+fmt(rec),'Bonos'],[pedidos.length,'Pedidos'],['$'+fmt(vtas),'Ventas'],
           [pedidos.filter(p=>p.retiro==='envio').length,'Envíos']]
          .map(([v,l])=>`<div class="stat"><div class="v" style="font-size:${String(v).length>7?'13px':'20px'}">${v}</div><div class="l">${l}</div></div>`).join('')}
      </div>
      <div class="card">
        <p style="font-size:12px;font-weight:500;color:#6B1C1C;margin-bottom:8px">Ventas por bodega</p>
        ${sorted.length?sorted.map(r=>`
          <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span style="font-weight:500">${r.n}</span><span style="color:#888">${r.c} ped.</span><span style="font-weight:500">$${fmt(r.t)}</span>
          </div>`).join(''):'<div class="empty">Sin ventas aún</div>'}
      </div>`
  }

  // ── TAB: Config ──────────────────────────────────────────────────────
  function renderTabConfig() {
    document.getElementById('tab-content').innerHTML=`
      <div class="card" style="max-width:480px;margin-bottom:14px">
        <p style="font-size:13px;font-weight:500;color:#6B1C1C;margin-bottom:8px">🔗 Links útiles</p>
        ${[
          ['Registro público (para compartir con invitados)', '/registro'],
          ['Panel de caja', '/caja'],
          ['Control de puerta', '/puerta'],
          ['Logística / envíos', '/logistica'],
        ].map(([lbl,url])=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:.5px solid #e0d5c8;font-size:12px">
            <span>${lbl}</span>
            <a href="${url}" target="_blank" class="btn" style="padding:3px 8px;font-size:11px;color:#6B1C1C;border-color:#6B1C1C">Abrir</a>
          </div>`).join('')}
      </div>
      <div class="card" style="max-width:480px;border:1.5px solid #A32D2D">
        <p style="font-size:13px;font-weight:500;color:#A32D2D;margin-bottom:8px">⚠️ Zona peligrosa</p>
        <p style="font-size:12px;color:#666;margin-bottom:12px;line-height:1.6">
          Borra <strong>todos los invitados y pedidos</strong> de la base de datos.<br>
          Los vinos de las bodegas NO se borran.<br>
          Usar solo antes del evento real para limpiar datos de prueba.
        </p>
        <button class="btn btn-red" style="width:100%;padding:10px" onclick="window._limpiar()">
          🗑 Limpiar todos los datos de prueba
        </button>
        <div id="limpiar-msg" style="margin-top:8px;font-size:12px;text-align:center"></div>
      </div>`
  }

  window._limpiar = async () => {
    if (!confirm('⚠️ ¿Seguro? Esto borra TODOS los invitados y pedidos.\nEsta acción no se puede deshacer.')) return
    if (!confirm('Segunda confirmación: ¿borrar todos los datos de prueba?')) return
    const m = document.getElementById('limpiar-msg')
    m.innerHTML = '<span style="color:#888">Borrando...</span>'
    try {
      await limpiarDatosPrueba()
      m.innerHTML = '<span style="color:#3B6D11">✓ Datos borrados correctamente</span>'
    } catch(e) { m.innerHTML = `<span style="color:#A32D2D">Error: ${e.message}</span>` }
  }

  // ── MODAL WA ──────────────────────────────────────────────────────────
  window._abrirWA = (fireId) => {
    const inv=invitados.find(i=>i.fireId===fireId); if(!inv) return
    modalInvFireId=fireId
    document.getElementById('mw-tit').textContent=inv.nombre+' '+inv.apellido
    document.getElementById('mw-cod').textContent=inv.codigo||''
    document.getElementById('mw-bdg').innerHTML=eBdg(inv.estado)
    const base=window.location.origin, link=`${base}/acceso?inv=${inv.token}`
    document.getElementById('mw-link').textContent=link
    const waMsg=inv.estado==='pagado'
      ?`Hola ${inv.nombre}! 🍷\n\nTe confirmo tu acreditación para *SUCOVI 2027*.\n\n📅 Sáb 20 jun 2026 · 19:30 hs\n📍 Roma 656, Olivos\n\n✅ *Bono confirmado* ($35.000)\nIncluye degustaciones + copa + empanada.\n\nTu QR personal:\n👉 ${link}\n\n_Personal e intransferible. Un solo uso en la entrada._`
      :`Hola ${inv.nombre}! 🍷\n\nQuedaste registrado/a en *SUCOVI 2027*.\n\n📅 Sáb 20 jun 2026 · 19:30 hs\n📍 Roma 656, Olivos\n\n⏳ Bono pendiente de pago ($35.000)\nPodés abonar en la puerta.\n\nConsultas: José Pannunzio +54 9 11 5400-1313`
    document.getElementById('mw-msg').textContent=waMsg
    const bp=document.getElementById('mw-btn-p')
    if(inv.estado==='pendiente'){bp.textContent='✓ Marcar como pagado';bp.disabled=false;bp.style.display='block'}
    else{bp.style.display='none'}
    drawQR('mw-canvas',inv.codigo||inv.fireId,80)
    document.getElementById('modal-wa').style.display='flex'
  }
  window._pagarM=async()=>{const inv=invitados.find(i=>i.fireId===modalInvFireId);if(!inv||inv.estado!=='pendiente')return;await actualizarInvitado(inv.fireId,{estado:'pagado'})}
  window._copWA=()=>{navigator.clipboard?.writeText(document.getElementById('mw-msg').textContent).catch(()=>{});const b=document.querySelector('#modal-wa .btn-g');const o=b.innerHTML;b.innerHTML='✓ ¡Copiado!';setTimeout(()=>b.innerHTML=o,2000)}
  window._cModal=()=>{document.getElementById('modal-wa').style.display='none';modalInvFireId=null}

  renderTabInv()
}
