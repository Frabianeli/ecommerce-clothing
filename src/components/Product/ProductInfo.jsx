import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { getConfig } from '../../utils/getConfig'
import './styles/productInfo.css'


const ProductInfo = ({product}) => {

    const [indexSize, setIndexSize] = useState(0)
    const [count, setCount] = useState(1)

    const arrayTalla = [39,40,42,41,43]

    const tallas = arrayTalla.sort((a, b) => a - b)

console.log(product)
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

    const addCart = () => {
        const cart = {
            cartTotalPrice: product.price,
            productId: product.id,
            quantity: count,
            totalPrice: product.price 
        }

        if(product.stock > 1){
        axios.post('https://ecommerce-rom.onrender.com/api/v1/cart/me', cart, getConfig())
        .then(res =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                //title: 'Se agrego al carrito',
                showConfirmButton: false,
                timer: 1400,
                width: '200px',
                color: 'white',
                // iconColor: 'red',
                text: 'Se agrego correctamente',
                background: 'rgb(23 57 66)',
              }),
            console.log(res)
        })
        .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        console.log(tallas[indexSize])
    }, [indexSize])


  return (
    <div className='product-info'>
        <h2 className='product-info__title'>{product.title}</h2>
        <h2 className='product-info__price'>S/{product.price}.00</h2>
        <p className='product-info_descrip'>{product.description}</p>
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
            <button onClick={addCart} className='product-info__btn-cart'>
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