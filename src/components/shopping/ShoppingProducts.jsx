import React from 'react'

const ShoppingProducts = ({product}) => {
  return (
    <section className='product-purchase'>
      <h4 className='product-purchase__title'>{product.title}</h4>
      <p className='product-purchase__quantity'>{product.productsInCart.quantity}</p>
      <p className='product-purchase__price'>$ {product.price}. 00</p>
    </section>
  )
}

export default ShoppingProducts