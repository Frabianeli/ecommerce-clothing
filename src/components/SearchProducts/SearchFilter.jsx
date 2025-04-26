import React, { useEffect, useRef, useState } from 'react'
import './style/searchFilter.css'
import axios from 'axios'
import { set, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../store/slices/search'
import { NavLink, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import FormFilter from './FormFilter'
import filterItem from '../../store/slices/filterItem'

const SearchFilter = ({showFilter, filter }) => {

    const location = useLocation()
    const { type, name } = useParams();
    const [ searchParams, setSearchParams ] = useSearchParams()
    const navigate = useNavigate()

   //const { all_categories, ...newFilterItem } = filterItem
    //console.log('products', products)
   // const category = !pathCategory && filterItem.length ? filterItem.shift() : null
    const subCategory = searchParams.get('subcategory')
        
    const objQuery = {
        //category: searchParams.get('category'),
        //subCategory: searchParams.get('subcategory'),
        size: searchParams.get('size'),
        brand: searchParams.get('brand'),
        price: searchParams.get('price')
    }
    console.log('objQuery', Object.values(objQuery))

    /*const filterSelect = () => {
        const filterItems = []
        for (const key in objQuery) {
            const element = objQuery[key]
            if (element) {
                if(element.includes(',')){
                    const split = objQuery[key].split(',')
                    split.map(e => filterItems.push(e))
                } else {
                    filterItems.push(element)
                }
            }
        }
        console.log(filterItems)
       return filterItems
    }*/


    const filterSelect = () => {
        const filterItems = []
        for (const [key, value] of searchParams.entries()) {
            console.log('element', key,value)
            if(key !== 'search'){
                if(value.includes(',')){
                    const split = value.split(',')
                    split.map(e => filterItems.push(e))
                } else {
                    filterItems.push(value)
                }
            }
        }
        console.log(filterItems)
       return filterItems
    }
    const local = location.search
    /*const cleanByName = (name) => {
        const querySplit = location.search.replace('?', '').split('&')
        const array = querySplit.map(e => e.split('='))
        const indexDelete = []
        console.log(querySplit)
        array.forEach((e, i) => {
            console.log('lement',e)
            const separator = e[1].split(',')
            console.log('separator', separator)
            const filter = separator.filter(e => e !== name.toString())
            console.log('filter', filter)
            if(filter.length){
                const newString = filter.join(',')
                array[i] = `${array[i][0]}=${newString}`
            } else {
                indexDelete.push(i)
            }
        })
        if(indexDelete.length){
            array.splice(indexDelete[0], 1)
        }
        console.log('array', array)
        const newQuery =  array.length ? `?${array.join('&')}` : ''
        console.log(newQuery)
        setQuery(newQuery)
    }*/

    const cleanByName = (name) => {
        const obj = {}
        for (const [ key, value ] of searchParams.entries()) {
            if(value.includes(name)){
                const split = value.split(',')
                const filter = split.filter(e => e !== name)
                if(filter.length){
                    obj[key] = filter.join(',')
                }
            } else{
                obj[key] = value
            }
        }
        const newQueryParams = new URLSearchParams(obj).toString()
        setSearchParams(newQueryParams)
    }

    //necesito otner la query
    // agregar quitar query
    // obtener los valores de la query

   console.log('constante', local)

    return (
    <div className={filter ? 'filter filter-show' : 'filter'}>
        <section className={filter ? 'filter__menu filter__menu-show' : 'filter__menu'}>
            <div className='filter__menu__head'>
                <span className="material-icons md-48">
                    tune
                </span>
                <p>Filtros</p>
                <button className='filter__menu__head__btn' onClick={showFilter}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            {
                name && subCategory &&
                <NavLink
                    to={`/${type}/${name}`}
                    className='filter__link'>
                        {name}
                </NavLink>
            }
            {
                name && !subCategory &&
                <h2 className='filter__menu__title'>{name}</h2>
            }
            {
                subCategory && <h2 className='filter__menu__title filter-subtitle'>{subCategory}</h2>
            }
            {
                filterSelect().length > 0 &&
                <div className='filter__menu__selected'> 
                    <h3>Filtro seleccionado </h3>
                    <button className='btn__clean__selected' onClick={() => setSearchParams('')}><i className="fa-solid fa-xmark mark__selected"></i></button>
                    <div className='filter__menu__selected__container'>
                        {
                            filterSelect().map((e,i) => (
                                 <span className='filter__selected' onClick={() => cleanByName(e)} key={i}>
                                    <p className='filter__selected__title'>{e}</p>
                                    <button className='btn__filter__selected'>
                                        <i className="fa-solid fa-xmark mark__selected"></i>    
                                    </button>    
                                </span>
                            ))
                        }
                    </div>
                </div>
            }
            <FormFilter />
        <h2>dentro del section</h2>
        </section>
        <h2>fuera del section</h2>
    </div>
  )
}

export default SearchFilter