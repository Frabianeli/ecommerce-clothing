import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCart } from '../../store/slices/cart'
import { getConfig } from '../../utils/getConfig'
import './style/cartTableBody.css'
import { useNavigate } from 'react-router-dom'

const URL = 'http://localhost:3000/api/v1/cart/me'

const CartTableBody = ({product, order}) => {

    const c = useRef()
console.log('PRODUCT---QUANTITY', product.quantity)
    const [count, setCount] = useState(product.quantity)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const change = (e) => {
        const value = Number(e.target.value)
        if(value < 100 && value >= 0){
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
/*
    const path = async () => {
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
 */   
    useEffect(() => {
            let ignore = false;
            console.log('IGNORE-ARRIBA', ignore)
            const update = {
                id : product.id,   
                quantity:  count,
                totalPrice: product.product.price * count
            }
            console.log('update object',update)
            axios.patch(URL, update, getConfig())
                .then(res =>{ 
                    console.log('IGNORE-THEN', ignore)
                    if (!ignore) {
                        console.log('ENTRE A GET ALL CART')
                        dispatch(getAllCart())
                      }
                })
                .catch(err => console.log(err))
            return () => {
                console.log('IGNORE-EN-EL-RETURN-ARRIBA', ignore)
                ignore = true;
                console.log('IGNORE-EN-EL-RETURN-ABAJO', ignore)
            };
    }, [count])

    const goToProduct = () => {
        navigate(`/products/${product.product.title}`)
    }

  return (
    <>
        <tr className='tbody__tr'>
            <td className='td__img'>
                <div className='td__img__container' onClick={goToProduct}>
                    <img className='img' src={product.product.products_imgs[0].url} alt="" />
                </div>
            </td>
            <td className='td__info'>
                <div className='td__info__container'>
                    <h2>{product.product.title}</h2>
                    <h3>S/ {product.product.price}.00</h3>
                    {
                        product.product_stock.product_size
                        &&
                        <h4>Talla: {product.product_stock.product_size.name}</h4>
                    }
                    {
                        !order ?
                        <button className='td__info__container__delete' onClick={deleteProduct}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        :
                        <h4 className='td__info__quantity'>Cantidad: {product.quantity}</h4>
                    }
                </div>
            </td>
            <td className='td__quantity'>
                <div className='td__quantity__container'>
                    {
                        !order ?
                        <div className='td__quantity__container__buttons'>
                            <button className='td__quantity__container__btn' onClick={minus}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                            <input type="number"  id="number"  
                                className='input__quantity' 
                                value={count ? count : ''} 
                                    onChange={(e) => change(e)}
                            />
                            <button className='td__quantity__container__btn' onClick={plus}>
                                    <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        :
                        <h4 className='td__quantity__title'>{product.quantity}</h4>
                    }
                </div>
                <p className='td__quantity__price__total'>S/ {product.totalPrice}.00</p>
            </td>
            <td className='td__price__total'>
                <p className='price-total'>
                    S/ {product.totalPrice}.00
                </p>
            </td>
            <td className='td__talla'>
                {
                    product.product_stock.product_size
                    ?
                    <p>{product.product_stock.product_size.name}</p>
                    :
                    <p>-</p>
                }
            </td>
        </tr>
        
    </>
  )
}

export default CartTableBody