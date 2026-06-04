import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import ItemLIstContainer from "./components/ItemListContainer"

import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {

  return (
    <>

      <NavBar />


      <Routes>


        <Route path='/' element={<Home />} />

        <Route path='/item/:id' element={<ItemDetail />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/checkout' element={<Checkout />} />


      </Routes>
    </>
  )
}


export default App
