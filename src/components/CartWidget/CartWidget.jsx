import React from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className="cartContainer">
      <Link to="/cart">
        <img className="logoCart" src="../../../public/carrito_de_compras.png" alt="Logo carrito de compras" />
        <strong className='itemsCart'>0</strong>
      </Link>
    </div>
    
  )
}

export default CartWidget