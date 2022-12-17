import React from 'react'
import { useRef } from 'react'
import CardSimilarProducts from './CardSimilarProducts'
import SliderSimilarProducts from './SliderSimilarProducts'
import './styles/similarProducts.css'


const SimilarProducts = ({data}) => {


  return (
    <section className='similar__product'>
        <h3 className='similar__product__title'>Productos similares :</h3>
        <SliderSimilarProducts data={data}/>
    </section>
  )
}

export default SimilarProducts