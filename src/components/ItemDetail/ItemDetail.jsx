import React from 'react'
import "./ItemDetail.css"

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
        </div>
    </div>
  )
}

export default ItemDetail