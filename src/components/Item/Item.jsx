import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, descripcion}) => {
  return (
    <div className='productCard'>
      <img src={img} alt={nombre} />
      <h3 className='titleCard'>{nombre}</h3>
      <p className='descriptionCard'>{descripcion}</p>
      <p className='priceCard'>${precio}</p>
      <Link to={`/item/${id}`}><button className='buttonCard'>Ver más detalles</button></Link>
    </div>
  )
}

export default Item