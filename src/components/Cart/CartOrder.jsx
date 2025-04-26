import React, { useEffect, useRef } from 'react'
import CartOrderProduct from './CartOrderProduct';

const CartOrder = ({cart, btnOpen}) => {

    const ref = useRef();

    const hidden = (event) => {
        if (!ref.current.contains(event.target)) {
            btnOpen();
          }
    }

    console.log(cart)

  return (
    <section className='order' onClick={hidden}>
        <div className='order__view' ref={ref} >
            <h3 className='order__view__title'>Productos</h3>
            {
                cart?.cart_products?.map(product => 
                    <CartOrderProduct key={product.id} product={product}/>
                    )
            }
        </div>
    </section>
  )
}

export default CartOrder