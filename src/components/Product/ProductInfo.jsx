import React, { useState } from 'react'
import { useEffect } from 'react'
import './styles/productInfo.css'


const ProductInfo = ({data}) => {

    const [indexSize, setIndexSize] = useState(0)
    const [count, setCount] = useState(1)

    const tallas = data[0].tallas.sort((a, b) => a - b)


    const getTalla = (index) => {
        setIndexSize(index)
        
    }
    
    const plus = () => {
        if(count < 99){
            setCount(count +1)
        }
    } 

    const minus = () => {
        if(count > 1) {
            setCount(count -1)
        }
    }

    const change = (e) => {
        const value = Number(e.target.value)
        if(value < 100 && value >= 0){
            setCount(value)
        }
    } 

    useEffect(() => {
        console.log(tallas[indexSize])
    }, [indexSize])

  return (
    <div className='product-info'>
        <h2 className='product-info__title'>{data[0].title}</h2>
        <h2 className='product-info__price'>S/{data[0].price}.00</h2>
        <p className='product-info_descrip'>Jean corte regular con diseño de doble color en las piernas</p>
        <div className='product-info__talla'>
            <h3 className='product-info__container__talla__subtitle'>Tallas</h3>
            <div className='product-info__talla__container'>
            {
                tallas.map((talla, index) => 
                    <button key={index}
                        onClick={() => getTalla(index)}
                        className={
                            indexSize  == index ?
                            `product-info__tallas talla-active` :
                            'product-info__tallas'
                    }>
                    {talla}
                    </button>
                    )
            }   
            </div>
        </div>
        <div className='product-info__quantity'>
        <h3 className='product-info__quantity__subtitle'>Cantidad</h3>
            <div className='product-info__container-quantity'>
                <button className='btn' onClick={minus}>
                    <span>
                    <i className="fa-solid fa-minus"></i>
                    </span>
                </button>
                <input type="number"  id="number"  
                    className='input-quantity' 
                    value={count ?count:''} 
                     onChange={(e) => change(e)}
                />
                <button className='btn' onClick={plus}>
                    <span>
                        <i className="fa-solid fa-plus"></i>
                    </span>
                </button>
            </div>
        </div>
        <div className='product-info__container-button'>
            <button className='product-info__btn-cart'>
               <span>Agregar al carrito</span>
            </button>
            <button className='product-info__btn-buy'>
                <span>Comprar ahora</span>
            </button>
        </div>
    </div>
  )
}

export default ProductInfo