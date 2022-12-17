import React from 'react'
import './styles/cardSimilarProducts.css'


const CardSimilarProducts = ({data}) => {
  return (
    <article className='card-similar-product'>
      <div className='similar-product__img'>
        <img className='similar-product__imgs' src={data.images[0]} alt="product" />
      </div>
      <div className='similar-product__info'>
        <h3 className='similar-product__title'>{data.title}</h3>
        <p className='similar-product__descrip'>{data.description}</p>
        <h4 className='similar-product__price'>S/{data.price}.00</h4>
      </div>
    </article>
  )
}

export default CardSimilarProducts