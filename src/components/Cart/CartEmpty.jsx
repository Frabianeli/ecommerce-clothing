import React from 'react'

const CartEmpty = ({goToProducts}) => {
  return (
    <tr className='tbody__tr__empty'>
        <td className='td__empty'>
            <h3 className='td__empty__title'>Tu carrito esta vacío</h3>
            <button onClick={goToProducts} className='td__empty__btn'>
            Ver productos
            </button>
        </td>
    </tr>
  )
}

export default CartEmpty