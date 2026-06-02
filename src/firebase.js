// src/firebase.js
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, addDoc, onSnapshot, doc,
  updateDoc, query, orderBy, serverTimestamp, getDocs,
  deleteDoc, setDoc, getDoc, writeBatch
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey:            "AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",
  authDomain:        "feria-vinos-sucovi-2027.firebaseapp.com",
  databaseURL:       "https://feria-vinos-sucovi-2027-default-rtdb.firebaseio.com",
  projectId:         "feria-vinos-sucovi-2027",
  storageBucket:     "feria-vinos-sucovi-2027.firebasestorage.app",
  messagingSenderId: "1686119758",
  appId:             "1:1686119758:web:2c3c6d96e36f1276052a1f",
  measurementId:     "G-VRMTQ3SS7E"
}

const app = initializeApp(firebaseConfig)
const db  = getFirestore(app)

// ── BODEGAS ───────────────────────────────────────────────────────────────────
export const BODEGAS = [
  { id: 0, key: '368813',  nombre: "Sucovi",               region: "Pruebas / Bebidas", pass: "stand00" },
  { id: 1, key: 'd48429',  nombre: "Alta Vista",           region: "Mendoza",           pass: "stand01" },
  { id: 2, key: 'ba356c',  nombre: "Andillian",            region: "Mendoza",           pass: "stand02" },
  { id: 3, key: '451e62',  nombre: "Ante Nada",            region: "Mendoza",           pass: "stand03" },
  { id: 4, key: '835c2d',  nombre: "Bodega Benegas",       region: "Mendoza",           pass: "stand04" },
  { id: 5, key: 'e45a28',  nombre: "Bianchi",              region: "San Rafael",        pass: "stand05" },
  { id: 6, key: '12ac1c',  nombre: "Catena Zapata",        region: "Luján de Cuyo",     pass: "stand06" },
  { id: 7, key: '18abc3',  nombre: "Bodegas Bórbore",      region: "Mendoza (1936)",    pass: "stand07" },
  { id: 8, key: '452b71',  nombre: "Fábula Wines",         region: "Mendoza",           pass: "stand08" },
  { id: 9, key: '0c55a5',  nombre: "Finca Iral",           region: "Mendoza",           pass: "stand09" },
  { id: 10, key: '5cb108', nombre: "Giménez Riili",        region: "Mendoza",           pass: "stand10" },
  { id: 11, key: '27f372', nombre: "Jorge Rubio",          region: "Mendoza",           pass: "stand11" },
  { id: 12, key: 'a9d27f', nombre: "La Coste de los Andes",region: "Mendoza",           pass: "stand12" },
  { id: 13, key: 'b5be6e', nombre: "Las Perdices",         region: "Mendoza",           pass: "stand13" },
  { id: 14, key: '7da93b', nombre: "Lorenzo de Agrelo",    region: "Mendoza",           pass: "stand14" },
  { id: 15, key: 'f52ab4', nombre: "Pannunzio Wines",      region: "Mendoza",           pass: "stand15" },
  { id: 16, key: 'a32dd6', nombre: "Bodega Patritti",      region: "Mendoza",           pass: "stand16" },
  { id: 17, key: '175358', nombre: "Rosell Boher",         region: "Mendoza",           pass: "stand17" },
  { id: 18, key: '4a2b00', nombre: "Valle de la Puerta",   region: "La Rioja",          pass: "stand18" },
  // Reservas:
  // { id: 19, nombre: "Bodega XIX", region: "...", pass: "stand19" },
  // { id: 20, nombre: "Bodega XX",  region: "...", pass: "stand20" },
]

// ── INVITADOS ─────────────────────────────────────────────────────────────────
export async function crearInvitado(inv) {
  return await addDoc(collection(db, 'invitados'), { ...inv, creadoEn: serverTimestamp() })
}
export async function actualizarInvitado(fireId, data) {
  await updateDoc(doc(db, 'invitados', fireId), data)
}
export function escucharInvitados(callback) {
  return onSnapshot(
    query(collection(db, 'invitados'), orderBy('creadoEn', 'desc')),
    snap => callback(snap.docs.map(d => ({ fireId: d.id, ...d.data() })))
  )
}
export async function buscarInvitadoPorToken(token) {
  const snap = await getDocs(collection(db, 'invitados'))
  const found = snap.docs.find(d => d.data().token === token)
  return found ? { fireId: found.id, ...found.data() } : null
}
export async function buscarInvitadoPorCodigo(codigo) {
  const snap = await getDocs(collection(db, 'invitados'))
  const found = snap.docs.find(d => d.data().codigo === codigo)
  return found ? { fireId: found.id, ...found.data() } : null
}

