
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAnrqjPx0hwlYFfxOKsq_2W6Mt_0oH7_QI",
  authDomain: "eterna-joyas-60035.firebaseapp.com",
  projectId: "eterna-joyas-60035",
  storageBucket: "eterna-joyas-60035.appspot.com",
  messagingSenderId: "450743763939",
  appId: "1:450743763939:web:badf863c8d1e6d7f24d6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//const listaProductos = [
//  {nombre: 'Cadena plata', precio: 10000, img:"../public/cadena_plata.webp", descripcion:"Elegante cadena de plata 925, perfecta para cualquier ocasión. Su brillo y durabilidad la convierten en una pieza esencial en tu colección de joyas", idCategory: "cadenas", stock: 4 },
//  {nombre: 'Anillo oro', precio: 8000, img:"../public/anillo_oro.webp", descripcion:"Clásico anillo de oro 18k, diseñado con un acabado impecable que refleja sofisticación y estilo. Ideal para un toque de lujo en tu día a día.", idCategory: "anillos", stock: 5 },
//  {nombre: 'Pulsera', precio: 5000, img:"../public/pulsera_plata.webp", descripcion:"Moderna pulsera, combinando diseño y comodidad. El complemento perfecto para cualquier outfit, destacando por su versatilidad y estilo.", idCategory: "pulseras", stock: 3 },
//  {nombre: 'Aritos', precio: 3500, img:"../public/par_aritos.webp", descripcion:"Delicados aritos con un diseño minimalista, perfectos para un look diario o para ocasiones especiales. Un toque sutil de elegancia.", idCategory: "aros", stock: 6 },
//  {nombre: 'Cadena oro', precio: 15000, img:"../public/cadena_oro.png", descripcion:"Lujosa cadena de oro 18k, con un acabado brillante y resistente. Añade un toque de distinción y estilo a cualquier atuendo.", idCategory:"cadenas", stock: 6},
//  {nombre: 'Anillo plata y oro', precio: 5000, img:"../public/anillo_plata_y_oro.jpg", descripcion:"Anillo bicolor, combinando la pureza de la plata 925 con la calidez del oro 18k. Un diseño único que destaca por su elegancia y originalidad.", idCategory:"anillos", stock: 3},
//  {nombre: "Cadena Cubana", precio: 20000, img:"../public/cadena_cubana.jpg", descripcion:"Eleva tu estilo con esta impresionante cadena cubana de alta calidad. Con un diseño robusto y elegante, es el accesorio perfecto para cualquier ocasión. Hecha para destacar y durar, su brillo dorado añade un toque de lujo a tu look diario o eventos especiales.", idCategory: "cadenas", stock: 5},
//  {nombre: "Cadena Plata 925", precio: 10000, img:"../public/cade_plata_925.webp", descripcion:"Descubre la elegancia atemporal de nuestra cadena de plata 925. Con su brillo sutil y acabado impecable, es el accesorio ideal para quienes buscan un toque sofisticado y versátil.", idCategory: "cadenas", stock: 10},
//  {nombre:"Pulsera Pandora", precio:15000, img:"../public/pulsera_pandora_plata.jpg", descripcion:"Expresa tu estilo único con nuestra exclusiva pulsera de plata estilo Pandora. Fabricada en plata 925 de la más alta calidad, esta pieza te permite personalizar tu look con charms y dijes que representen tus momentos más especiales.", idCategory: "pulseras", stock: 7},
//  {nombre:"Anillo de oro c/ diamantes", precio:30000, img:"../public/anillo_con_diamante.jpg", descripcion:"Luce la elegancia definitiva con este deslumbrante anillo de oro, adornado con brillantes diamantes. Su diseño sofisticado combina a la perfección el lujo y la delicadeza, convirtiéndolo en la joya ideal para momentos inolvidables.", idCategory: "anillos", stock: 4},
//  {nombre:"Pulsera Oro 18K", precio:40000, img:"../public/pulsera_oro_18k.avif", descripcion:"Realza tu estilo con esta exquisita pulsera de oro de 18 quilates, diseñada para quienes aprecian la belleza y la calidad en cada detalle.", idCategory: "pulseras", stock: 5},
//  {nombre:"Aritos Cruz", precio:6500, img:"../public/aros_cruz.webp", descripcion:"Luce un estilo moderno y significativo con este elegante aro de cruz. Su diseño minimalista, pero lleno de carácter, combina a la perfección con cualquier look, aportando un toque espiritual y contemporáneo.", idCategory: "aros", stock:10},
//]

//import {collection, doc, writeBatch} from "firebase/firestore"

//const subirProductos = async () =>{
//  const batch = writeBatch(db)
//  const productsRef = collection(db, "productos")

//  listaProductos.forEach((producto) => {
//    const productDocRef = doc(productsRef)
//    batch.set(productDocRef, producto)
//  })

//  try{
//    await batch.commit();
//    console.log("Productos subidos correctamente")
//  }catch(error){
//    console.error("Error al subir productos: ", error)
//  }
//}

//subirProductos()