import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import FilterSubList from './FilterSubList'

const FilterList = ({obj, index, className, includeByName , handleNameChange }) => {


    //const [query, setQuery] = useState('')
    //const {register, handleSubmit} = useForm()
    //const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const subCategory = searchParams.get('subcategory')
    //const location = useLocation()


    const indexCurrent =  subCategory ? index : index +1
  return (
    <li className='filter__menu__list__item'>
        <span className='btn-item'  onClick={() => className(indexCurrent)}>
                {obj.title}
            <i className="angle fa-solid fa-angle-down"></i>
        </span>
        <ul className='filter__sub__list' >
        {
            obj.array?.map(e => (
                       <FilterSubList key={e} e={e} obj={obj} handleNameChange={handleNameChange} includeByName={includeByName}/>
                    ))
        }
        </ul>
    </li>
  )
}

export default FilterList