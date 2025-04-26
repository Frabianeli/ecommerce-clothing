import React, { useContext, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import FilterList from './FilterList'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import FilterSubList from './FilterSubList'
import PriceRange from './PriceRange'

const FormFilter = () => {
    useEffect(()=> {
        console.log('-------USEEFECT--FORM-FILTER------')
    },[])
    const location = useLocation()
    const pathCategory = location.pathname.includes('category')
    const filterItem = useSelector(state => state.filterItem)
    const [searchParams, setSearchParams] = useSearchParams()
    const subCategory = searchParams.get('subcategory')

    const [ category, ...newArray ] = filterItem
    
    console.log(filterItem)

    const className = (index) => {
        const list = button.current.children[index].children[1]
        const containedClass = list.classList.contains('filter__sub__list-open')
        const element = button.current.children[index].children[0]
        if(!containedClass){
            list.classList.add('filter__sub__list-open')
            element.children[0].classList.add('fa-angle-up')
            element.children[0].classList.remove('fa-angle-down')
        } else  {
            list.classList.remove('filter__sub__list-open')
            element.children[0].classList.add('fa-angle-down')
            element.children[0].classList.remove('fa-angle-up')
        }   
    }

    const pathLink = (e) => {
        if(!pathCategory && location.search == ''){ 
            return `/category/${e}`
        }else if(pathCategory) {
            return `?${category.name}=${e}`
        }else if(location.search !== ''){
             return `${location.search}&${category.name}=${e}`
        }
    }



    const mover = (e) => {
        const client =  e.clientY + e.clientX;
        const positions =  position.x - position.y;
    }


    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState(30)
    const liner = useRef()
    const parentElement = useRef()

    const translate = {
        transform: `translateX(${position.x}px)`
    }
    const handleMouseDown = (e) => {
        const element = parentElement.current.offsetWidth
        const widthElement = liner.current.offsetWidth
        const left = (element - widthElement) / 2
        const result = e.clientX - left.toFixed(0)
      setIsDragging(true);
      console.log('clientX', e.clientX)
      if(result >= 15){
          setPosition({ x: result -15, y: e.clientY });
          // console.log(position)
      }
    };


    const handleMouseMove = (e) => {
        const element = parentElement.current.offsetWidth
        const widthElement = liner.current.offsetWidth
        const left = (element - widthElement) / 2
        const result = e.clientX - left.toFixed(0)
        console.log('position', position.x)
        console.log('client', e.clientX)
        console.log('bordes width', left)
        console.log('RESULT', result)
      if (isDragging & result >= 15) {
        const dx = e.clientX - 30 - position.x;
        const dy = e.clientY - position.y;
       /* console.log('MouseMove', e.clientX)
        console.log('position initial', position.x)
        console.log('DX', dx)*/
        const price =  500 / widthElement * result.toFixed(0)   
        console.log('widthElement',widthElement)
        console.log('price', price)
        setOffset(price.toFixed(0))
        setPosition({ x: result -15 , y: e.clientY });
        //updateElementPosition(dx, dy);
        //e.target.style.transform = `translateX(${position.x})`
    }
};
  
        //Cuando se sale el mouse del elemento
        const handleMouseUp = () => {
            setIsDragging(false);
            console.log('false')
        };
        
        const updateElementPosition = (dx, dy) => {
          // Aquí puedes actualizar la posición del elemento según tus necesidades.
          // Por ejemplo, podrías aplicar estilos de posición absoluta al elemento.
          // En este ejemplo, actualizaremos la posición en la consola.
          console.log('Delta X:', dx, 'Delta Y:', dy);
          
        };

        const button =  useRef()

        //const {register, handleSubmit} = useForm()

    
        const navigate = useNavigate()
    /*
        const handleNameChange = (e) => {
            const {name, value, checked} = e.target
            const values = `?${name}=${value}`
            const queryCurrent = query
            console.log('location.search', location.search)
            console.log('query', queryCurrent)
            console.log(checked)
            if(checked) {
                if(query && query.includes(name)){
                    console.log('if')
                    const newQuery = `${queryCurrent},${value}`
                    setQuery(newQuery)
                }  else {
                    console.log('else')
                    const newQuery = query ? `${queryCurrent}&${values.slice(1)}` : values
                    console.log(newQuery)
                    setQuery(newQuery)
                }
            }else {
                console.log('NO TIENE CHECKED')
                const searchParams = new URLSearchParams(queryCurrent)
                const queryParams = {}
                let count = 0
                for (const [ key, value ] of searchParams.entries()) {
                    queryParams[key] = value
                    count++
                }
                console.log(queryParams)
                console.log(name)
                const split = queryParams[name].split(',')
                console.log(split)
                console.log(count)
                if(count > 1 && split.length == 1){
                    console.log('iff')
                    const { [`${name}`]:pr, ...newObj } = queryParams 
                    const newQuery = new URLSearchParams(newObj).toString()
                    console.log(newQuery)
                    setQuery(`?${newQuery}`)
                }else if(split.length > 1 && count > 1){
                    const map = split.filter(e => e !== value )
                    queryParams[name] = map.toString()
                    const newQuery = new URLSearchParams(queryParams).toString()
                    console.log('queryParams', queryParams)
                    console.log('queryStrig', newQuery)
                    setQuery(`?${newQuery}`)
                } else {
                    console.log('else')
                    setQuery('')
                }
            }
        };
        */

        const handleNameChange = (e) => {
            const {name, value, checked} = e.target
            console.log(searchParams.get(name))
            const queryValue = searchParams.get(name)
            console.log('checked', checked)
            const getSizes = searchParams.get('size')?.split(',')
            const unique = getSizes?.every(e =>  newArray[1].array.includes(e))
            console.log('unique', unique)
            //console.log('newArray', newArray[1].array.include())

            if(!queryValue){
                searchParams.set(name, value)
                const URL = new URLSearchParams(searchParams).toString().replace('%2C', ',')
                setSearchParams(URL)
            } else if(queryValue){
                const arrValue = queryValue.split(',')
                const newArr = checked ?  [...arrValue, value] : arrValue.filter(e => e !== value)
                if(newArr.length){
                    searchParams.set(name, newArr.join(','))
                    setSearchParams(searchParams)
                } else {
                    searchParams.delete(name)
                    setSearchParams(searchParams)
                }
                console.log('arrvalue', newArr)
            }
        }


        const includeByName = (key, value) => {
            //const include = location.search.includes(name)
            const include = searchParams.get(key)?.includes(value)
            console.log('include', include)
            return include
        }

        console.log('FORM------FILTER---')

        console.log('newArray', newArray)
        console.log()

  return (
    <form className='form__filter'>
                <ul className='filter__menu__list' ref={button}>
                    {
                        !subCategory &&
                        <li className='filter__menu__list__item'>
                            <span className='btn-item'  onClick={() => className(0)}>
                                    Category
                                <i className="angle fa-solid fa-angle-down"></i>
                            </span>
                               <ul className='filter__sub__list filter__sub__list-open' >
                            {
                            category?.array?.map(e => (
                                        <li key={e} className='filter__sub__list__item' onClick={() => console.log('click en sub list item')}>
                                            <NavLink
                                                to={pathLink(e)}
                                                className='item__link'>
                                                <span>{e}</span>
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </NavLink>
                                        </li>
                                    ))
                            }
                            </ul>
                        </li>
                    }
                    {
                        !pathCategory ?
                        newArray?.map((e,i) =>(
                            <FilterList key={e.title} index={i} handleNameChange={handleNameChange} includeByName={includeByName} obj={e} className={className} />
                        )) :
                        newArray?.map((e,i) =>(
                            <FilterList key={e.title} index={i} handleNameChange={handleNameChange} includeByName={includeByName} obj={e} className={className} />
                        ))
                    }

                    <li className='filter__menu__list__item'>
                        <span className='btn-item'  onClick={() => className(button.current?.children.length -1)}>
                                price
                            <i className="angle fa-solid fa-angle-down"></i>
                        </span>
                        <ul className='filter__sub__list center' ref={parentElement}>
                            <div className='price__liner'>
                                <div className='price__liner__white' ref={liner}></div>
                                <div className='price__liner__red' style={translate}></div>
                                <div className='price__round price__round-left'
                                    style={{transform: `translateX(${position.x}px)`}}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                    onMouseLeave={handleMouseUp}
                                    onAuxClick={() => console.log('MANTENER CLICKKKKKKKKKKKKKKKK')}
                                    >   
                                </div>
                                <div className='price__round price__round-right'  onClick={mover}></div>
                                <p className='price__offset'>S/ {offset}.00</p>
                                <p className='price__limit'>S/ {offset}.00</p>
                            </div>
                        </ul>
                    </li>
                </ul>
                <PriceRange />
                <div className='filter__menu__send'>
                    <button className='filter__menu__send__btn'>Aplicar</button>
                </div>
            </form>
  )
}

export default FormFilter