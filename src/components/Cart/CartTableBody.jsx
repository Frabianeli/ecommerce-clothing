import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCart } from '../../store/slices/cart'
import { getConfig } from '../../utils/getConfig'
import './style/cartTableBody.css'

const URL = 'https://ecommerce-rom.onrender.com/api/v1/cart/me'

const CartTableBody = ({product}) => {

    const c = useRef()

    const [count, setCount] = useState(product.quantity)
    
    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.isLoading)

    const plus = () => {
        if(count < 9){
            setCount(count +1)
        }
    } 

    const minus = () => {
        if(count > 1) {
            setCount(count -1)
        }
    }
    console.log(count)
    const change = (e) => {
        const value = Number(e.target.value)
        if(value < 10 && value >= 0){
            setCount(value)
        }
    } 

    const deleteProduct = () => {
        axios.delete(`${URL}/${product.id}`, getConfig())
            .then(res => { console.log(res),
                dispatch(getAllCart())
            })
            .catch(err => console.log(err))
    }
    console.log(c.current)
    useEffect(() => {
        if(c.current){
            async function path(){
                const update = {
                    id : product.id,   
                    quantity:  count,
                    totalPrice: product.product.price * count
                }
                await axios.patch(URL, update, getConfig())
                    .then(res =>{ 
                        dispatch(getAllCart())
                    })
                    .catch(err => console.log(err))
            }
            path()
            console.log(product)
        }
        c.current = count
    }, [count])


  return (
    <>
        <tr className='tbody__tr'>
            <td className='td__img'>
                <div className='td__img__container'>
                    <img className='img' src={product.product.products_imgs[0].url} alt="" />
                </div>
            </td>
            <td className='td__info'>
                <div className='td__info__container'>
                    <h2>{product.product.title}</h2>
                    <h3>S/ {product.product.price}.00</h3>
                    <h4>Talla: 48</h4>
                    <button className='td__info__container__delete' onClick={deleteProduct}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
            <td className='td__quantity'>
                <div className='td__quantity__container'>
                    <div className='td__quantity__container__buttons'>
                        <button className='td__quantity__container__btn' onClick={minus}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <input type="number"  id="number"  
                            className='input__quantity' 
                            value={count ? count: ''} 
                                onChange={(e) => change(e)}
                        />
                        <button className='td__quantity__container__btn' onClick={plus}>
                                <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <p className='td__quantity__price__total'>S/ {product.totalPrice}.00</p>
            </td>
            <td className='td__price__total'>
                <p className='price-total'>
                    S/ {product.totalPrice}.00
                </p>
            </td>
            <td className='td__talla'>
                <p>42</p>
            </td>
        </tr>
        
    </>
  )
}

export default CartTableBody