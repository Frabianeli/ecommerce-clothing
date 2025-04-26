import React, { useEffect, useState } from 'react'
import './styles/sliderProduct.css'
import Loading from '../Shared/Loading'
import { useParams } from 'react-router-dom'

const SliderProduct = ({images}) => {

    const [indexCurrent, setIndexCurrent] = useState(0)
    
    const {name} = useParams()

    useEffect(() => {
        if(indexCurrent !== 0){
            setIndexCurrent(0)
        }
    }, [name])

    const next = () => {
        const nextIndex = indexCurrent +1
        if(nextIndex === images.length){
            setIndexCurrent(0)
        } else{
            setIndexCurrent(nextIndex)
        }
    }
    
    const prevent = () => {
        if(indexCurrent === 0) {
            setIndexCurrent(images.length-1)
        } else {
            setIndexCurrent(indexCurrent -1)
        }
    }

  return (
    <section className='slider__product'>

        <div className='slider__product__current'>
            {
                images.length ?
                images?.map((img, index) => (
                    <img 
                        src={img.url} 
                        alt='product'
                        key={index}
                        className={
                            indexCurrent === index ?
                                `slider__imgs opacity-active` :
                                'slider__imgs'
                            }
                    />)
                )
                :
                <Loading />
            }
            <button className='slider__product__btn-next' onClick={next}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className='slider__product__btn-prevent' onClick={prevent}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
        </div>

        <div className='slider__product__box'>
            {
                images?.map((img, index) => (
                    <div onClick={() => setIndexCurrent(index)} 
                    key={index}
                    className={indexCurrent === index ? `slider__box box-active` : 'slider__box'}
                    >
                        <img 
                            src={img.url} 
                            alt="product" 
                            className='slider__box__imgs'
                        />
                    </div>)
                )
            }
        </div>
    </section>
  )
}

export default SliderProduct