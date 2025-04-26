import React from 'react'
import CartTable from '../Cart/CartTable'
import Cookies from 'js-cookie'
import { useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CheckoutVerified = () => {

    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const cookie = Cookies.get('data_checkouts')
    const result = cookie ? JSON.parse(cookie) : cart

    console.log('COOKIE', result)
    const btnNext = () => {
      scrollTo(0,0)
        navigate(`/checkouts/information`)
    }

  return (
    <section>
        <CartTable order={true}/>
        <div className='cart-screen__payment'>
          <div className='cart-screen__payment__price'>
            <h3>SubTotal</h3>
            <h4>S/ {result.cartTotalPrice}.00</h4>
          </div>
          <div className='cart-screen__payment__price'>
            <h3>Total</h3>
            <h4>S/ {result.cartTotalPrice}.00</h4>
          </div>
          <button className='cart-screen__payment__btn'
            onClick={btnNext}
          >
            Continuar         
          </button>
        </div>
    </section>
  )
}

export default CheckoutVerified