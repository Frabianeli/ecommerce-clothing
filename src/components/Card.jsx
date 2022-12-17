import React from 'react'

const Card  = ({data}) => {

  const copi = () => {

    <div className="Card">
        <div className='Product-img'>
            <img src={data?.products_imgs[0].url} alt="" />
        </div>
        <div className='Product-info'>
            <h4>{data?.title}</h4>
            <p>Descript: {data?.description}</p>
            <p>Category: {data?.category.name}</p>
            <p>Stock: {data?.stock}</p>
            <div className='Product__box'>
                <p className='price'>{data?.price}$</p>
                <button className='btn-cart'>C</button>
            </div>
        </div>
    </div>

  }

  return (
    <div className="Card">
        <div className='Product-img'>
            <img src={data?.images[0]} alt="" />
        </div>
        <div className='Product-info'>
            <h4>{data?.title}</h4>
            <p>{data?.description}</p>
            <div className='Product__box'>
                <p className='price'>{data?.price}$</p>
                <button className='btn-cart'>C</button>
            </div>
        </div>
    </div>
  )
}

export default Card 