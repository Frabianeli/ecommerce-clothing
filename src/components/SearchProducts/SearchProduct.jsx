import React from 'react'
import SearchProductCard from './SearchProductCard'
import puma2 from '../../assets/pum_portada_2.jpg'
import './style/searchProductCard.css'
import { useSelector } from 'react-redux'



const SearchProduct = ({cart, productsHome}) => {

  const products = useSelector(state => state.product)
  const search = useSelector(state => state.search)
  console.log(search)
  const conditionSearch = () => {
    if(search.length){
      return search.map((e, i )=>
              <SearchProductCard 
                cart={cart}
                key={i}
                product={e}
              />)
    } else if (products.length){
      return products.map((e, i )=>
              <SearchProductCard 
                cart={cart}
                key={i}
                product={e}
              />)
    }
  }
  console.log(productsHome)
  return (
    <section className='container-product'>
        {
          productsHome &&
          productsHome.map((e, i )=>
          <SearchProductCard 
            key={i}
            product={e}
          />)
        }
        { 
          !productsHome &&
          conditionSearch()
        }
    </section>
  )
}

export default SearchProduct