// ── CARRITO (persiste en Firebase por invitado) ───────────────────────────────
// Estructura: carritos/{invFireId}/items/{standId} = { standId, standNombre, items[], retiro }
export async function agregarAlCarrito(invFireId, standId, standNombre, item, retiro) {
  const ref  = doc(db, 'carritos', invFireId, 'items', String(standId))
  const snap = await getDoc(ref)
  if (snap.exists()) {
    const data = snap.data()
    const items = data.items || []
    const idx = items.findIndex(i => i.key === item.key)
    if (idx >= 0) { items[idx] = item } else { items.push(item) }
    await setDoc(ref, { standId, standNombre, items, retiro: retiro || data.retiro || 'stand' })
  } else {
    await setDoc(ref, { standId, standNombre, items: [item], retiro: retiro || 'stand' })
  }
}
export async function actualizarRetiroStand(invFireId, standId, retiro) {
  await updateDoc(doc(db, 'carritos', invFireId, 'items', String(standId)), { retiro })
}
export async function eliminarItemCarrito(invFireId, standId, itemKey) {
  const ref  = doc(db, 'carritos', invFireId, 'items', String(standId))
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const items = (snap.data().items || []).filter(i => i.key !== itemKey)
  if (!items.length) { await deleteDoc(ref) }
  else { await updateDoc(ref, { items }) }
}
export async function leerCarrito(invFireId) {
  const snap = await getDocs(collection(db, 'carritos', invFireId, 'items'))
  return snap.docs.map(d => ({ standId: d.id, ...d.data() }))
}
export function escucharCarrito(invFireId, callback) {
  return onSnapshot(collection(db, 'carritos', invFireId, 'items'),
    snap => callback(snap.docs.map(d => ({ standDocId: d.id, ...d.data() })))
  )
}
export async function vaciarCarrito(invFireId) {
  const snap = await getDocs(collection(db, 'carritos', invFireId, 'items'))
  const batch = writeBatch(db)
  snap.docs.forEach(d => batch.delete(d.ref))
  await batch.commit()
}

// ── PEDIDOS ───────────────────────────────────────────────────────────────────
export async function crearPedidosDesdeCarrito(invitado, carritoItems) {
  // Crea un pedido por stand al momento del cobro en caja
  const batch = writeBatch(db)
  const refs  = []
  carritoItems.forEach(item => {
    const ref = doc(collection(db, 'pedidos'))
    refs.push(ref)
    batch.set(ref, {
      invFireId:   invitado.fireId,
      invNombre:   invitado.nombre + ' ' + invitado.apellido,
      invCodigo:   invitado.codigo,
      standId:     item.standId,
      standNombre: item.standNombre,
      items:       item.items || [],
      total:       (item.items || []).reduce((s, i) => s + (i.sub || 0), 0),
      retiro:      item.retiro || 'stand',
      estado:      'pagado',
      creadoEn:    serverTimestamp()
    })
  })
  await batch.commit()
  return refs.map(r => r.id)
}
export function escucharPedidos(callback) {
  return onSnapshot(
    query(collection(db, 'pedidos'), orderBy('creadoEn', 'desc')),
    snap => callback(snap.docs.map(d => ({ fireId: d.id, ...d.data() })))
  )
}
export function escucharPedidosPorStand(standId, callback) {
  return onSnapshot(
    query(collection(db, 'pedidos'), orderBy('creadoEn', 'desc')),
    snap => callback(
      snap.docs
        .map(d => ({ fireId: d.id, ...d.data() }))
        .filter(p => Number(p.standId) === Number(standId))
    )
  )
}
export function escucharPedidosPorInvitado(invFireId, callback) {
  return onSnapshot(
    query(collection(db, 'pedidos'), orderBy('creadoEn', 'desc')),
    snap => callback(
      snap.docs
        .map(d => ({ fireId: d.id, ...d.data() }))
        .filter(p => p.invFireId === invFireId)
    )
  )
}
export async function marcarEntregado(fireId) {
  await updateDoc(doc(db, 'pedidos', fireId), { estado: 'entregado' })
}

export async function avanzarEstado(fireId, estadoActual) {
  const sig = { pendiente: 'pagado', pagado: 'listo', listo: 'entregado' }
  if (!sig[estadoActual]) return
  await updateDoc(doc(db, 'pedidos', fireId), { estado: sig[estadoActual] })
}

// ── VINOS ─────────────────────────────────────────────────────────────────────
export function escucharVinos(bodegaId, callback) {
  return onSnapshot(
    collection(db, 'bodegas', String(bodegaId), 'vinos'),
    snap => callback(snap.docs.map(d => ({ fireId: d.id, ...d.data() })))
  )
}
export async function guardarVino(bodegaId, vino) {
  return await addDoc(collection(db, 'bodegas', String(bodegaId), 'vinos'), vino)
}
export async function actualizarVino(bodegaId, vinoFireId, data) {
  await updateDoc(doc(db, 'bodegas', String(bodegaId), 'vinos', vinoFireId), data)
}
export async function eliminarVino(bodegaId, vinoFireId) {
  await deleteDoc(doc(db, 'bodegas', String(bodegaId), 'vinos', vinoFireId))
}

// ── LIMPIEZA DE DATOS DE PRUEBA ───────────────────────────────────────────────
export async function limpiarDatosPrueba() {
  // Borra todos los invitados, pedidos y carritos (NO toca los vinos)
  const colecciones = ['invitados', 'pedidos']
  for (const col of colecciones) {
    const snap = await getDocs(collection(db, col))
    const batch = writeBatch(db)
    snap.docs.forEach(d => batch.delete(d.ref))
    await batch.commit()
  }
  // Carritos: leer todos los invitados ya borrados no aplica,
  // los carritos se limpian solos cuando no hay invitados asociados
}
