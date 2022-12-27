import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Shared/Loading'
import CartTableBody from './CartTableBody'
import './style/cartTable.css'

const CartTable = ({cart, goToProducts}) => {

  const isLoading = useSelector(state => state.isLoading)


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

          isLoading ?
            <tr className='tbody__tr__loading'>
              <td className='td__empty'>
                <Loading />
              </td>
            </tr>
          : 
            cart.cart_products?.length
          ?
          cart.cart_products?.map((product) => 
              <CartTableBody 
                product={product}
                key={product.id}  
              />
            )
          :
            <tr className='tbody__tr__empty'>
              <td className='td__empty'>
                  <h3 className='td__empty__title'>Tu carrito esta vacío</h3>
                  <button onClick={goToProducts} className='td__empty__btn'>
                    Ver productos
                  </button>
              </td>
            </tr>
        }
      </tbody>
    </table>
  )
}

export default CartTable