import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './style/form.css'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { setAdmin } from '../../store/slices/admin'

const Form = ({setUserLogged}) => {

  const [createUser, setCreateUser] = useState(false)

  const {register, handleSubmit, reset} = useForm()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const SwalAlert = (icon, color, iconColor, text, background) => {
    Swal.fire({
      position: 'center',
      icon: icon,
      timer: 2000,
      showConfirmButton: false,
      width: '200px',
      color: color,
      iconColor: iconColor,
      text: text,
      background: background,
    })
  }


  const submit = (data) => {
    const login ={
      email: data.email,
      password: data.password
    }
    if(data.email.length && data.password.length > 3){
      axios.post('https://ecommerce-rom.onrender.com/api/v1/auth/login', login)
        .then(res => {
          setUserLogged(true)
          localStorage.setItem('token',res.data.user)
          SwalAlert('success','#f5f5f5','#4eb723','Credenciales validas',' #184219')
          navigate('/cart') 
          if(res.data.response){
            dispatch(setAdmin(true))
          } else{
            dispatch(setAdmin(false))
          }
        })
        .catch(err => SwalAlert('error','white','rgb(237 4 4)','Credenciales invalidas','rgb(104 2 2)'))
    } else {
      alert('Minimo 6 caracteres')
    }
    reset()
  }


  useEffect(()=>{
    reset()
  },[createUser])
  
  const submitRegister = (data) =>{
    
    const userCreate = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    const {name, ...login} = userCreate
    console.log(login)
    if(data.email.length && data.password.length > 6  && data.name.length){
      axios.post('https://ecommerce-rom.onrender.com/auth/register', userCreate)
        .then(res => {
            axios.post('https://ecommerce-rom.onrender.com/api/v1/auth/login', login)
              .then(res => {//#f5f5f5  #184219 #389f0e
                setUserLogged(true)
                localStorage.setItem('token',res.data.user)
                SwalAlert('success','#f5f5f5','#4eb723','Se creo correctamente',' #184219')
                navigate('/cart')
                dispatch(setAdmin(false))
              })
              .catch(err => console.log(err))
          })
        .catch(err => {
          SwalAlert('error','white','rgb(237 4 4)','El email ya existe','rgb(104 2 2)')
        })
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
      <form onSubmit={handleSubmit(!createUser ? submit : submitRegister)} className='form__login'>
        {
          createUser &&
          <>
            <label htmlFor="name">nombre:</label>
            <input type="name" id='name' {...register("name")}/>
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
