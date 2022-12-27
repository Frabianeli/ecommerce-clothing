import React from 'react'
import { NavLink } from 'react-router-dom'
import Form from './Form'


const LoginScreen = ({intervalSlider, setUserLogged}) => {
  clearInterval(intervalSlider.current)


  return (
    <div className='login__screen'>
        <Form 
          setUserLogged={setUserLogged}
          />
    </div>
  )
}

export default LoginScreen