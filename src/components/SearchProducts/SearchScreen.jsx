import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Shared/Loading'
import SearchProduct from './SearchProduct'
import './style/searchScreen.css'
import SearchHead from './SearchHead'
import SearchBelow from './SearchBelow'
import axios from 'axios'
import { Navigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import search, { setSearch } from '../../store/slices/search'
import useCheckingParams from './Hooks/useCheckingParams'



const SearchScreen = ({intervalSlider}) => {

  const [filter, setFilter] = useState(false)
  const  [ searchParams ] = useSearchParams()
  const { isLoading, name } = useCheckingParams()
   //const isLoading = useSelector(state => state.isLoading)
    const admin = useSelector(state => state.admin)
    //const product = useSelector(state => state.product)
    //const dispatch = useDispatch() 
    //const [searchParams] = useSearchParams()
    //const search = searchParams.get('search')
    clearInterval(intervalSlider.current)

    const showFilter = () => setFilter(!filter)

   /* useEffect(() => {
      if(search){
        const copyProduct = [...product]
        if(copyProduct.length){
          const newSearch = search[0].toUpperCase() + search.slice(1)
          const filter = copyProduct.filter(e => e.title.includes(newSearch))
            dispatch(setSearch(filter))
        }
      }
    }, [search, product])
*/    

    /*useEffect(() => {
      console.log('FILTER-X-CATEGORY')
      const pathParts = location.pathname.split('/')
      console.log(location.pathname)
      if(pathParts.length > 2){
        const category = pathParts[pathParts.length -1]
        const get = async () => {
          const result = await axios.get(`http://localhost:3000/api/v1/products/categories/${category}`)
          console.log('RSULT', result)
          const { all_brands, all_sizes, sub_categories } = result.data
          const copyFilterArray = {...filterArray}
          copyFilterArray.brand = all_brands
          copyFilterArray.size = all_sizes
          const subCategories = sub_categories.map(e => e.name)
          copyFilterArray.subCategories = subCategories
          setFilterArray(copyFilterArray)
        }
        //get()
      }
    }, [location, product])*/

    const subCategory = searchParams.get('subcategory')
    console.log(subCategory)
    console.log('IS--LOADING---', isLoading)

    const styleLoading = {
      position: 'fixed',
      zIndex: '50',
      top: '0',
      left: '0',
      width: '100%',
      height: '100vh',
      backgroundColor: '#3232324d',
    }
console.log('SALUDOS DESDE SEARCH-SCRENN---JSX')
    const style = useRef()
    //const pathName = location.pathname.includes('/products') || location.pathname.includes('/category')
    console.log('isLoading', isLoading)
    const product = useSelector(state => state.product)
    console.log('products', product)
  return (
    <div className='product__screen'>
      {
        admin &&
        <button>crear productos</button>
      }
      {
        isLoading &&
        <Loading styleLoading={product ? styleLoading : {}}/>
      }

      {
        product &&
        <>
          <SearchHead 
              showFilter={showFilter}
          />
          <SearchBelow
              showFilter={showFilter}
              filter={filter}
          />
        </>        
      }
    </div>
  )
}

export default SearchScreen
