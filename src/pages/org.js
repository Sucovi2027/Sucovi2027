// src/pages/org.js
import { buildHeader } from '../header.js'
import { BODEGAS } from '../firebase.js'
import { injectStyles } from '../styles.js'

async function drawQR(canvasId, data, size) {
  if (!window.qrcode) {
    await new Promise((res,rej) => {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
      s.onload = res; s.onerror = rej; document.head.appendChild(s)
    })
  }
  const c = document.getElementById(canvasId); if (!c) return
  const qr = window.qrcode(0, 'M')
  qr.addData(data); qr.make()
  const mod = qr.getModuleCount(), cs = size/mod
  c.width = size; c.height = size
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0,0,size,size)
  ctx.fillStyle = '#000'
  for(let r=0;r<mod;r++) for(let col=0;col<mod;col++)
    if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
}

window._imprimirQRStand = async (standId, nombre, region, url) => {
  if (!window.qrcode) {
    await new Promise((res,rej) => {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js'
      s.onload = res; s.onerror = rej; document.head.appendChild(s)
    })
  }
  // Generate QR as data URL
  const qr = window.qrcode(0, 'M')
  qr.addData(url); qr.make()
  const mod = qr.getModuleCount(), sz = 400, cs = sz/mod
  const canvas = document.createElement('canvas')
  canvas.width = sz; canvas.height = sz
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'; ctx.fillRect(0,0,sz,sz)
  ctx.fillStyle = '#000'
  for(let r=0;r<mod;r++) for(let col=0;col<mod;col++)
    if(qr.isDark(r,col)) ctx.fillRect(col*cs,r*cs,cs,cs)
  const qrDataUrl = canvas.toDataURL('image/png')

  const win = window.open('', '_blank')
  win.document.write(`<!DOCTYPE html><html><head>
    <meta charset="utf-8">
    <title>QR Stand #${standId} - ${nombre}</title>
    <style>
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family: system-ui, sans-serif; display:flex; align-items:center;
        justify-content:center; min-height:100vh; background:#fff; }
      .card { border: 3px solid #1A3A5C; border-radius: 16px; padding: 32px;
        text-align: center; max-width: 480px; width: 100%; }
      .evento { font-size: 12px; color: #888; letter-spacing: .1em; margin-bottom: 16px; }
      .stand-num { font-size: 16px; color: #5BA4CF; font-weight: 500; margin-bottom: 4px; }
      .stand-nombre { font-size: 32px; font-weight: 700; color: #1A3A5C; margin-bottom: 4px; }
      .stand-region { font-size: 14px; color: #888; margin-bottom: 24px; }
      .qr-img { width: 320px; height: 320px; margin: 0 auto 20px; display: block; }
      .instruccion { font-size: 14px; color: #444; line-height: 1.5; }
      @media print { body { min-height: auto; } }
    </style>
  </head><body>
    <div class="card">
      <div class="evento">SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN</div>
      <div class="stand-num">Stand #${standId}</div>
      <div class="stand-nombre">${nombre}</div>
      <div class="stand-region">${region}</div>
      <img src="${qrDataUrl}" class="qr-img" alt="QR Stand">
      <div class="instruccion">
        Escaneá este código con tu celular<br>para ver la carta y hacer tu pedido
      </div>
    </div>
    <script>setTimeout(() => { window.print() }, 500)<\/script>
  </body></html>`)
  win.document.close()
}

export function renderOrg(app) {
  injectStyles()
  const base = window.location.origin

  app.innerHTML = buildHeader({
    title: '🍷 SUCOVI 2027',
    sub: 'Panel de organización — Stands',
  }) + `
    <div class="wrap">
      <div style="margin-bottom:12px;padding:10px 14px;background:#FFF8F0;border:.5px solid #C9A96E;border-radius:8px;font-size:12px;color:#6B4000">
        <strong>Vista cliente:</strong> para cargar pedidos de invitados.<br>
        <strong>Panel:</strong> para ver pedidos y marcar entregas con QR.
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:10px">
        ${BODEGAS.filter(b=>!b.oculto).map(b=>`
          <div class="card" style="text-align:center">
            <div style="font-size:11px;color:#aaa;margin-bottom:2px">Stand #${b.id}</div>
            <div style="font-size:13px;font-weight:600;color:#6B1C1C;margin-bottom:2px">${b.nombre}</div>
            <div style="font-size:11px;color:#aaa;margin-bottom:8px">${b.region}</div>
            <canvas id="org-qr-${b.id}" width="110" height="110" style="display:block;margin:0 auto 6px;border-radius:4px"></canvas>
            <div style="display:flex;flex-direction:column;gap:5px">
              <a href="${base}/stand/${b.id}" target="_blank" class="btn btn-v" style="font-size:11px;padding:5px;text-decoration:none">Vista cliente</a>
              <a href="${base}/panel/${b.id}?key=${b.key}" target="_blank" class="btn btn-b" style="font-size:11px;padding:5px;text-decoration:none">Panel stand</a>
              <button class="btn" style="font-size:11px;padding:5px;color:#6B1C1C;border-color:#6B1C1C;width:100%"
                onclick="window._imprimirQRStand(${b.id},'${b.nombre}','${b.region}','${base}/stand/${b.id}')">
                🖨️ Imprimir QR
              </button>
            </div>
          </div>`).join('')}
      </div>
    </div>`

  BODEGAS.forEach(b => setTimeout(() => drawQR('org-qr-'+b.id, base+'/stand/'+b.id, 110), 50))
}
