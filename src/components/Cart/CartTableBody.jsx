import React from 'react'
import './style/cartTableBody.css'

const CartTableBody = ({product}) => {
    const count = 1
    const minus= () =>{
        1
    }
    const plus= () =>{
        2
    }
    const change = () => {
        3
    }

  return (
    <>
    
        <tr className='tbody__tr'>
            <td className='td__img'>
                <div className='td__img__container'>
                    <img className='img' src={product.images[0]} alt="" />
                </div>
            </td>
            <td className='td__info'>
                <div className='td__info__container'>
                    <h2>{product.title}</h2>
                    <h3>S/ {product.price}.00</h3>
                    <h4>Talla: 48</h4>
                    <button className='td__info__container__delete'>
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
                            value={count ?count:''} 
                                onChange={(e) => change(e)}
                        />
                        <button className='td__quantity__container__btn' onClick={plus}>
                                <i className="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <p className='td__quantity__price__total'>S/ {product.price * count}.00</p>
            </td>
            <td className='td__price__total'>
                <p className='price-total'>S/ {product.price * count}.00</p>
            </td>
            <td className='td__talla'>
                <p>42</p>
            </td>
        </tr>
        
    </>
  )
}

export default CartTableBody