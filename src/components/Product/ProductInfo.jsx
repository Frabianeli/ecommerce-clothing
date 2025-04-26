import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { getConfig } from '../../utils/getConfig'
import './styles/productInfo.css'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const ProductInfo = ({product, getProduct}) => {

 
    const [size, setSize] = useState()
    const [count, setCount] = useState(1)

    const  tallas = product?.product_stocks.sort((a, b) => a.product_size.name - b.product_size.name)


    const dispatch = useDispatch()

    const getSize = (obj) => {
            setSize(obj)
    }
    
    useEffect(() => {
       setSize(product.product_stocks[0])
    }, [product])

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
            productStockId: Object.keys(size).length ? size.id  : product.product_stocks[0].id,
            quantity: count,
            totalPrice: product.price * count 
        }

        const stock = Object.keys(size).length ? size.stock : product.product_stocks[0].stock 
        if(stock  > 1){
        axios.post('http://localhost:3000/api/v1/cart/me', cart, getConfig())
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

  
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const payment = () => {
        console.log('count', count)
        const { brand, product_stocks, ...newProduct } = product
        const obj = {
            id: Date.now().toString(),
            cartTotalPrice: count * product.price,
            cart_products: [{
                id:  Date.now().toString(),
                quantity: count,
                totalPrice: count * product.price,
                product: {...newProduct},
                product_stock: {...size} 
            }]
        }
        
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 10); 
        Cookies.set('data_checkouts', JSON.stringify(obj), { expires: expirationDate });
        localStorage.removeItem('cart_checkouts')
        scrollTo(0, 0)
        navigate(`/checkouts/verified`)
    }
    
  return (
    <div className='product-info'>
        <h2 className='product-info__title' style={
            {
            textTransform: 'uppercase',
            color: 'crimson'
            }
    }>{product?.brand.name}</h2>
        <h2 className='product-info__title'>{product?.title}</h2>
        {
            product?.stock <= 0 && 
            <div className='product-info__stock'>
                <h4 className='product-info__stock-title'>SIN STOCK</h4>    
            </div>
        }
        <h2 className='product-info__price'>S/{product?.price}.00</h2>
        <p className='product-info_descrip'>{product?.description}</p>
        {
            product?.product_stocks[0].product_size 
            &&
            <div className='product-info__talla'>
                <h3 className='product-info__container__talla__subtitle'>Tallas</h3>
                <div className='product-info__talla__container'>
                {
                    product?.product_stocks.map((e, index) => 
                        <button key={e.id}
                            onClick={() => getSize(e)}
                            className={
                                size && size.id  == e.id || !size && index == 0
                                 ?
                                `product-info__tallas talla-active` :
                                'product-info__tallas'
                        }>
                        {e.product_size.name}
                        </button>
                        )
                }   
                </div>
            </div>
        }
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
                    value={count} 
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
            <button onClick={addCart} className='product-info__btn-cart' disabled={product?.stock <= 0 ? true : false}>
               <span>Agregar al carrito</span>
            </button>
            <button onClick={payment} className='product-info__btn-buy' disabled={product?.stock <= 0 ? true : false}>
                <span>Comprar ahora</span>
            </button>
        </div>
    </div>
  )
}

export default ProductInfo