import './App.css'

import HomeScreen from './components/Home/HomeScreen'
import HeaderScreen from './components/Shared/HeaderScreen'
import ProductScreen from './components/Product/ProductScreen'
import FooterScreen from './components/Shared/FooterScreen'
import ShoppingScreen from './components/shopping/ShoppingScreen'
import CartScreen from './components/Cart/CartScreen'
import SearchScreen from './components/SearchProducts/SearchScreen'
import LoginScreen from './components/Login/LoginScreen'
import CreateProduct from './components/SearchProducts/CreateProduct'
import Admin from './components/Shared/Admin'

import { Route, Routes } from "react-router-dom"
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products'

function App() {

  const intervalSlider = useRef()
  const user = localStorage.getItem('token')
  const [userLogged, setUserLogged] = useState(user ? true : false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])



  return (
    <div className="App">
      <HeaderScreen userLogged={userLogged} setUserLogged={setUserLogged}/>
      <main className='main'>
       <Routes>
          <Route path='/' element={<HomeScreen intervalSlider={intervalSlider}/>} />
          <Route path='/login' element={<LoginScreen intervalSlider={intervalSlider} setUserLogged={setUserLogged}/>} />
          <Route path='/cart' element={<CartScreen intervalSlider={intervalSlider}/>} />
          <Route path='/shopping' element={<ShoppingScreen intervalSlider={intervalSlider}/>}/>
          <Route path='/products'>
            <Route path=':id' element={<ProductScreen intervalSlider={intervalSlider}/>}/>  
            <Route index element={<SearchScreen intervalSlider={intervalSlider}/>}/>
          </Route>
          <Route  element={<Admin />}> 
            <Route path='/create' element={<CreateProduct intervalSlider={intervalSlider}/>}/>
          </Route>
          <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
      </main>
        <FooterScreen />
    </div>
  )
}

export default App
