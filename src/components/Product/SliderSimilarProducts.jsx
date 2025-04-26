import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardSimilarProducts from './CardSimilarProducts'
import axios from 'axios'

const SliderSimilarProducts = ({ data, setProduct }) => {

    const sliderSimilar = useRef()
    const sliderSimilarContainer = useRef()
  
    const [indexCurrent, setIndexCurrent] = useState(1)
    const [buttonOpen, setbuttonOpen] = useState()
    
    useEffect(() => {        
        const elementWidth = sliderSimilar.current.offsetWidth
        const elementChildren = sliderSimilar.current.children.length
        const elementChildrenWidth = sliderSimilar.current.children[0]?.offsetWidth
        setbuttonOpen(
            elementWidth +10
            < 
            elementChildrenWidth * elementChildren
            )
        }, [data])

    const next = () => {
        const children = sliderSimilar.current.children
        let widthCard = children[0].offsetWidth
        console.log(children)
        const cardExcel = sliderSimilar.current.offsetWidth * 0.12
        const widthNext = widthCard * indexCurrent
        const widthTotalCurrent = sliderSimilar.current.offsetWidth + widthNext
        const widthTotal = widthCard * children.length
        sliderSimilar.current.style.transition = `transform .5s ease`
        sliderSimilar.current.style.transform = `translateX(-${widthNext}px)`;
        if (widthTotal <= widthTotalCurrent - cardExcel) {
            console.log('soy mayor')
            sliderSimilar.current.style.transform = `translateX(${0}px)`;
            setIndexCurrent(1)
        } else {
            setIndexCurrent(indexCurrent + 1)
        }

    }

    const prevent = () => {

        if (indexCurrent !== 1) {
            const firstCard = sliderSimilar.current.children[0]
            sliderSimilar.current.style.transition = `transform .5s ease`
            const widthCard = firstCard.offsetWidth
            const preventWidth = widthCard * (indexCurrent - 1) - widthCard
            sliderSimilar.current.style.transform = `translateX(-${preventWidth}px)`
            setIndexCurrent(indexCurrent - 1)
        }
    } 
   
    return (
        <div className='slider-similar-product' ref={sliderSimilarContainer}>
            <div className='slider-similar-product__comtainer' ref={sliderSimilar}>
                {
                    data?.map(e =>
                        <CardSimilarProducts
                            setProduct={setProduct}
                            key={e.id}
                            data={e}
                        />
                    )
                }
            </div>
            {
                buttonOpen
                &&
                <>
                    <button onClick={next} className='slider-similar-product__btn__next'>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                    <button onClick={prevent} className='slider-similar-product__btn__prevent'>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                </>
            }
        </div>
    )
}

export default SliderSimilarProducts