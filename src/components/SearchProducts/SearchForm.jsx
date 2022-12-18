import React from 'react'

const SearchForm = ({header}) => {
  return (
    <div className='header__search header__search-open'>
        <button  className='header__search__btn-open'>X</button>
        <form className='header__search__form'
            
          >
          <input type="text" className='input__header__search'/>
          <button className='btn__header__search'>Buscar</button>
        </form>
      </div>
  )
}

export default SearchForm