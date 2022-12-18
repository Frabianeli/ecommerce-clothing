import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {setSearch} from '../../store/slices/search'
import './styles/headerScreen.css'


const HeaderScreen = () => {

  const navbar = useRef()
  const search = useRef() 
  console.log(search)
  const dispatch = useDispatch()

  const toggle = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  const openSearch = () => {
    search.current.classList.toggle('header__search-open')
  }

  const submitSearch = (e) => {
    e.preventDefault()
    const value = e.target.search.value
    search.current.classList.toggle('header__search-open')
    dispatch(setSearch(value))
  }


  return (
    <div className='row-header'>
        <div className='row-header-screen'>
        <header className='header'>
          <h1 className='header__title'>
              <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    isActive
                      ?
                      'navbar__link-active header__title__link'
                      :
                      'header__title__link'}
                >
                Rome clothing
                </NavLink>
          </h1>
          <div className='header__buttons'>
            <button onClick={openSearch}
              className='header__buttons__btn-search'
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className='header__buttons__btn-bars' onClick={toggle}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <nav className='navbar' ref={navbar}>
            <ul className='navbar__list'>
              <li onClick={toggle} className='navbar__item'>
                <NavLink
                  to={'/cart'}
                  className={({ isActive }) =>
                    isActive
                      ?
                      'navbar__link navbar__link-active'
                      :
                      'navbar__link'}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Cart</p>
                </NavLink>
              </li>
              <li onClick={toggle} className='navbar__item'>
                <NavLink
                    to={'/login'}
                    className={({ isActive }) =>
                      isActive
                        ?
                        'navbar__link navbar__link-active'
                        :
                        'navbar__link'}
                  >
                    <i className="fa-solid fa-user"></i>
                    <p>Login</p>
                  </NavLink>
              </li>
              <li onClick={toggle} className='navbar__item'>
                <NavLink
                  to={'/shopping'}
                  className={({ isActive }) =>
                    isActive
                      ?
                      'navbar__link navbar__link-active'
                      :
                      'navbar__link'}
                  >
                  <i className="fa-solid fa-bag-shopping"></i>
                  <p>Compras</p>
                </NavLink>
              </li>
              <li onClick={openSearch} className='navbar__item'>
                <NavLink
                  to={'/products'}
                  className={({ isActive }) =>
                    isActive
                      ?
                      'navbar__link navbar__link-active'
                      :
                      'navbar__link'}
                  >
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <p>Search</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className='header__search' ref={search}>
        <button onClick={openSearch} className='header__search__btn-open'>X</button>
        <form className='header__search__form'
            onSubmit={submitSearch}
          >
          <input type="text" className='input__header__search' name='search'/>
          <button className='btn__header__search'>Buscar</button>
        </form>
      </div>
    </div>
  )
}

export default HeaderScreen