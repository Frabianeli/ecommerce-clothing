import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setSearch } from '../../store/slices/search'
import './style/searchProductCard.css'

import Swal from 'sweetalert2'
import axios from 'axios'
import { getConfig } from '../../utils/getConfig'


const SearchProductCard = ({product, cart}) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productInfo = () => {
        dispatch(setSearch(product))
        navigate(':id')
        window.scrollTo( 0, 0)
    }

    const addCart = (e) => {
        e.stopPropagation()

        const cart = {
            cartTotalPrice: product.price,
            productId: product.id,
            quantity: 1,
            totalPrice: product.price 
        }

        if(product.stock > 1){
        axios.post('https://ecommerce-rom.onrender.com/api/v1/cart/me', cart, getConfig())
        .then(res =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                showConfirmButton: false,
                timer: 1400,
                width: '200px',
                color: 'white',
                text: 'Se agrego correctamente',
                background: 'rgb(23 57 66)',
              }),
            console.log(res)
        })
        .catch(err => console.log(err))
        }
    }

  return (
    <article className='card-product' onClick={productInfo}>
        <div className='card-product__img'>
            <img 
                src={product.products_imgs[0].url}
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