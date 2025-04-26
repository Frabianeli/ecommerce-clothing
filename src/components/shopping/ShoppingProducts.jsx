import React from 'react'

const ShoppingProducts = ({product}) => {
  const date = new Date(product.createdAt)
  const now = date.toLocaleTimeString()
  return (
    <section className='product-purchase'>
      <p className='product-purchase__now'>{now}</p>
      <h4 className='product-purchase__title'>{product.product.title}</h4>
      <p className='product-purchase__quantity'>{product.quantity}</p>
      <p className='product-purchase__price'>S/ {product.totalPrice}.00</p>
    </section>
  )
}

export default ShoppingProducts