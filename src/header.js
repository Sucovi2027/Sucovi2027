// src/header.js — Header con logo Sucovi para todas las pantallas
import { LOGO } from './logo.js'

/**
 * buildHeader({ title, sub, backHref, backLabel, actions })
 * actions: array de strings HTML de botones/links
 */
export function buildHeader({ title, sub = '', backHref = '', backLabel = '← Panel', backStyle = '', actions = [] } = {}) {
  return `
    <div class="hdr">
      <div style="display:flex;align-items:center;gap:8px;min-width:0;flex:1">
        <img src="${LOGO}" alt="Sucovi 2027"
          style="width:34px;height:34px;border-radius:50%;
                 background:#fff;padding:2px;flex-shrink:0;
                 box-shadow:0 2px 6px rgba(0,0,0,.2)">
        <div style="min-width:0;overflow:hidden">
          <h1 style="font-size:13px;font-weight:700;line-height:1.2;
                     white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            ${title}
          </h1>
          ${sub ? `<div class="sub" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:10px">${sub}</div>` : ''}
        </div>
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0;flex-wrap:nowrap;align-items:center">
        ${actions.join('')}
        ${backHref ? `<a href="${backHref}" class="btn-back btn" style="font-size:11px;padding:5px 8px;white-space:nowrap;${backStyle}">${backLabel}</a>` : ''}
      </div>
    </div>
    <div class="gold"></div>`
}

/**
 * buildInvHeader(invitado) — Header especial para pantallas del invitado
 * Logo más grande, nombre del invitado destacado
 */
export function buildInvHeader(invitado) {
  return `
    <div style="background:linear-gradient(160deg,#1A3A5C 0%,#2C5F8A 60%,#3A7D44 100%);
                color:#fff;padding:20px 16px 16px;text-align:center">
      <img src="${LOGO}" alt="Sucovi 2027"
        style="width:72px;height:72px;border-radius:50%;background:#fff;
               padding:3px;box-shadow:0 4px 16px rgba(0,0,0,.25);
               margin-bottom:10px;display:block;margin-left:auto;margin-right:auto">
      <div style="font-size:11px;letter-spacing:.12em;opacity:.75;margin-bottom:4px">
        SUCOVI 2027 · FERIA DE VINOS & DEGUSTACIÓN
      </div>
      ${invitado ? `
        <div style="font-size:20px;font-weight:700;margin-bottom:3px">
          ${invitado.nombre} ${invitado.apellido}
        </div>
        <div style="font-size:12px;opacity:.75">${invitado.codigo || ''}</div>
      ` : `
        <div style="font-size:18px;font-weight:700">Feria de Vinos 2027</div>
        <div style="font-size:12px;opacity:.75">20 jun 2026 · Roma 656, Olivos · 19:30 hs</div>
      `}
    </div>
    <div class="gold"></div>`
}
