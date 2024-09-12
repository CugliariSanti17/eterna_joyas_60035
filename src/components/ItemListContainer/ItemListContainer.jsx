import React, { useEffect, useState} from 'react'
import "./ItemListContainer.css"
import { getProducts } from '../../asynmock'
import ItemList from '../ItemList/ItemList'
import { getCategories } from '../../asynmock'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  const {idCategory} = useParams()

  useEffect(() =>{
    const productFunction = idCategory ? getCategories : getProducts;
    productFunction(idCategory)
     .then(response => setProductos(response))
     .catch(error => console.log(error))
  }, [idCategory]);

  return (
    <div>
        <h1 className='productsTitle'>Lista de productos</h1>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer