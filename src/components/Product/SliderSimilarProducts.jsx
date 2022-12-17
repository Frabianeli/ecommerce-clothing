import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CardSimilarProducts from './CardSimilarProducts'

const SliderSimilarProducts = ({ data }) => {

    const sliderSimilar = useRef()
    const sliderSimilarContainer = useRef()

    const [indexCurrent, setIndexCurrent] = useState(1)
    const [buttonOpen, setbuttonOpen] = useState()


    let array = [1, 2, 3, 4, 5,6,7,8,9]

    const next = () => {

        const children = sliderSimilar.current.children
        let widthCard = children[0].offsetWidth
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


    useEffect(() => {
        setbuttonOpen(
            sliderSimilar.current?.offsetWidth + 10
            <
            sliderSimilar.current?.children[0].offsetWidth * array.length
        )
    },[])

    return (
        <div className='slider-similar-product' ref={sliderSimilarContainer}>
            <div className='slider-similar-product__comtainer' ref={sliderSimilar}>
                {
                    array.map(e =>
                        <CardSimilarProducts
                            key={e}
                            data={data[0]}
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