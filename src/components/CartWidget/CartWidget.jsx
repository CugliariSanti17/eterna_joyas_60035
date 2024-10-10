import React from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const CartWidget = () => {

  const { cantidadTotal } = useContext(cartContext)

  return (
    <div className="cartContainer">
      <Link to="/cart">
        <img className="logoCart" src="../../../img/carrito_de_compras.png" alt="Logo carrito de compras" />
        <strong className='itemsCart'>{cantidadTotal}</strong>
      </Link>
    </div>
    
  )
}

export default CartWidget