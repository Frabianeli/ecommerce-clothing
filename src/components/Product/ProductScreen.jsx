import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'
import SliderProduct from './SliderProduct'
import './styles/productScreen.css'
import Loading from '../Shared/Loading'

const products = [
    { images : ['https://www.innvictus.com/medias/IN-DD8959-100-1.jpg?context=bWFzdGVyfGltYWdlc3w3NDA3MnxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDk1LzExMjE2ODA5NTkwODE0LmpwZ3xlZGQ4NGZkZDQ4ZjVjYzA4YjllZDg5MDhhMzVlYWM4MmYyMjNlZTk1Yjg5NWFjMzI0YmVlNTZjZmFhNTRjMGY5',
                'https://www.innvictus.com/medias/IN-DD8959-100-4.jpg?context=bWFzdGVyfGltYWdlc3w3Mzc0M3xpbWFnZS9qcGVnfGltYWdlcy9oYzYvaDM4LzExMjE2Nzc4NjU3ODIyLmpwZ3xjZTYxMGMxNGFmZmM0ZmNkZmUxZmI1ZWEwNmIwM2QxZjRlZTRkMzU1NDVlNDE0ZjAwYTFkNjgwYzg1ZTkwODRm',
                'https://www.innvictus.com/medias/IN-DD8959-100-3.jpg?context=bWFzdGVyfGltYWdlc3w3MTgyOHxpbWFnZS9qcGVnfGltYWdlcy9oMTAvaDgxLzExMjE2NzU1NTg5MTUwLmpwZ3w4ZTkyNTE2NDE1NzJkMGYzNmQxNjJjMGMyYjFmNTJjOGRkODdiNWVmY2IyNWM5Nzk5ZTRkYmFiMjc3NGFhZGI1'
        ],
        title: 'Nike air max white',
        price: 350,
        stock: 100,
        description: 'nike air max color blanco unisex',
        tallas: ['39','40', '41', '42'],
        categoria: 'tenis'
    }
]

const productScreen = ({intervalSlider}) => {
  
  const [ product, setProduct ] = useState()
  const [ filter, setFilter ] = useState()
  const [ otherBrand, setOtherBrand ] = useState()

  const search = useSelector(state => state.search)
  const allProducts = useSelector(state => state.product)
  clearInterval(intervalSlider.current)
  
  const { name } = useParams()
  const navigate = useNavigate()
  
  const filterProduct = (product) => {
    axios.get(`http://localhost:3000/api/v1/products/filter?brand=${product.brand.name}`)
    .then(res => {
        const result = res.data.products.filter(e => e.id !== product.id)
        console.log('RESULT', result)
        setFilter(result)
    })
    .catch(err => console.log(err))
  }
  
  
  const getProduct = () => {
  axios.get(`http://localhost:3000/api/v1/products/title?title=${name}`)
         .then( res => {
              setProduct(res.data)
              console.log(res.data)
              filterProduct(res.data)
          })
          .catch(() => navigate('/'))
}
useEffect(() => {
     getProduct()
  },[name]) 


  useEffect(() => {
    if(allProducts && product){
      console.log('allProducts', allProducts)
      const differenetBrand = allProducts.filter(e => e.brand.name !== product.brand.name)
      setOtherBrand(differenetBrand)
    }
  }, [product, allProducts])
  
  return (
    <section className={!product ? 'product-info-screen product-info-screen-loading' : 'product-info-screen'}>
      {
        !product &&
          <Loading />
      }
      {
        product &&
        <>
          <div className='product-info-screen__container'>
            <SliderProduct images={product?.products_imgs}/>
            <ProductInfo product={product} />
          </div>
          {
            filter && filter[0] &&
            <SimilarProducts setProduct={setProduct} data={filter} title={'Productos similares :'}/>
          }
          {
            otherBrand && otherBrand[0] &&
            <SimilarProducts setProduct={setProduct}  data={otherBrand} title={'Productos de otra marca :'}/>
          }
        </>
      }
    </section>
  )
}

export default productScreen