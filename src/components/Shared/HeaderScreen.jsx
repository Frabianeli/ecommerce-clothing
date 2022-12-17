import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/headerScreen.css'


const HeaderScreen = () => {

  const navbar = useRef()

  const toggle = () => {
    navbar.current.classList.toggle('navbar-open')
  }


  return (
    <div className='row-header'>
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
        <button className='header__button' onClick={toggle}>
          <i className="fa-solid fa-bars"></i>
        </button>
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
                  to={'/cart'}
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
            <li onClick={toggle} className='navbar__item'>
              <NavLink
                to={'/search'}
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
  )
}

export default HeaderScreen