import React from 'react'
import "./Item.css"

const Item = ({nombre, precio, img, descripcion}) => {
  return (
    <div className='productCard'>
        <img src={img} alt={nombre} />
        <h3 className='titleCard'>{nombre}</h3>
        <p className='descriptionCard'>{descripcion}</p>
        <p className='priceCard'>${precio}</p>
        <button className='buttonCard'>Ver mas detalles</button>
    </div>
  )
}

export default Item