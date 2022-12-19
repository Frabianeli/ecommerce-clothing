import React from 'react'
import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import './style/form.css'

const Form = () => {

  const [createUser, setCreateUser] = useState(false)

  const {register, handleSubmit, reset} = useForm()

  const submit = (data) => {
    const user ={
      email: data.email,
      password: data.password
    }
    if(data.email.length && data.password.length > 6){
      console.log(user)
      alert(JSON.stringify(user))
    } else {
      alert('Minimo 6 caracteres')
    }
    reset()
  }

  const submitRegister = (data) =>{
    
    const userCreate = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    if(data.name.length && data.email.length && data.password.length > 6){
      alert(JSON.stringify(userCreate))
    } else {
      alert('Minimo 6 caracteres')
    }
    reset()
  }

  const btnCreateUser = () => setCreateUser(!createUser)

  return (
    <article className='login'>
      <div className='login__head'>
        <i className="fa-solid fa-user"></i>
        <h2 className='login__head__title'>
          {createUser ? 'Crear usuario' : 'Ingresar'}
        </h2>
      </div>
      <form onSubmit={handleSubmit(submit)} className='form__login'>
        {
          createUser &&
          <>
            <label htmlFor="name">nombre:</label>
            <input type="email" id='name' {...register("name")}/>
          </>
        }
        <label htmlFor="email">email:</label>
        <input type="email" id='email' {...register("email")}/>
        <label htmlFor="password">password:</label>
        <input type="password" id='password' {...register("password")}/>
        <button className='form__login__submit'>Enviar</button>
      </form>
      <div className='login__create-user'>
        <p>
          {
            !createUser ? 'No tengo cuenta: ' : 'Tengo una cuenta: '
          }
        </p>
        <p className='login__create-user-btn' onClick={btnCreateUser}>
          {
            !createUser ? 'crear cuenta' : 'iniciar sesión'
          }
        </p>
      </div>
      <div className='login__fb'>
        <i className="fa-brands fa-facebook"></i>
        <span>Continuar con <b>facebook</b></span>
      </div>
      <div className='login__google'>
        <i className="fa-brands fa-google"></i>
        <span>Continuar con <b>google</b></span>
      </div>
    </article>
  )
}

export default Form