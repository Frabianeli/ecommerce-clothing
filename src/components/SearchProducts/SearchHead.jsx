import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style/searchHead.css'
import { setProduct } from '../../store/slices/products'
import { useParams, useSearchParams, NavLink, useNavigate, Link, Navigate } from 'react-router-dom'

const SearchHead = ({showFilter}) => {
    
    const dispatch = useDispatch()
    const [ orderMenuOpen, setOrderMenuOpen] = useState(false)

    const product = useSelector(state => state.product)
    const [searchParams] = useSearchParams()
    const { name } = useParams()

    const subCategory= searchParams.get('subcategory')

    const menuOpen =  () => {
        if(!orderMenuOpen){
            setOrderMenuOpen(true)
        }
    }

    const menuClose = () => {
        if(orderMenuOpen){
            setOrderMenuOpen(false)
        }
    }
    const orderByPriceMin = (e) => {
        e.stopPropagation()
        const array = [...product]
        const sort = array.sort((a, b) => (Number(a.price) - Number(b.price)))
        console.log('sort', sort)
        dispatch(setProduct(sort))
        menuClose()
    }

    const orderByPriceMax = (e) => {
        e.stopPropagation()
        const array = [...product]
        const sort = array.sort((a, b) => (Number(b.price) - Number(a.price)))
        dispatch(setProduct(sort))
        menuClose()
    }

    function compararPorMarcaConOrdenOriginal(a, b) {
        if (a.brand.name < b.brand.name) {
          return -1;
        }
        if (a.brand.name > b.brand.name) {
          return 1;
        }
        // Si las marcas son iguales, mantener el orden original
        return 0;
      }

    const orderByBrand = (e) => {
        e.stopPropagation()
        const array = [...product]
        const sort = array.sort(compararPorMarcaConOrdenOriginal)
        dispatch(setProduct(sort))
        menuClose()
    }

    const orderByTitle = (e) => {
        e.stopPropagation()
        const array = [...product]
        console.log(array)
        const sort = array.sort((a,b) => {
            const titleA = a.title.toUpperCase()
            const titleB = b.title.toUpperCase()

            if (titleA < titleB) {
                return -1;
              }
            if (titleA > titleB) {
            return 1;
            }
            // Si las marcas son iguales, mantener el orden original
            return 0;
        })
        dispatch(setProduct(sort))
        menuClose()
    }

    const orderByTitleMenorToMajor = (e) => {
        e.stopPropagation()
        const array = [...product]
        console.log(array)
        const sort = array.sort((a,b) => {
            const titleA = a.title.toUpperCase()
            const titleB = b.title.toUpperCase()

            if (titleB < titleA) {
                return -1;
              }
            if (titleB > titleA) {
            return 1;
            }
            // Si las marcas son iguales, mantener el orden original
            return 0;
        })
        dispatch(setProduct(sort))
        menuClose()
    }

    const orderByNewestProduct = (e) =>{
        e.stopPropagation()
        const array = [...product]
        const sort = array.sort((a,b) => {
            if(b.createdAt < a.createdAt){
                return -1
            } else if ( b.createdAt > a.createdAt){
                return +1
            } else {
                return 0
            }
        })
        console.log('sort', sort)
        dispatch(setProduct(sort))
        menuClose()
    }

    const listNavigation = useRef()
    const navigate = useNavigate()

    const preventLink = () => {
        const link = listNavigation.current.children[listNavigation.current.children.length -2].firstChild.name
        navigate(link)
    }
  return (
    <div className='search__head'>
        <ul className='list-navigation' ref={listNavigation}>
            <li className='list-navigation__item'>
                <button className='btn__former-navigation' onClick={preventLink}>
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
            </li>
            <li className='list-navigation__item'>
                <NavLink to={'/'} onClick={() => window.scrollTo(0, 0)}
                    name='/'
                    className={({ isActive }) =>
                    isActive
                      ?
                      'navigation__link-active navigation__link'
                      :
                      'navigation__link'}
                  >
                    Home
                </NavLink>
            </li>
            <li className='list-navigation__item'>
                <NavLink to={'/products'} onClick={() => window.scrollTo(0, 0)} name='/products'
                    className={({ isActive }) =>
                    isActive && !subCategory
                      ?
                      'navigation__link-active navigation__link'
                      :
                      'navigation__link'}
                >
                    Productos
                </NavLink>
            </li>
            {
                name &&
                <li className='list-navigation__item'>
                    <NavLink to={`/category/${name}`} onClick={() => window.scrollTo(0, 0)}
                        name={`/category/${name}`}
                        className={({ isActive }) =>
                        isActive && !subCategory
                          ?
                          'navigation__link-active navigation__link'
                          :
                          'navigation__link'}
                     >
                        {name} 
                    </NavLink>
                </li>
            }
            {
                subCategory &&
                <li className='list-navigation__item'>
                    <NavLink to={`/category/${name}/?subcategory=${subCategory}`} aria-current='page' onClick={() => window.scrollTo(0, 0)}
                        name={`/category/${name}/?subcategory=${subCategory}`}
                        className='navigation__link'
                        style={{color: 'crimson'}}
                    >
                        {subCategory} 
                    </NavLink>
                </li>
            }
       </ul>
       <div className='search__head__menu'>
            <div className='search__head__menu__buttons'>
                <button className='btn__menu' onClick={showFilter}>
                    <i className="fa-solid fa-filter"></i>
                    <p>Filtrar</p>
                </button>
                <div className='btn__menu'
                    onMouseLeave={menuClose}
                    onMouseEnter={menuOpen}
                >
                    <i className="fa-solid fa-shuffle"></i>
                    <p>Ordenar</p>
                    {
                        orderMenuOpen ?
                        <i className='fa-solid fa-caret-up'></i>
                        :
                        <i className='fa-solid fa-caret-down'></i>

                    }
                    <div className={orderMenuOpen ? 'search__head__menu__order order-open' : 'search__head__menu__order' }
                        >
                        <ul className='order__list'>
                            <li className='order__list__item' onClick={orderByPriceMin}>Precio más bajo</li>
                            <li className='order__list__item' onClick={orderByPriceMax}>Precio más alto</li>
                            <li className='order__list__item' onClick={orderByNewestProduct}>Lo más nuevo</li>
                            <li className='order__list__item' onClick={orderByBrand}>Marca</li>
                            <li className='order__list__item' onClick={orderByTitle}>A-Z</li>
                            <li className='order__list__item' onClick={orderByTitleMenorToMajor}>Z-A</li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                product.length > 0 &&
                <h2 className='search__head__menu__title'>Resultados de búsqueda: ({product.length})</h2>
            }
        </div>
    </div>
  )
}

export default SearchHead