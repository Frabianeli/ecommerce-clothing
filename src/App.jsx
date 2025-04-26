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

import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom"
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts } from './store/slices/products'
import OrderScreen from './components/Order/OrderScreen'
import OrderPayment from './components/Order/OrderPayment'
import OrderByProduct from './components/Order/OrderByProduct'
import OrderInfo from './components/Order/OrderInfo'
import CartTable from './components/Cart/CartTable'
import CheckoutVerified from './components/Order/CheckoutVerified'
import CheckoutPayment from './components/Order/CheckoutPayment'
import axios from 'axios'

function  App () {

  const intervalSlider = useRef()
  const user = localStorage.getItem('token')
  const [userLogged, setUserLogged] = useState(user ? true : false)

  const dispatch = useDispatch()

  useEffect(() => {
  }, [])

console.log('SALUDOS DESDE APP-JSX')
  return (
    <div className="App">
      <HeaderScreen />
      <main className='main'>
        <Routes>
          <Route path='/' element={<HomeScreen intervalSlider={intervalSlider}/>} />
          <Route path='/login' element={<LoginScreen intervalSlider={intervalSlider} setUserLogged={setUserLogged}/>} />
          <Route path='/cart' element={<CartScreen intervalSlider={intervalSlider}/>} />
          <Route path='/shopping' element={<ShoppingScreen intervalSlider={intervalSlider}/>}/>
          <Route path='/order' element={<OrderScreen intervalSlider={intervalSlider}/>}/>
          <Route path='/checkouts'  element={<OrderScreen intervalSlider={intervalSlider}/>}>
            <Route path='verified' element={<CheckoutVerified/>}/>
            <Route path='information' element={<OrderInfo/>}/>
            <Route path='payment' element={<OrderPayment/>}/>
          </Route> 
          <Route path='/products'>
            <Route path=':name' element={<ProductScreen intervalSlider={intervalSlider}/>}/>  
            <Route index element={<SearchScreen intervalSlider={intervalSlider}/>}/>
          </Route>
          <Route path='/:type/:name' element={<SearchScreen  intervalSlider={intervalSlider}/>}>
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
