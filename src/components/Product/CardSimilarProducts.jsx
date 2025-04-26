import React from 'react'
import './styles/cardSimilarProducts.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const CardSimilarProducts = ({data, setProduct}) => {

  const navigate = useNavigate()

  const goToProduct = () => {
    setProduct(undefined)
    navigate(`/products/${data.title}`)
    scrollTo(0,0)
  }
  
  return (
    <article className='card-similar-product'>
      <div className='similar-product__img' onClick={goToProduct}>
        <img className='similar-product__imgs' src={data?.products_imgs[0].url} alt="product" />
      </div>
      <div className='similar-product__info'>
        <h3 className='similar-product__title'>{data?.title}</h3>
        <p className='similar-product__descrip'>{data?.description}</p>
        <h4 className='similar-product__price'>S/{data?.price}.00</h4>
      </div>
    </article>
  )
}

export default CardSimilarProducts