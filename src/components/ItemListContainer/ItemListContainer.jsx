import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import { getProducts } from '../../asynmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() =>{
    getProducts
      .then(response => setProductos(response))
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
        <h1>Lista de productos</h1>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer