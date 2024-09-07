import React from 'react'

const Item = ({nombre, precio, img, descripcion}) => {
  return (
    <div className='productCard'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{precio}</p>
        <button>Ver mas detalles</button>
    </div>
  )
}

export default Item