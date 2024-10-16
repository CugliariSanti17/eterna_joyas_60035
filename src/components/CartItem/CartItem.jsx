import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import './CartItem.css'

const CartItem = ({item, cantidad}) => {

  const {eliminarItem} = useContext(cartContext)

  return (
    <div className='cartProductContainer'>
      <img src={item.img} alt={item.nombre} className='cartProductImage'/>
      <h4 className='cartProductName'>Producto: {item.nombre}</h4>
      <p className='cartProductPrice'>Precio: ${item.precio}</p>
      <p className='cartProductQuantity'>Cantidad: {cantidad}</p>
      <div className='cartProductButtons'>
        <button className='cartProductDelete' onClick={() => eliminarItem(item.id)}>X</button>
      </div>
    </div>
  )
}

export default CartItem