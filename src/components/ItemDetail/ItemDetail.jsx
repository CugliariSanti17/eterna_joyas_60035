import React, { useContext, useState } from 'react'
import "./ItemDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContador } from '../../custom-hooks/useContador';
import { cartContext } from '../../context/cartContext';

const ItemDetail = ({id, nombre, precio, descripcion, img, stock}) => {

  const {contador, aumentar, disminuir} = useContador(1, stock);

  const [cantidadTotal, setCantidadTotal] = useState(0)

  const {agregarItem} = useContext(cartContext)

  const agregarCantidad = (cantidad) =>{
    setCantidadTotal(cantidad)
    const item = {id, nombre, precio, img, stock}
    agregarItem(item, cantidad)
  }

  return (
    <div className='cardDetailContainer'>
      <div className='cardDetailImgContainer'>
        <img src={img} alt={nombre} />
      </div>
      <div className='cardDetailInfo'>
        <h3>{nombre}</h3>
        <p className='itemDescription'>{descripcion}</p>
        <p className='itemPrice'>${precio}</p>
        <button onClick={disminuir} className='countButton'>-</button>
        <strong className='countNumber'>{contador}</strong>
        <button onClick={aumentar} className='countButton'>+</button>
        <button onClick={() => agregarCantidad(contador)} className='itemButton'>Agregar al carrito</button>
        <Link to={"/"}><FontAwesomeIcon icon={faArrowLeftLong} className='itemIcon'/></Link>
      </div>
    </div>
  )
}

export default ItemDetail