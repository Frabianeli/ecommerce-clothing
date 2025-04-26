import React, { useState } from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setAdmin } from '../../store/slices/admin'
import { setCart } from '../../store/slices/cart'
import {setSearch} from '../../store/slices/search'
import './styles/headerScreen.css'
import { useLocation } from "react-router-dom"

const HeaderScreen = ({userLogged, setUserLogged}) => {

  const { register, reset, handleSubmit } = useForm()
  

  const navbar = useRef()
  const search = useRef() 


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const products = useSelector(state => state.product)
  const cart =  useSelector(state => state.cart)



  const toggle = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  const openSearch = () => {
    search.current.classList.toggle('header__search-open')
  }

  const submitSearch = (data) => {
    const value = data.search.toLowerCase()
    search.current.classList.toggle('header__search-open')
    navigate(`/products?search=${value}`)
    reset()
  }

  const signOff = () => {
    localStorage.removeItem('token')
    dispatch(setCart([]))
    setUserLogged(false)
    navigate('/login')
    dispatch(setAdmin(false))
    window.scrollTo(0, 0) 
  }
  

const [open, setOpen] = useState(false);

const handleMouseEnter = () => {
  setOpen(true);
};

const handleMouseLeave = () => {
  setOpen(false);
};
const location = useLocation().pathname;




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
                <NavLink onClick={() =>{ window.scrollTo(0, 0)}}
                  to={'/cart'}
                  className={({ isActive }) =>
                    isActive
                      ?
                      'navbar__link navbar__link-cart navbar__link-active'
                      :
                      'navbar__link navbar__link-cart'}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Cart</p>
                  {
                    cart?.cart_products?.length > 0 &&
                    <span className='navbar__link__amount'
                    style={{
                      background: location === '/cart' ? 
                      'white' : 'crimson',
                      color: location === '/cart' ? 
                      'crimson' : 'white',
                    }}>
                      {
                        cart.cart_products.length
                      }
                    </span>
                  }
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

                  <NavLink onClick={() =>window.scrollTo(0, 0)}
                    to={'/login'}
                    className={({ isActive }) =>
                      isActive
                        ?
                        'navbar__link navbar__link-active'
                        :
                        'navbar__link'}
                    style={!userLogged ? {display: 'flex'} : {display: 'none'}}
                  >
                    <i className="fa-solid fa-user"></i>
                    <p>Login</p>
                  </NavLink>

                  <div className='navbar__link navbar__link-details' id='details'
                    style={!userLogged ? {display: 'none'} : {display: 'flex'}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className='details__link__user'>
                      <i className="fa-solid fa-user"></i>
                      {
                        open ?
                        <i className="fa-solid fa-caret-up caret-header"></i>
                        :
                        <i className="fa-solid fa-caret-down caret-header"></i>
                      }
                    {
                     open &&
                      <ul className='details__ul'
                        onMouseEnter={handleMouseEnter} 
                      >
                        <li onClick={() => {signOff(), toggle()}}>Cerrar sesion</li>
                      </ul>
                    }
                    </button>
                  </div>
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