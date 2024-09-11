import React from 'react'
import { useState, useEffect } from 'react'
import { getProduct } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useEffect(null)

    useEffect(() => {
        getProduct(1) // El id del producto debe ser reemplazado por el prop id que recibe
           .then(response => setProduct(response))
           .catch(error => console.log(error))
    }, [])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer