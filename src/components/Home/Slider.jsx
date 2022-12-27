import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import './styles/slider.css'


const arrayImage = [
     'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-mutator-pack/banner.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-predator-edge/banner.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-inflight/banner.jpg',
    'https://s3-eu-west-1.amazonaws.com/unisport-forever-paths/campaign/adidas-ucl-dragon/Thumbnail-713x509px.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-thunder-storm/banner.jpg',
    'https://www.soccerbible.com/media/58012/thunderstorm-pack-1-min.jpg',
    'https://wwwguide2freecom2c262.zapwp.com/q:i/r:1/wp:1/w:1/u:https://www.guide2free.com/wp-content/uploads/2018/11/nike-3.png',
  ]

  const arrayImage2 = [
    'https://i.pinimg.com/originals/99/29/51/9929514ed514a922f3e3339894627306.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-al-rihla/banner2-alrihla.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-mutator-pack/banner.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-predator-edge/banner.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-inflight/banner.jpg',
    'https://s3-eu-west-1.amazonaws.com/unisport-forever-paths/campaign/adidas-ucl-dragon/Thumbnail-713x509px.jpg',
    'https://www.futbolemotion.com/imagescontenidos/lanzamientos/adidas-thunder-storm/banner.jpg',
    'https://www.soccerbible.com/media/58012/thunderstorm-pack-1-min.jpg',
    'https://wwwguide2freecom2c262.zapwp.com/q:i/r:1/wp:1/w:1/u:https://www.guide2free.com/wp-content/uploads/2018/11/nike-3.png',
  ]

const Slider = ({intervalSlider}) => {

    const [images, setImages] = useState()
    const sliderContainer = useRef()

    const prevent = () => {
      const sliderBoxes = sliderContainer.current.children
      const lastSlider  = sliderBoxes[sliderBoxes.length -1]
      sliderContainer.current.insertBefore(lastSlider, sliderBoxes[0])
      sliderContainer.current.style.transition = 'none'

      const width = lastSlider.offsetWidth
      sliderContainer.current.style.transform = `translateX(-${width}px)`

      setTimeout(() => {
        sliderContainer.current.style.transition = 'transform .5s ease-out'
        sliderContainer.current.style.transform = `translateX(0)`;
        
			}, 30);
      
        clearInterval(intervalSlider.current)
        intervalSlider.current = setInterval(()=> {
          next()
        }, 3500)
    }
  

    const next = useCallback( () => {

      const firstSlide  = sliderContainer.current.children[0]

      sliderContainer.current.style.transition = 'transform .5s ease-out'

      const width = firstSlide.offsetWidth
      sliderContainer.current.style.transform = `translateX(-${width}px)`
    
			const transition = () => {
        // Reiniciamos la posicion del Slideshow.
				sliderContainer.current.style.transition = 'none';
				sliderContainer.current.style.transform = `translateX(0)`;
        
				// Tomamos el primer elemento y lo mandamos al final.
				sliderContainer.current.appendChild(firstSlide);

				sliderContainer.current.removeEventListener('transitionend', transition);
			}

      sliderContainer.current.addEventListener('transitionend', transition)
     /* clearInterval(intervalSliderSlider.current)
      intervalSliderSlider.current = setInterval(()=> {
        next()
      }, 3500)*/
      clearInterval(intervalSlider.current)
      intervalSlider.current = setInterval(()=> {
        next()
      }, 3500)
    }, [])


    useEffect(() => {
      const width = window.innerWidth
      if(width > 500){
        setImages(arrayImage2)
      } else {
        setImages(arrayImage)
      }
      intervalSlider.current = setInterval(()=> {
          next()
        }, 4000)
      
    }, [])

  return (
    <div className='slider'>
        <div className='slider__container' ref={sliderContainer}>
            {
                images?.map((img, index )=> {
                  return(
                    <div className='slider__container__box' key={index} id={`box-${index}`}>
                        <img className='slider__img' 
                            src={img}
                            alt="imagen" />  
                     </div>)
                })
            }
        </div>
        <button onClick={next} className='slider__btn-next'>
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <button onClick={prevent} className='slider__btn-prevent'>
          <i className="fa-solid fa-angle-left"></i>
        </button>
    </div>
  )
}

export default Slider