import React, { useState } from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setAdmin } from '../../store/slices/admin'
import { setCart } from '../../store/slices/cart'
import {setSearch} from '../../store/slices/search'
import './styles/headerScreen.css'


const HeaderScreen = ({userLogged, setUserLogged}) => {

  const { register, reset, handleSubmit } = useForm()
  const navbar = useRef()
  const search = useRef() 


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector(state => state.product)

  const toggle = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  const openSearch = () => {
    search.current.classList.toggle('header__search-open')
  }

  const submitSearch = (data) => {
    const value = data.search.toLowerCase()
    console.log(data.search)
    search.current.classList.toggle('header__search-open')
    const filter = products.filter(product => product.title.toLowerCase().includes(value))
    if(filter.length){
      dispatch(setSearch(filter))
    }
    navigate('/products')
    reset()
  }

  const signOff = () => {
    localStorage.removeItem('token')
    dispatch(setCart([]))
    setUserLogged(false)
    navigate('/login')
    dispatch(setAdmin(false))
  }
  


  return (
    <div className='row-header'>
        <div className='row-header-screen'>
        <header className='header'>
          <h1 className='header__title'>
              <NavLink onClick={() => window.scrollTo(0, 0)}
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
                <NavLink onClick={() => window.scrollTo(0, 0)}
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
                  to={'/shopping'} onClick={() =>window.scrollTo(0, 0)}
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
              <li onClick={openSearch} className='navbar__item navbar__item-hidden'>
                <button className='navbar__link'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <p>Search</p>
                </button>
              </li>
              <li onClick={()=> !userLogged && toggle()} 
                className='navbar__item'>
                { 
                  !userLogged ?
                  <NavLink onClick={() =>window.scrollTo(0, 0)}
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
                  :
                  <details className='details'>
                    <summary >
                      <i className="fa-solid fa-user"></i>
                      <i className="fa-solid fa-caret-down"></i>
                    </summary>
                    <ul className='details__ul'>
                      <li onClick={() => {signOff(), toggle()}}>Cerrar sesion</li>
                    </ul>
                  </details>
                }
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <div className='header__search' ref={search}>
        <button onClick={openSearch} className='header__search__btn-open'>X</button>
        <form className='header__search__form'
            onSubmit={handleSubmit(submitSearch)}
          >
          <input type="text" className='input__header__search' {...register("search")}/>
          <button className='btn__header__search'>Buscar</button>
        </form>
      </div>
    </div>
  )
}

export default HeaderScreen