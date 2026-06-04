import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {

  return (
    <>

      <NavBar />


      <Routes>


        <Route
          path='/'
          element={<ItemListContainer greeting="Bienvenidos a mi tienda" />  
          }
        />

        <Route
          path='/category/:categoryId'
          element={
            <ItemListContainer greeting="Categoría" />
          }
        />

        <Route path='/item/:id' element={<ItemDetail />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/checkout' element={<Checkout />} />


      </Routes>
      
    </>
  )
}


export default App
