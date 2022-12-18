import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearch } from '../../store/slices/search'
import './style/searchProductCard.css'

const SearchProductCard = ({product, cart}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productInfo = () => {
        navigate('/cart')
    }

    const addCart = (e) => {
        e.stopPropagation()
        dispatch(setSearch(product))
        navigate('/cart')
        console.log('se agrego al carrito correctamente')
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
            <h2 
                className={
                    cart
                    ? 
                    'card-product__info__title title-cart'
                    : 
                    'card-product__info__title'
                }
            >
                {product.title}
            </h2>
            <h3 className='card-product__info__descrip'>
                {product.description}
            </h3>
            {
                !cart &&
                <h4 className='card-product__info__price'>
                    S/ {product.price}.00
                </h4>
            }
        </div>
        {
            cart &&
            <div className='card-product__cart'>
                <h4 className='card-product__cart__price'>
                S/ {product.price}.00
                </h4>
                <button onClick={addCart} className='card-product__cart__btn'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        }
    </article>
  )
}

export default SearchProductCard