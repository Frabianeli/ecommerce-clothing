import React from 'react'

const HomeCard = ({image, index}) => {
  return (
    <div className={
        index === 3 ? 
        `container__img none` :
        `container__img`  
      }>
        <img src={image} alt="product" />
    </div>
  )
}

export default HomeCard