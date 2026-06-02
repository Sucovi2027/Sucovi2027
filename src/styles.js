// src/styles.js — Paleta SUCOVI 2027 (logo del colegio)
// Principal:   Azul celeste  #5BA4CF
// Texto oscuro: Azul marino  #1A3A5C
// Acento +      Verde        #3A7D44
// Error/alerta  Bordeó       #C0392B
// Fondo         Gris azulado #F0F4F8
// Separador     Dorado       #C9A96E

export function injectStyles() {
  if (document.getElementById('sucovi-styles')) return
  const style = document.createElement('style')
  style.id = 'sucovi-styles'
  style.textContent = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #F0F4F8; color: #1A3A5C; min-height: 100vh;
    }

    /* ── HEADER ── */
    .hdr {
      background: linear-gradient(135deg, #1A3A5C 0%, #2C5F8A 100%);
      color: #fff; padding: 11px 16px;
      display: flex; align-items: center; justify-content: space-between; gap: 8px;
    }
    .hdr h1 { font-size: 15px; font-weight: 600; line-height: 1.2; }
    .hdr .sub { font-size: 11px; opacity: .7; margin-top: 1px; }

    /* Gold accent bar (como el aro del logo) */
    .gold {
      height: 3px;
      background: linear-gradient(90deg, #1A3A5C, #5BA4CF, #3A7D44, #C9A96E, #3A7D44, #5BA4CF, #1A3A5C);
    }

    /* ── NAV ── */
    .nav {
      display: flex; background: #fff;
      border-bottom: 2px solid #E8EFF5;
      overflow-x: auto;
    }
    .nav button {
      padding: 9px 13px; border: none; background: none; cursor: pointer;
      font-size: 12px; color: #5B7A9A; border-bottom: 2px solid transparent;
      white-space: nowrap; font-weight: 500; transition: all .15s;
      margin-bottom: -2px;
    }
    .nav button:hover { color: #1A3A5C; background: #F0F4F8; }
    .nav button.on {
      color: #5BA4CF; border-bottom-color: #5BA4CF; font-weight: 600;
      background: #fff;
    }

    /* ── CARDS & LAYOUT ── */
    .wrap { padding: 14px; max-width: 860px; margin: 0 auto; }
    .card {
      background: #fff;
      border: 1px solid #D6E4F0;
      border-radius: 12px;
      padding: 13px 15px;
      box-shadow: 0 1px 4px rgba(26,58,92,.06);
    }
    .empty { text-align: center; padding: 36px; color: #8AABCC; font-size: 13px; }

    /* ── BADGES ── */
    .badge {
      display: inline-block; padding: 2px 8px;
      border-radius: 6px; font-size: 11px; font-weight: 600;
    }
    .b-pend { background: #FEF3C7; color: #92400E; }        /* pendiente pago */
    .b-pago { background: #D1FAE5; color: #065F46; }        /* pagado / bono ok */
    .b-list { background: #DBEAFE; color: #1E40AF; }        /* listo para retirar */
    .b-entr { background: #E5E7EB; color: #4B5563; }        /* entregado */
    .b-ingr { background: #DBEAFE; color: #1E40AF; }        /* ingresó */
    .b-envi { background: #EDE9FE; color: #5B21B6; }        /* envío */
    .b-inv  { background: #FEE2E2; color: #991B1B; }        /* invalidado */

    /* ── INPUTS ── */
    input, select, textarea {
      background: #fff; color: #1A3A5C;
      border: 1.5px solid #B8D0E8;
      border-radius: 8px; padding: 8px 11px;
      font-size: 14px; width: 100%;
      transition: border-color .15s;
    }
    input:focus, select:focus, textarea:focus {
      outline: none; border-color: #5BA4CF;
      box-shadow: 0 0 0 3px rgba(91,164,207,.15);
    }
    input::placeholder { color: #8AABCC; }

    /* ── BUTTONS ── */
    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 5px;
      padding: 7px 14px; border-radius: 8px; border: 1.5px solid #B8D0E8;
      background: #fff; color: #1A3A5C; cursor: pointer;
      font-size: 12px; font-weight: 600; text-decoration: none;
      white-space: nowrap; transition: all .15s;
    }
    .btn:hover { background: #E8F1F8; border-color: #5BA4CF; }
    .btn:disabled { opacity: .4; cursor: not-allowed; }

    /* Back button en header */
    .hdr .btn-back {
      background: rgba(255,255,255,.15); color: #fff;
      border-color: rgba(255,255,255,.4); font-size: 12px; padding: 5px 11px;
    }
    .hdr .btn-back:hover { background: rgba(255,255,255,.28); border-color: rgba(255,255,255,.7); }

    /* Variantes de color */
    .btn-v  { background: #5BA4CF; color: #fff !important; border-color: #5BA4CF; }
    .btn-v:hover  { background: #4190BB; border-color: #4190BB; }

    .btn-dark { background: #1A3A5C; color: #fff !important; border-color: #1A3A5C; }
    .btn-dark:hover { background: #122840; border-color: #122840; }

    .btn-g  { background: #3A7D44; color: #fff !important; border-color: #3A7D44; }
    .btn-g:hover  { background: #2D6235; border-color: #2D6235; }

    .btn-a  { background: #D97706; color: #fff !important; border-color: #D97706; }
    .btn-a:hover  { background: #B45309; border-color: #B45309; }

    .btn-b  { background: #2563EB; color: #fff !important; border-color: #2563EB; }
    .btn-b:hover  { background: #1D4ED8; border-color: #1D4ED8; }

    .btn-p  { background: #7C3AED; color: #fff !important; border-color: #7C3AED; }
    .btn-p:hover  { background: #6D28D9; border-color: #6D28D9; }

    .btn-red { background: #C0392B; color: #fff !important; border-color: #C0392B; }
    .btn-red:hover { background: #A93226; border-color: #A93226; }

    /* ── SEPARADOR ── */
    .sep { height: 1px; background: #D6E4F0; margin: 10px 0; }

    /* ── ROWS ── */
    .row {
      display: flex; align-items: center; gap: 8px;
      padding: 9px 0; border-bottom: 1px solid #E8EFF5; flex-wrap: wrap;
    }
    .row:last-child { border-bottom: none; }
    .avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg, #5BA4CF, #1A3A5C);
      display: flex; align-items: center; justify-content: center;
      font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0;
    }

    /* ── STATS ── */
    .stats {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 8px; margin-bottom: 14px;
    }
    .stat {
      background: linear-gradient(135deg, #fff, #F0F4F8);
      border: 1px solid #D6E4F0;
      border-radius: 10px; padding: 12px; text-align: center;
      box-shadow: 0 1px 3px rgba(26,58,92,.06);
    }
    .stat .v { font-size: 20px; font-weight: 700; color: #1A3A5C; }
    .stat .l { font-size: 11px; color: #5B7A9A; margin-top: 3px; font-weight: 500; }

    /* ── RESULTADOS ── */
    .result-ok {
      background: #D1FAE5; border: 1.5px solid #3A7D44;
      border-radius: 12px; padding: 16px; text-align: center;
    }
    .result-err {
      background: #FEE2E2; border: 1.5px solid #C0392B;
      border-radius: 12px; padding: 16px; text-align: center;
    }
    .result-warn {
      background: #FEF3C7; border: 1.5px solid #D97706;
      border-radius: 12px; padding: 16px; text-align: center;
    }

    /* ── STAND MENU ── */
    .vino-card {
      background: #fff; border: 1px solid #D6E4F0;
      border-radius: 12px; padding: 13px 14px; margin-bottom: 10px;
      box-shadow: 0 1px 3px rgba(26,58,92,.05);
    }
    .qty-row { display: flex; align-items: center; gap: 6px; margin-top: 8px; }
    .qty-label { font-size: 12px; color: #5B7A9A; flex: 1; }
    .qty-btn {
      width: 28px; height: 28px; border-radius: 50%;
      border: 1.5px solid #B8D0E8; background: #F0F4F8;
      cursor: pointer; font-size: 16px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; color: #1A3A5C; font-weight: 600; transition: all .15s;
    }
    .qty-btn:hover { border-color: #5BA4CF; background: #DBEAFE; color: #1E40AF; }

    /* ── RETIRO ── */
    .retiro-opt { display: flex; gap: 8px; margin-bottom: 12px; }
    .retiro-btn {
      flex: 1; padding: 10px 6px; border: 1.5px solid #B8D0E8;
      border-radius: 10px; background: #fff; cursor: pointer;
      font-size: 12px; text-align: center; color: #5B7A9A;
      transition: all .15s; line-height: 1.5; font-weight: 500;
    }
    .retiro-btn:hover { border-color: #5BA4CF; background: #F0F7FC; }
    .retiro-btn.sel {
      border-color: #1A3A5C; background: #EBF4FA;
      color: #1A3A5C; font-weight: 700;
    }

    /* ── CARRITO FAB ── */
    .cart-fab {
      position: fixed; bottom: 20px; right: 20px; z-index: 50;
      background: linear-gradient(135deg, #1A3A5C, #2C5F8A);
      color: #fff; border: none; border-radius: 50px;
      padding: 12px 20px; font-size: 14px; font-weight: 600; cursor: pointer;
      box-shadow: 0 4px 16px rgba(26,58,92,.35);
      display: flex; align-items: center; gap: 8px;
      transition: transform .15s, box-shadow .15s;
    }
    .cart-fab:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(26,58,92,.45); }

    /* ── QR SCANNER ── */
    .scan-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(26,58,92,.92); z-index: 300;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; gap: 16px;
    }
    .scan-overlay video {
      width: 280px; height: 280px; object-fit: cover; border-radius: 12px;
    }
    .scan-frame { position: relative; }
    .scan-corner {
      position: absolute; width: 28px; height: 28px;
      border-color: #5BA4CF; border-style: solid;
    }
    .scan-corner.tl { top:-3px; left:-3px; border-width:4px 0 0 4px; border-radius:4px 0 0 0; }
    .scan-corner.tr { top:-3px; right:-3px; border-width:4px 4px 0 0; border-radius:0 4px 0 0; }
    .scan-corner.bl { bottom:-3px; left:-3px; border-width:0 0 4px 4px; border-radius:0 0 0 4px; }
    .scan-corner.br { bottom:-3px; right:-3px; border-width:0 4px 4px 0; border-radius:0 0 4px 0; }

    /* ── INFO BOX ── */
    .info-box {
      background: #EBF4FA; border: 1px solid #B8D0E8;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #1A3A5C; line-height: 1.6;
    }
    .warn-box {
      background: #FEF3C7; border: 1px solid #D97706;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #92400E; line-height: 1.6;
    }
    .success-box {
      background: #D1FAE5; border: 1px solid #3A7D44;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #065F46; line-height: 1.6;
    }
    .danger-box {
      background: #FEE2E2; border: 1.5px solid #C0392B;
      border-radius: 8px; padding: 9px 12px;
      font-size: 12px; color: #7F1D1D; line-height: 1.6;
    }

    /* ── MOBILE ── */
    @media (max-width: 480px) {
      .hdr h1 { font-size: 13px; }
      .wrap { padding: 10px; }
      .stats { grid-template-columns: repeat(3, 1fr); }
    }
  `
  document.head.appendChild(style)
}
