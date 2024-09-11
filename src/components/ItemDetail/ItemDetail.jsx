import React from 'react'

const ItemDetail = ({nombre, precio, descripcion, img}) => {
  return (
    <div className='cardDetailContainer'>
        <div className='cardDetailImgContainer'>
            <img src={img} alt={nombre} />
        </div>
        <div className='cardDetailInfo'>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>{precio}</p>
        </div>
    </div>
  )
}

export default ItemDetail