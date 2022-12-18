import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = () => {

    const [files, setFiles] = useState()
 
    const create = (e)  => {
        e.preventDefault()
        console.log(files)
        const data = new FormData()
        for (let i = 0; i < files.length; i++) {
            data.append('files', files[i])
        }
        
        const newProduct =  {
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            stock: e.target.stock.value,
            categoryId: e.target.category.value
        }
        data.append('product', JSON.stringify(newProduct))

        axios.post('http://localhost:3000/api/v1/products/', data)
            .then(res => {alert("se creo correctamente"),
                console.log(res)})
            .catch(err => console.log(err))

        console.log(newProduct)
        form.reset()
    }

    const captureImg = (e) => {
        const files = e.target.files
        setFiles(files)
        console.log(files[0])
    }

    const createProduct = () => {
        
        const data = new FormData()
        data.append('foto', foto.fileRaw)
        console.log(data)
        axios.post('localhost:3000/api/v1/upload', data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

  return (
    <div className='Login'>
        <form id="form" onSubmit={create} className='form'>
            <input type="text" placeholder='title' name='title'/>
            <input type="text" placeholder='description' name='description'/>
            <input type="text" placeholder='price' name='price'/>
            <input type="text" placeholder='stock' name='stock'/>
            <input type="text" placeholder='category' name='category'/>
            <input type="file" name='file' onChange={captureImg}  accept='*' multiple />
            <button >Crear</button>
        </form>
    </div>
  )
}

export default Login