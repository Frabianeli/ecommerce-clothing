import React from 'react'
import ShoppingProducts from './ShoppingProducts'

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


const ShoppingCard = ({product}) => {
const time = '2022-12-08 23:13:51.004 -0500'
  const dateData = new Date(time)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`

  return (
    <article className='purchase-card'>
      <h3 className='purchase-card__title'>{datePurchase}</h3>
      <div className='purchase-card__container'>
        {
          months.map(a => (
            <ShoppingProducts
              key={a}
              product={product}
            />
          ))
        }
      </div>
    </article>
  )
}

export default ShoppingCard