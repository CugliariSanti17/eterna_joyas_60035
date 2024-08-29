import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="cartContainer">
        <img  className="logoCart" src="../../../public/carrito_de_compras.png" alt="Logo carrito de compras" />
        <strong className='itemsCart'>0</strong>
    </div>
  )
}

export default CartWidget