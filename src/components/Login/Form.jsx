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

//import '../../utils/firebase.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

import { getAuth, signInWithPopup, TwitterAuthProvider,  GithubAuthProvider, FacebookAuthProvider, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


const firebaseConfig = {
  apiKey: "AIzaSyAXLiHGR02CtLcNX00O99yTThKvaFuU82M",
  authDomain: "ecommerce-react-c05d7.firebaseapp.com",
  projectId: "ecommerce-react-c05d7",
  storageBucket: "ecommerce-react-c05d7.appspot.com",
  messagingSenderId: "506533743807",
  appId: "1:506533743807:web:e6ba6bf0be78f38e37ca0a",
  measurementId: "G-YBSXMNS243"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

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
      axios.post('http://localhost:3000/api/v1/auth/login', login)
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
      console.log('oobjc', userCreate)
      axios.post('http://localhost:3000/api/v1/auth/register', userCreate)
        .then(res => {
            axios.post('http://localhost:3000/api/v1/auth/login', login)
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


  const authGoogle = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(credential)
        console.log(result)
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error)
      });
  }


  const authGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

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
      <div className='login__fb' onClick={authGithub}>
        <i className="fa-brands fa-facebook"></i>
        <span>Continuar con <b>Github</b></span>
      </div>
      <div className='login__google' onClick={authGoogle}>
        <i className="fa-brands fa-google"></i>
        <span>Continuar con <b>google</b></span>
      </div>
    </article>
  )
}

export default Form
