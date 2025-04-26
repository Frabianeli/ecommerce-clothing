import React from 'react'
import SliderSimilarProducts from './SliderSimilarProducts'
import './styles/similarProducts.css'


const SimilarProducts = ({data, title, setProduct}) => {


  return (
    <section className='similar__product'>
        <h3 className='similar__product__title'>{title}</h3>
        <SliderSimilarProducts setProduct={setProduct} data={data}/>
    </section>
  )
}

export default SimilarProducts