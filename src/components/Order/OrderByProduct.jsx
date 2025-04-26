import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const OrderByProduct = () => {

    const { id } = useParams()
    console.log(id)
  return (
    <section className=''>
        <h1>
            HOLA DESDE EL ELEMENTO GLOBAL PATH
        </h1>
    </section>
  )
}

export default OrderByProduct