import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products'
import Loading from '../Shared/Loading'
import SearchProduct from './SearchProduct'
import './style/searchProductCard.css'



const SearchScreen = ({intervalSlider}) => {

    const search = useSelector(state => state.search)
    const isLoading = useSelector(state => state.isLoading)
    const admin = useSelector(state => state.admin)
    const dispatch = useDispatch() 

    clearInterval(intervalSlider.current)

    useEffect(() => {

      dispatch(getAllProducts())

    }, [search])

    
  return (
    <div className='product__screen'>
      {
        search.length > 0 &&
        <h2 className='product__screen__title'>Resultados de búsqueda:</h2>
      }
      {
        admin &&
        <button>crear productos</button>
      }
      {
        isLoading ?
          <Loading />
          :
          <SearchProduct
            cart={true}
            />
      }
    </div>
  )
}

export default SearchScreen
