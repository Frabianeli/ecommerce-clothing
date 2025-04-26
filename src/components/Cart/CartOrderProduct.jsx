import React from 'react'

const CartOrderProduct = ({product}) => {
    console.log(product)
  return (
    <article className='order__product'>
        <img className='order__product__img' src={product.product.products_imgs[0].url} alt="" />
        <div className='order__product__info'>
            <h4 className='order__product__title'>{product.product.title}</h4>
            <h4 className='order__product__price'>Precio: S/ {product.product.price}.00</h4>
            <h4 className='order__product__quantity'>Cantidad: {product.quantity}</h4>
            <h4 className='order__product__totalprice'>S/ {product.totalPrice}.00</h4>
        </div>
    </article>
  )
}

export default CartOrderProduct