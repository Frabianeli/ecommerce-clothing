import React from 'react'
import { useSelector } from 'react-redux'
import SearchProduct from './SearchProduct'
import './style/searchProductCard.css'



const SearchScreen = () => {

    const search = useSelector(state => state.search)
    console.log(search)
  return (
    <div>
        <div className='product__screen'>
          {
            search.length >2 &&
            <h2 className='product__screen__title'>Resultados de búsqueda: {search}</h2>
          }
          <SearchProduct
            cart={true}
            />
        </div>
    </div>
  )
}

export default SearchScreen