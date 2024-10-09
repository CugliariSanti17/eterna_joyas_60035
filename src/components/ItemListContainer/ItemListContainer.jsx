import React, {useEffect, useState} from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../service/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Loader from '../Loader/Loader'



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const [loading, setLoading] = useState(false)

  const {idCategory} = useParams()

  useEffect(() =>{
    setLoading(true)

    const myProducts = idCategory ? query(collection(db, "productos"), where("idCategory", "==", idCategory)) : (collection(db, "productos"))
    getDocs(myProducts)
    .then(res => {
     const newProducts = res.docs.map(doc =>{
      const data = doc.data()
      return {id:doc.id, ...data}
     })
     setProductos(newProducts)
    })
    .catch(error => {
      console.log("Error getting documents: ", error);
    })
    .finally(() =>{
      console.log("Proceso terminado")
      setLoading(false)
    })
  }, [idCategory]);

  return(
    <>
      <h2 className='productsTitle'>Lista de productos</h2>   
      {loading ? <Loader/> : <ItemList productos={productos}/>} 
    </>
  )

}



export default ItemListContainer