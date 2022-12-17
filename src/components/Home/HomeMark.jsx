import React from 'react'
import HomeCard from './HomeCard'

const HomeMark = ({product}) => {
    console.log(product)
  return (
    <section className='home-mark'>
        <h3 className='home-mark__title'>{product.brand}</h3>
        <div className='home-mark__container__img'>
            {
                product.images.map( (image, index) =>
                <HomeCard 
                key={index}
                image={image}
                index={index}
                />
                )
            }
        </div>
    </section>
  )
}

export default HomeMark