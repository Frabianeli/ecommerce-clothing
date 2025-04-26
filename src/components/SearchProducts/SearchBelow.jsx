import React from 'react'
import SearchFilter from './SearchFilter'
import SearchProduct from './SearchProduct'

const SearchBelow = ({showFilter, filter }) => {
    


  return (
    <section className={filter ? 'search__below search__below-open' : 'search__below'}>
      <SearchFilter 
        showFilter={showFilter}
        filter={filter}
        />
      <SearchProduct cart={true}/>
    </section>
  )
}

export default SearchBelow