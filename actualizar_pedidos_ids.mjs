import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCs0qf02HaIv0-aAe7wVntfosDL1SjdOws",
  authDomain: "feria-vinos-sucovi-2027.firebaseapp.com",
  projectId: "feria-vinos-sucovi-2027",
  storageBucket: "feria-vinos-sucovi-2027.firebasestorage.app",
  messagingSenderId: "1686119758",
  appId: "1:1686119758:web:2c3c6d96e36f1276052a1f"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Cargar todos los vinos con su vinoId legible (fireId → vinoId)
const vinoMap = {}
const BODEGAS = [0,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
for (const standId of BODEGAS) {
  const snap = await getDocs(collection(db, 'bodegas', String(standId), 'vinos'))
  for (const d of snap.docs) {
    const data = d.data()
    if (data.vinoId) vinoMap[d.id] = data.vinoId
  }
}
console.log(`Vinos mapeados: ${Object.keys(vinoMap).length}`)

// Actualizar pedidos
const pedidosSnap = await getDocs(collection(db, 'pedidos'))
let actualizados = 0, sinCambio = 0
for (const d of pedidosSnap.docs) {
  const data = d.data()
  const items = data.items || []
  let modificado = false
  const nuevosItems = items.map(item => {
    if (item.vinoCodigoLegible || !item.vinoId) return item
    const codigo = vinoMap[item.vinoId]
    if (codigo) { modificado = true; return { ...item, vinoCodigoLegible: codigo } }
    return item
  })
  if (modificado) {
    await updateDoc(doc(db, 'pedidos', d.id), { items: nuevosItems })
    actualizados++
    if (actualizados % 10 === 0) console.log(`  ${actualizados} pedidos actualizados...`)
  } else {
    sinCambio++
  }
}
console.log(`\nActualizados: ${actualizados} pedidos, sin cambio: ${sinCambio}`)
process.exit(0)
