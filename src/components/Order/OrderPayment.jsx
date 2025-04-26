import React, { useState } from 'react'
import Swal from'sweetalert2'
import axios  from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getConfig } from '../../utils/getConfig'
import { setCart } from '../../store/slices/cart'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const OrderPayment = () => {
    
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const cookie = Cookies.get('data_checkouts')
    const data = cookie ? JSON.parse(cookie) : cart

    const payment = () => {
        const product = data.cart_products.map(e => (
            {
                productId: e.product.id,
                productStockId: e.product_stock.id,
                quantity: e.quantity,
                totalPrice: e.totalPrice,    
            }
        ))
        axios.post(`http://localhost:3000/api/v1/payments/`, product, getConfig())
            .then(res => {
            console.log(res),
            Swal.fire({
                    position: 'center',
                    icon: 'success',
                    showConfirmButton: false,
                    width: '200px',
                    timer: 2000,
                    color: '#96ff8fb0',
                    text: 'Se realizo la compra exitosamente',
                    background: '#121212',
                }),
                setTimeout(() =>{
                    navigate('/shopping')
                }, 2200)
            })
            .catch(err =>  console.log(err))
            .finally(() => {
                Cookies.remove('data_checkouts')
                localStorage.removeItem('cart_checkouts')
            })
    }

  return (
    <section className='order-payment'>
        <ul className='order-payment__container'>
            <li className='order-payment__container__item'>
                <h4>SubTotal: </h4>
                <h4>S/ {data?.cartTotalPrice}</h4>
            </li>
            <li className='order-payment__container__item'>
                <h4>Total: </h4>
                <h4>S/ {data?.cartTotalPrice}</h4>
            </li>
        </ul>
        <button className='order-payment__btn' onClick={payment}>Pagar</button>
    </section>
  )
}

export default OrderPayment