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

const BODEGAS = [
  { id: 0, nombre: "Sucovi" },
  { id: 2, nombre: "Andillian" },
  { id: 3, nombre: "Ante Nada" },
  { id: 4, nombre: "Bodega Benegas" },
  { id: 5, nombre: "Bianchi" },
  { id: 7, nombre: "Bodegas Bórbore" },
  { id: 8, nombre: "Fábula Wines" },
  { id: 9, nombre: "Finca Iral" },
  { id: 10, nombre: "Giménez Riili" },
  { id: 11, nombre: "Jorge Rubio" },
  { id: 12, nombre: "La Coste de los Andes" },
  { id: 13, nombre: "Las Perdices" },
  { id: 14, nombre: "Lorenzo de Agrelo" },
  { id: 15, nombre: "Pannunzio Wines" },
  { id: 16, nombre: "Bodega Patritti" },
  { id: 17, nombre: "Rosell Boher" },
  { id: 18, nombre: "Valle de la Puerta" },
  { id: 19, nombre: "Bertelli" },
  { id: 20, nombre: "Familia Aicardi" },
  { id: 21, nombre: "Finca Flichman" },
  { id: 22, nombre: "Don Martino Wines" },
  { id: 23, nombre: "Séptima" },
]

// Cargar todos los vinos con su vinoId legible
const vinoMap = {}
for (const bodega of BODEGAS) {
  const snap = await getDocs(collection(db, 'bodegas', String(bodega.id), 'vinos'))
  for (const d of snap.docs) {
    const data = d.data()
    if (data.vinoId) vinoMap[d.id] = data.vinoId
  }
}
console.log(`Vinos con ID legible: ${Object.keys(vinoMap).length}`)

// Actualizar documentos de stock
const stockSnap = await getDocs(collection(db, 'stock'))
let actualizados = 0
for (const d of stockSnap.docs) {
  const data = d.data()
  const codigoLegible = vinoMap[data.vinoId]
  if (codigoLegible && !data.vinoId2) {
    await updateDoc(doc(db, 'stock', d.id), { vinoId2: codigoLegible })
    console.log(`  → ${data.vinoNombre}: ${codigoLegible}`)
    actualizados++
  }
}
console.log(`\nActualizados: ${actualizados} documentos de stock`)
process.exit(0)
