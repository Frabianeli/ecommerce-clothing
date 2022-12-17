import React from 'react'
import CartTableBody from './CartTableBody'
import './style/cartTable.css'

const CartTable = ({product}) => {

  const array = [1,2,3,4,5]

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
            array.map((a, index) => 
                <CartTableBody 
                  product={product}
                  key={index}  
                />
              )
          }
        </tbody>
        </table>
  )
}

export default CartTable