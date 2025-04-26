import React from 'react'

const FilterSubList = ({ e, obj, handleNameChange, includeByName }) => {
  console.log('OBJ-NAME',obj)
  return (
    <li className='filter__sub__list__item' >
        <label className='label__checkbox__filter'  htmlFor={e}>
            <input  id={e} className='input__checkbox__filter' type="checkbox" 
            value={e} name={obj.name}  onChange={(e) => handleNameChange(e)} checked={includeByName(obj.name, e) ? true :  false}/>
            <span className='checkbox'>
                <i className="fa-solid fa-check"></i>
            </span>
            <span>{e}</span>
        </label>
    </li>
  )
}

export default FilterSubList