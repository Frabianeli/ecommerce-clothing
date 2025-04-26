import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Navigate, json, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { getAllProducts, setProduct } from "../../../store/slices/products";
import { setIsLoading } from "../../../store/slices/isLoading";
import { setFilterItem } from "../../../store/slices/filterItem";
import Cookies from "js-cookie";

const useCheckingParams = () => {

    const [isLoading, setIsLoading] = useState(true)
    const { type, name } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const getAllfilter = async (filter) => {

        //const querySeparator = filter.split('&')
        //const map = querySeparator.map(e => e.split('='))
        //const newQuery = Object.fromEntries(map)
        //console.log('newQuery', newQuery)
        setIsLoading(true)
        console.log('DESDE FILTER')
        try {
            
            const result = await axios.get(`http://localhost:3000/api/v1/products?${filter}`)
            const { products,filtered, ...obj } = result.data
    
            const newArray = []
                for (const e in filtered) {
                    if(e.includes('all_categories') && filtered[e] !== null){
                        const element = { array: filtered[e], name: 'category' , title: 'categoría'}
                        newArray.push(element)
                    }else if(e.includes('sub_categories') && filtered[e] !== null){
                        const element = { array: filtered[e], name: 'subcategory' , title: 'subcategoría'}
                        newArray.push(element)
                    } else  if(e.includes('brand') && filtered[e] !== null){
                        const element = { array: filtered[e], name: 'brand' , title: 'marca'}
                        newArray.push(element)
                    } else if(e.includes('size') && filtered[e] !== null){
                        const element = { array: filtered[e], name: 'size' , title: 'talla'}
                        newArray.push(element)
                    }
                }
                console.log('newArray', newArray)
            dispatch(setProduct(products))
            dispatch(setFilterItem(newArray))
            Cookies.set('price', JSON.stringify(obj.price))
        } catch (error) {
            navigate(-1)
        }
        setIsLoading(false)
    }

    const getByType = async () => {
        setIsLoading(true)
        try {
            const getAllCategories = await axios.get('http://localhost:3000/api/v1/products/categories')
            const filterByCategory = getAllCategories.data.categories.filter(e => e.name  == name)
            const params = `category=${filterByCategory[0].name}`
            const getByFilter = await axios.get(`http://localhost:3000/api/v1/products?${params}`)
            const { products, filtered, ...obj } = getByFilter.data
            console.log(getByFilter, filtered)
            const newArray = []
            for (const e in filtered) {
                if(e.includes('sub_categories') && filtered[e] !== null){
                    const element = { array: filtered[e], name: 'subcategory' , title: 'subcategoría'}
                    newArray.push(element)
                } else  if(e.includes('brand') && filtered[e] !== null){
                    const element = { array: filtered[e], name: 'brand' , title: 'marca'}
                    newArray.push(element)
                } else if(e.includes('size') && filtered[e] !== null){
                    const element = { array: filtered[e], name: 'size' , title: 'talla'}
                    newArray.push(element)
                }
            }
            console.log(newArray)
            dispatch(setProduct(products))
            dispatch(setFilterItem(newArray))
            //setFilterArray(newObj)
        } catch  (error) {
            navigate('/')
        }
        setIsLoading(false) 
        console.log('acabe eñ get')
    }

    useEffect(() => {
    if (!type && location.search == '') {
        console.log('GET--3')
        const getAll = async () => {
            setIsLoading(true)
            const obj = {}
            try {     
                console.log('INITIAL TRY')
                console.log('ABAJO DE PRODUCTS')
                await axios.get('http://localhost:3000/api/v1/products/categories')
                    .then(res => obj.all_categories = res.data.categories.map(e => e.name))
                    .catch(err => console.log(err))
                await axios.get('http://localhost:3000/api/v1/products/brand')
                    .then(res => obj.all_brands = res.data.brands.map(e => e.name))
                await axios.get('http://localhost:3000/api/v1/size')
                    .then(res => obj.all_sizes = res.data.map(e => e.name))
                const newArray = []
                console.log({obj})
                for (const e in obj){
                    if(e.includes('categories') && obj[e] !== null){
                        const element = { array: obj[e], name: 'category' , title: 'categoría'}
                        newArray.push(element)
                    }else if(e.includes('sub_categories') && obj[e] !== null){
                        const element = { array: obj[e], name: 'subcategory' , title: 'subcategoría'}
                        newArray.push(element)
                    } else  if(e.includes('brand') && obj[e] !== null){
                        const element = { array: obj[e], name: 'brand' , title: 'marca'}
                        newArray.push(element)
                    } else if(e.includes('size') && obj[e] !== null){
                        const element = { array: obj[e], name: 'size' , title: 'talla'}
                        newArray.push(element)
                    }
                }
                console.log({newArray})
                dispatch(setFilterItem(newArray))
            } catch (error) {
                console.log({error})
            }
            await dispatch( getAllProducts())
            setIsLoading(false)
            console.log('ACABE EL PRODUCTS USEEFECT')
        }
        const query = location.search.slice(1)
        if(!query){
            getAll()
            console.log('SE EEJCUTA GETALL')
        } else {
            getAllfilter(query)
            
        }
        console.log('SFINAL GET-3')
    } else if (type === 'category' && location.search == '') {
        getByType()
        console.log('ACABE EL TYPE')
    } else if (type === 'brand') {
        //const fn = () => (setIsLoading(false))
        // Si el tipo es 'brand', obtén los productos de la marca 'name'
        axios.get('http://localhost:3000/api/v1/brand')
            .then(async(res) => {
                const filter = res.data.brand.filter(e => e.name == name)
                if(filter.length){
                    const name = `brand=${filter[0].name}`
                    await getAllfilter(name)
                } else{
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
            .finally(() => console.log('FINALLY- ALL BRAND'))//setIsLoading(false))
    }else if (type && type !== 'category' && type !== 'brand'){
        navigate('/')
    }
    console.log('FINISH USEEFECT')
    }, [type, name, location.search]);

const [searchParams, setSearchParms] = useSearchParams()

    useEffect(() =>{
        localStorage.setItem('queryParams', location.search)
        console.log(location.search)
        if(location.search.length){
            console.log('search')
            localStorage.setItem('loading', 'true')
            const searchQuery = location.search.slice(1).replace(/%2C/g, ',')
            console.log('useefect', searchQuery)
            const query = type ? `${type}=${name}&${searchQuery}` : searchQuery
            console.log('query-USEEFECR', query)
            getAllfilter(query)
            console.log('DPESUES DEL GET')
        }
    }, [location.search])

    /*
    useEffect(() => {
        if(location.pathname.includes('products')){
        console.log('GET--3')
        const obj = {}
        axios.get('http://localhost:3000/api/v1/size')
            .then(res => obj.size = res.data.map(e => e.name))
        axios.get('http://localhost:3000/api/v1/brand')
            .then(res => obj.brand = res.data.brand.map(e => e.name))
        axios.get('http://localhost:3000/api/v1/products/categories')
            .then(res => obj.categories = res.data.categories.map(e => e.name))
            .catch(err => console.log(err))
            setFilterArray(obj)
            }
    }, [location])
    */
return {
    isLoading,
    name,
    
}
}

export default useCheckingParams