import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Shared/Loading'
import CartTableBody from './CartTableBody'
import './style/cartTable.css'
import Cookies from 'js-cookie'
import CartLoading from './CartLoading'
import CartEmpty from './CartEmpty'
import { getAllCart } from '../../store/slices/cart'

const CartTable = ({ goToProducts, order}) => {

  const isLoading = useSelector(state => state.isLoading)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  console.log('CART', cart)
  const cookie = Cookies.get('data_checkouts')
  const product = cookie &&  JSON.parse(cookie) 
  useEffect(() => {
    console.log('USEEFECT TBALE')
    if(!cart.length){
      console.log('SIN CART')
      dispatch(getAllCart())
    }
  }, [])
  console.log('PRODUCT', product)

  const conditionByCart = () => {
      if(isLoading){
        return(
          <CartLoading />
        )
      } else if(cart.cart_products && cart.cart_products?.length){
        return(
          cart.cart_products.map(e =>   (
            <CartTableBody 
            key={e.id}
            product={e}
            order={order ? true : false}  
          />
        ))
        )
      } else{
        return (
          <CartEmpty goToProducts={goToProducts}/>
        )
      }
    }

  const conditionByCheckouts = () => {
    if(localStorage.getItem('cart_checkouts')){
      console.log('ESTOY EN CHECKOUT CART')
      return cart.cart_products?.map((e) => (
        <CartTableBody
          key={e.id}
          product={e}
          order={order ? true : false}  
        />
      ))
    } else {
      return product.cart_products?.map((e) => (
        <CartTableBody
          key={e.id}
          product={e}
          order={order ? true : false}  
        />
      ))
    }
  } 

  return (
    <table className='table'>
      <thead className='thead'>
        <tr className='thead__tr'>
            <th className='thead__th__product'>Producto</th>
            <th className='thead__th__quantity'>Cantidad</th>
            <th className='thead__th__talla'>Talla</th>
            <th className='thead__th__total'>Total</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {
          order && conditionByCheckouts()
        }
        {
          !order &&  conditionByCart()
        }
      </tbody>
    </table>
  )
}

export default CartTable