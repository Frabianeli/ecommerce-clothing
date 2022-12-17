import './App.css'

import { Route, Routes } from "react-router-dom"
import HomeScreen from './components/Home/HomeScreen'
import Form from './components/Home/Form'
import HeaderScreen from './components/Shared/HeaderScreen'
import ProductScreen from './components/Product/ProductScreen'
import FooterScreen from './components/Shared/FooterScreen'
import ShoppingScreen from './components/shopping/ShoppingScreen'
import CartScreen from './components/Cart/CartScreen'

function App() {

  return (
    <div className="App">
      <HeaderScreen />
      <main className='main'>
       <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<Form />} />
          <Route path='/shopping' element={<CartScreen />} />
          <Route path='/cart' element={<ProductScreen />}/>
          <Route path='/search' element={<ShoppingScreen />}/>
          <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
      </main>
        <FooterScreen />
    </div>
  )
}

export default App
