import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"


const Cart = () => {
    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(cartContext)

    if (cantidadTotal === 0) {
        return (
            <div className='cartProductMesagge'>
                <h2 className='cartEmpty'>Tu carrito está vacío</h2>
                <Link className='returnToCatalog' to="/">Volver al catálogo</Link>
            </div>
        )
    }
    return (
        <div className='cartProductsContainer'>
            {carrito.map(item => (
                <CartItem key={item.id} {...item} />)
            )}

            <div className='cartSummary'>
                <p className='cartProductTotal'>Total de productos: {cantidadTotal}</p>
                <strong className='cartProductsTotalPrice'>Total a pagar: ${total}</strong>
            </div>

            <div className='cartActions'>
                <button className='deleteCart' onClick={vaciarCarrito}>Vaciar el carrito</button>
                <Link className="cartLink" to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart