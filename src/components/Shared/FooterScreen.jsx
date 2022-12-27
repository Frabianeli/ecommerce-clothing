import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/footerScreen.css'


const FooterScreen = () => {
    
  return (
    <footer className='footer'>
        <h4 className='footer__title'>Rome Clothing</h4>
        <div className='footer__logos'>
            <div className='footer__logos__container'>
                <a href="https://pe.linkedin.com/"
                    target='target_blank'>
                <span className='footer__logo__item'>
                    <i className="fa-brands fa-linkedin-in"></i>
                </span>
                </a>
                <a href="https://eduardo-dev.netlify.app/" 
                    target='target_blank'>
                    <span className='footer__logo__item'>
                        <i className="fa-solid fa-briefcase"></i>
                    </span>
                </a>
                <a href="https://github.com/Frabianeli/"
                    target='target_blank'>
                    <span className='footer__logo__item'>
                        <i className="fa-brands fa-github"></i>
                    </span>
                </a>
            </div>
        </div>
        <span className='footer__line'></span>
        <ul className='footer__links'>
            <li className='footer__links__item'>
                <NavLink to={'/'} onClick={() =>window.scrollTo(0, 0)}
                className={({ isActive }) =>
                isActive
                  ?
                  'footer__links__item__link footer__link-active'
                  :
                  'footer__links__item__link'}
                >
                    Inicio
                </NavLink>
            </li>
            <li className='footer__links__item'>
                <NavLink to={'/Cart'} onClick={() =>window.scrollTo(0, 0)}
                className={({ isActive }) =>
                isActive
                  ?
                  'footer__links__item__link footer__link-active'
                  :
                  'footer__links__item__link'}
                >
                    Tu carrito
                </NavLink>
            </li>
            <li className='footer__links__item'>
                <NavLink to={'/shopping'} onClick={() =>window.scrollTo(0, 0)}
                className={({ isActive }) =>
                isActive
                  ?
                  'footer__links__item__link footer__link-active'
                  :
                  'footer__links__item__link'}
                >
                    Tus compras
                </NavLink>
            </li>
        </ul>
        <p className='footer__text'>&copy; Rene Izacupe Coello 2022</p>
    </footer>
  )
}

export default FooterScreen