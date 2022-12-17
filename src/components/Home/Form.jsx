import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Login from '../Login'
import Card from '../Card'


const Form = () => {

    const [create, setCreate] = useState(false)
    const [products, setProducts] = useState()
  
    useEffect(() => {
      axios.get('http://localhost:3000/api/v1/products')
               .then(res => setProducts(res.data.products))
               .catch(err=> console.log(err))
    }, [])
  
    const toggle = () => {
      setCreate(create ? false : true)
    }
  
    const toggleP = () => {
      return toggle()
    }
    
    const btnImg = () => {
      axios.get('http://localhost:3000/api/v1/products/img/ver')
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
  
  console.log(products)

  return (
    <div className='form'>
        <h3>Products</h3>
        <button onClick={btnImg}>VER IMG</button>
        <button onClick={toggleP} className='Create-product'>Crear Product</button>
        <section className='Container-product'>
            {
            products?.map((data)=> (
                <Card data={data} 
                  key={data.id}
                />
                ))
            }
        </section>
        {
            create &&
            <Login/>
        }
    </div>
  )
}

export default Form