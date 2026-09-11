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

const BODEGAS = [
  { id: 0,  nombre: "Sucovi" },
  { id: 2,  nombre: "Andillian" },
  { id: 3,  nombre: "Ante Nada" },
  { id: 4,  nombre: "Bodega Benegas" },
  { id: 5,  nombre: "Bianchi" },
  { id: 7,  nombre: "Bodegas Bórbore" },
  { id: 8,  nombre: "Fábula Wines" },
  { id: 9,  nombre: "Finca Iral" },
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

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

for (const bodega of BODEGAS) {
  const snap = await getDocs(collection(db, 'bodegas', String(bodega.id), 'vinos'))
  if (!snap.docs.length) continue
  const prefijo = bodega.nombre.replace(/^bodega\s+/i,'').replace(/[^a-zA-Z]/g,'').substring(0,3).toUpperCase()
  const standPrefix = 'S' + String(bodega.id).padStart(2,'0')
  console.log(`\nStand #${bodega.id} ${bodega.nombre} — prefijo: ${standPrefix}-${prefijo} — ${snap.docs.length} vinos`)
  let correlativo = 1
  for (const d of snap.docs) {
    const data = d.data()
    if (data.vinoId) { console.log(`  ✓ Ya tiene ID: ${data.vinoId}`); correlativo++; continue }
    const vinoId = standPrefix + '-' + prefijo + '-' + String(correlativo).padStart(3,'0')
    await updateDoc(doc(db, 'bodegas', String(bodega.id), 'vinos', d.id), { vinoId })
    console.log(`  → Asignado: ${vinoId} a "${data.nombre}"`)
    correlativo++
  }
}
console.log('\nListo!')
process.exit(0)
