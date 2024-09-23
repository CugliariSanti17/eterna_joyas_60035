import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(cartContext)

    if (cantidadTotal === 0){
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        )
    }
  return (
    <div>
        {carrito.map = ( item => <CartItem  key={item.id} {...item} />)}

        <p>Total de productos: {cantidadTotal}</p>
        <strong>Total a pagar: ${total}</strong>
        <button onClick={vaciarCarrito}>Vaciar el carrito</button>
    </div>
  )
}

export default Cart