import React from 'react'
import { useState, useEffect } from 'react'
import { getProduct } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  const {idItem} = useParams()

  useEffect(() => {
    getProduct(idItem)
      .then(response => setProduct(response))
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer