import React from 'react'
import Loading from '../Shared/Loading'

const CartLoading = () => {
  return (
    <tr className='tbody__tr__loading'>
              <td className='td__empty'>
                <Loading />
              </td>
    </tr>
  )
}

export default CartLoading