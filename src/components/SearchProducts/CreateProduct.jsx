import { current } from '@reduxjs/toolkit'
import axios from 'axios'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { set, useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { getConfig } from '../../utils/getConfig'
import './style/createProduct.css'

const CreateProduct = ({intervalSlider}) => {

    const [categories, setCategories] = useState()
    const { register, handleSubmit,reset,} = useForm()
    const [filesCurrent, setFilesCurrent] = useState([])


    clearInterval(intervalSlider.current)
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/products/categories')
            .then(res => setCategories(res.data.categories))
            .catch(err => console.log(err))
    }, [])

    console.log('categories' ,categories)

    console.log(filesCurrent)
    const onSubmit = (data) => {
        const { files, ...newData } = data
        const newProduct = new FormData()
        for (let i = 0; i < filesCurrent.length; i++) {
            newProduct.append('files', filesCurrent[i])
        }
        newProduct.append('product', JSON.stringify(data))
        axios.post('http://localhost:3000/api/v1/products/', newProduct, getConfig())
            .then(res => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1400,
                    width: '200px',
                    color: '#184219',
                    text: 'Se agrego correctamente',
                    iconColor: '#4eb723',
                    background: 'rgb(23 57 66)',
                })
            })
            .catch(err => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1400,
                    width: '200px',
                    color: 'white',
                    iconColor: 'rgb(237 4 4)',
                    text: 'error intente de nuevo',
                    background: 'rgb(104 2 2)',
                })
            })
    }

    const captureImg = (e) => {
        const filesValue = e.target.files
        console.log(filesValue)
        const arrayFile = []
        for (let i = 0; i < filesValue.length; i++) {
            const copy = [ ...filesCurrent,filesValue[i]]
            setFilesCurrent(copy)
        }
    }
        

    console.log('filesCurrent', filesCurrent)

    return (
        <section className='create__product__screen'>
            <div className='create__product__container'>
                <h3 className='create__product__container__title'>Crear producto</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='create__product__form'>
                    <input type="text" className='create-input' placeholder='titulo' {...register("title")} required />
                    <textarea cols="30" rows="5" placeholder='descripción' {...register("description")} required></textarea>
                    <input type="text" className='create-input' placeholder='precio' {...register("price")} required />
                    <input type="number" className='create-input' placeholder='stock' {...register("stock")} required />
                    <select className='select' {...register("categoryId")} required>
                        {
                            categories?.map(category => (
                                <option key={category.id}
                                    value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>¡
                    <input className='input-file' type="file"  onChange={captureImg}  multiple='4' required/>
                    <div className='create__product__container-img'>
                        {
                            filesCurrent.length > 0 &&
                            filesCurrent.map(file =>(
                                <img  key={file.name} src={URL.createObjectURL(file)} alt={file.name} />
                            ))
                        }
                    </div>
                    <button className='create__product__btn'>Envuar</button>
                </form>

            </div>
        </section>
    )
}

export default CreateProduct