import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
      
    </BrowserRouter>

    <ItemListContainer/>
    </>
  )
}

export default App
