import React from 'react'
import "./ItemDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const ItemDetail = ({nombre, precio, descripcion, img}) => {
  return (
    <div className='cardDetailContainer'>
      <div className='cardDetailImgContainer'>
        <img src={img} alt={nombre} />
      </div>
      <div className='cardDetailInfo'>
        <h3>{nombre}</h3>
        <p className='itemDescription'>{descripcion}</p>
        <p className='itemPrice'>${precio}</p>
        <button className='itemButton'>Agregar al carrito</button>
        <FontAwesomeIcon icon={faArrowLeftLong} className='itemIcon' />
      </div>
    </div>
  )
}

export default ItemDetail