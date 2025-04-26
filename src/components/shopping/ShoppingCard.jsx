import React from 'react'
import ShoppingProducts from './ShoppingProducts'

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


const ShoppingCard = ({product}) => {
const time = product.createdAt
  const dateData = new Date(time)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`

  return (
    <article className='purchase-card'>
      <h3 className='purchase-card__title'>{datePurchase}</h3>
      <div className='purchase-card__container'>
        {
          product?.payments.map(product => (
            <ShoppingProducts
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </article>
  )
}

export default ShoppingCard