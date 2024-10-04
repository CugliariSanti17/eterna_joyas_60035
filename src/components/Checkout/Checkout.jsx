import React from 'react'
import "./Checkout.css"
import { useState, useContext, useEffect} from 'react'
import {cartContext} from '../../context/cartContext'
import {db} from '../../service/config'
import {collection, addDoc, updateDoc, doc, getDoc} from 'firebase/firestore'
import emailjs from "@emailjs/browser"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import confetti from 'canvas-confetti';


const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [confirmacionEmail, setConfirmacionEmail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [error, setError] = useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(cartContext)

    useEffect(() => {
        if (ordenId) {
          confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      }, [ordenId]);

    const formHandled = (e) =>{
        e.preventDefault()

        if(!nombre || !apellido || !telefono || !email || !confirmacionEmail|| !direccion){
            setError("Todos los campos son obligatorios")
            return
        }

        if(email !== confirmacionEmail){
            setError("Los emails no coinciden. Intente nuevamente")
            return
        }

        const orden = {
            items: carrito.map (producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                precio: producto.item.precio,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
            direccion,
        }

        Promise.all(
            orden.items.map (async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)

                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(() =>{
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef =>{
                const nuevaOrdenId = docRef.id
                setOrdenId(nuevaOrdenId)
                vaciarCarrito()

                const templateParams = {
                    from_name: nombre,
                    from_email: email,
                    to_name: 'Eterna Joyas',
                    subject: 'Orden de compra realizada',
                    text: `Orden de compra #${nuevaOrdenId}\nTotal: ${total}\nItems: ${orden.items.map(item => `${item.nombre} - ${item.precio} x ${item.cantidad}`).join('\n')}`
                }
        
                emailjs.send(
                    "service_9ufa2zi",
                    "template_0yc5qqm",
                    templateParams,
                    "Gg-9SlmMdkXxWbN9H"
                )
                .then((response) => {
                    console.log("Correo enviado con éxito!", response.status, response.text);
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                });
                    
                setNombre("")
                setApellido("")
                setTelefono("")
                setEmail("")
                setConfirmacionEmail("")
                setDireccion("")
                setError("")
            })
            .catch(error => {
                setError("Hubo un error al procesar la orden de compra. Intente nuevamente")
                console.error(error)
            })
        })
        .catch(error => {
            console.log("Error al actualizar el stock del producto", error)
            setError("Hubo un error en el actualizamiento del producto")
        })
    }

  return (
    <div className='checkoutContainer'>
        <h2>Checkout</h2>

        { ordenId ? (
            <div className="orderConfirmation">
             <div className='imageContainer'>
               <img src="../../../public/imagen_orden_compra.png"></img>
             </div>
             <div className="orderTextContainer">
               <h1>¡Tu orden ha sido confirmada!</h1>
               <h2>Recibirás un mail con el detalle de tu compra.</h2>
               <h4>Tu número de orden es: {ordenId}</h4>
             </div>
             <Link to="/" className="backButton">
               <FontAwesomeIcon icon={faArrowLeftLong}/>
               <h4>Volver a comprar</h4>
             </Link>
            </div>
            ) : (
            <form onSubmit={formHandled}>
                <label htmlFor="">Nombre:</label>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>

                <label htmlFor="">Apellido:</label>
                <input type="text" placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} value={apellido}/>

                <label htmlFor="">Telefono:</label>
                <input type="text" placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>

                <label htmlFor="">Email:</label>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>

                <label htmlFor="">Confirmar Email:</label>
                <input type="email" placeholder="Confirmar Email" onChange={(e) => setConfirmacionEmail(e.target.value)} value={confirmacionEmail}/>

                <label htmlFor="">Dirección:</label>
                <input type="text" placeholder="Dirección" onChange={(e) => setDireccion(e.target.value)} value={direccion}/>

                {
                    error && <p className="errorCheckout">{error}</p>
                }

                <button type='submit'>Confirmar compra</button>
            </form>
            )
        }
    </div>
  )
}

export default Checkout