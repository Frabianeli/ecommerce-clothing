import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/searchProductCard.css'

const SearchProductCard = ({product}) => {

    const navigate = useNavigate()

    const productInfo = () => {
        navigate('/cart')
    }

  return (
    <article className='card-product' onClick={productInfo}>
        <div className='card-product__img'>
            <img 
                src={product.images[0]}
                alt="product"
            />
        </div>
        <div className='card-product__info'>
            <h2 className='card-product__info__title'>
                {product.title}
            </h2>
            <h3 className='card-product__info__descrip'>
                {product.description}
            </h3>
            <h4 className='card-product__info__price'>
                S/ {product.price}.00
            </h4>
        </div>
    </article>
  )
}

export default SearchProductCard