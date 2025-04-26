import React, { useEffect, useRef } from 'react'
import './style/orderScreen.css'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'


const OrderScreen = ({intervalSlider}) => {


    const location = useLocation()
    const current = useRef({})
    const navigate = useNavigate()

    console.log(location)
    const path = (name) => location.pathname.includes(name) 
    const cookie = Cookies.get('data_checkouts')
    const checkoutsCart = localStorage.getItem('cart_checkouts')
    console.log('CHECK-CART', checkoutsCart)
    if(!cookie && !checkoutsCart){
        console.log('NO HAY COOKIE NI CKECKOUTCART')
        return <Navigate to='/' />
    }

    if(path('verified')){
        current.current.title = 'Confirma tu compra'
        current.current.element = 1
    }
    if(path('information')){
        current.current.title = 'Completa tu información'
        current.current.element = 2
        current.current.next = 'Completa tu informacion'
        current.current.next1= 2
    }
    if(path('payment')){
        current.current.title = 'Envie el pago'
        current.current.element = 3
    }

    const btnPrevent = (name) => {
        console.log('first')
        localStorage.setItem('order', name)
        if(!path(name)){
            console.log('NO-EXISTE-PATH')
            //navigate(`${name}`)
        }
    }

    useEffect(()=>{
        localStorage.setItem('order', 'verified')
    }, [])

    console.log('LOCATION', location)
  return (
    <section className='order'>
        <h2 className='order__title'>{current.current.title}</h2>

        <div className='order__header'>
            <span 
                onClick={() => btnPrevent('verified')}
                className={
                    current.current.element == 1
                    ? 'order__header__round round-active'
                    : 'order__header__round'
                } >
             1
            </span>
            <span 
                onClick={() => btnPrevent('information')}
                className={
                    current.current.element == 2
                    ? 'order__header__round round-active'
                    : 'order__header__round'
                } >
            2
            </span>
            <span 
                onClick={() => btnPrevent('payment')}
            className={
                current.current.element == 3
                ? 'order__header__round round-active'
                : 'order__header__round'
            } >
            3
            </span>
        </div>
        <Outlet />
    </section>
  )
}

export default OrderScreen