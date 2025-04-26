import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { json, useNavigate } from 'react-router-dom'
import { getAllCart, setCart } from '../../store/slices/cart'
import { getConfig } from '../../utils/getConfig'
import CartTable from './CartTable'
import './style/cartScreen.css'
import CartOrder from './CartOrder'
import Cookies from 'js-cookie'

const CartScreen = ({intervalSlider}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    console.log(intervalSlider)
    clearInterval(intervalSlider.current)
    dispatch(getAllCart(true))
    console.log('----------USEFFECT-CART-----------')
  },[])

  console.log('CART-SCREEN')

  const goToProducts = () => {
    navigate('/products')
  }

  const btnOpen = () => {
    window.scrollTo(0,0)
    localStorage.setItem('cart_checkouts', true)
    Cookies.remove('data_checkouts')
    navigate(`/checkouts/verified`)
  }

  return (
    <section className='cart-screen'>
      <div className='cart-screen__header'>
        <h2 className='cart-screen__header__title'>Tu carrito</h2>
        {
          cart?.cart_products?.length > 0 &&
          <button onClick={goToProducts} className='cart-screen__header__btn'>
            <span> Seguir comprando</span>
          </button>
        }
      </div>

      <CartTable 
        goToProducts={goToProducts}        
      />

      {
        cart?.cart_products?.length > 0 &&
        <div className='cart-screen__payment'>
          <div className='cart-screen__payment__price'>
            <h3>SubTotal</h3>
            <h4>S/ {cart?.cartTotalPrice}.00</h4>
          </div>
          <button className='cart-screen__payment__btn'
            onClick={btnOpen}
          >
            Pagar Pedido          
          </button>
        </div>
      }
    </section>
  )
}

export default CartScreen