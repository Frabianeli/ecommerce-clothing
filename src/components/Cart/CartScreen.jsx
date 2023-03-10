import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCart, setCart } from '../../store/slices/cart'
import { getConfig } from '../../utils/getConfig'
import CartTable from './CartTable'
import './style/cartScreen.css'

const product = [
    { images : ['https://www.innvictus.com/medias/IN-DD8959-100-1.jpg?context=bWFzdGVyfGltYWdlc3w3NDA3MnxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDk1LzExMjE2ODA5NTkwODE0LmpwZ3xlZGQ4NGZkZDQ4ZjVjYzA4YjllZDg5MDhhMzVlYWM4MmYyMjNlZTk1Yjg5NWFjMzI0YmVlNTZjZmFhNTRjMGY5',
                'https://www.innvictus.com/medias/IN-DD8959-100-4.jpg?context=bWFzdGVyfGltYWdlc3w3Mzc0M3xpbWFnZS9qcGVnfGltYWdlcy9oYzYvaDM4LzExMjE2Nzc4NjU3ODIyLmpwZ3xjZTYxMGMxNGFmZmM0ZmNkZmUxZmI1ZWEwNmIwM2QxZjRlZTRkMzU1NDVlNDE0ZjAwYTFkNjgwYzg1ZTkwODRm',
                'https://www.innvictus.com/medias/IN-DD8959-100-3.jpg?context=bWFzdGVyfGltYWdlc3w3MTgyOHxpbWFnZS9qcGVnfGltYWdlcy9oMTAvaDgxLzExMjE2NzU1NTg5MTUwLmpwZ3w4ZTkyNTE2NDE1NzJkMGYzNmQxNjJjMGMyYjFmNTJjOGRkODdiNWVmY2IyNWM5Nzk5ZTRkYmFiMjc3NGFhZGI1'
        ],
        title: 'Nike air max white',
        price: 350,
        stock: 100,
        description: 'nike air max color blanco unisex',
        tallas: ['39','40', '41', '42'],
        categoria: 'tenis'
    }
]

const CartScreen = ({intervalSlider}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const cart = useSelector(state => state.cart)

  useEffect(() => {
    clearInterval(intervalSlider.current)
    dispatch(getAllCart(true))

  },[])




  const goToProducts = () => {
    navigate('/products')
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
        cart={cart}
        goToProducts={goToProducts}
      />

      {
        cart?.cart_products?.length > 0 &&
        <div className='cart-screen__payment'>
          <div className='cart-screen__payment__price'>
            <h3>SubTotal</h3>
            <h4>S/ {cart?.cartTotalPrice}.00</h4>
          </div>
          <button className='cart-screen__payment__btn'>
            Pagar Pedido          
          </button>
        </div>
      }
    </section>
  )
}

export default CartScreen