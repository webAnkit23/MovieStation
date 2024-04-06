import React, { useEffect } from 'react'
import './../Components/Login/Login.css'
import LoginForm from '../Components/Login/LoginForm';
import intr from '../assets/intr.mp4'

export default function LoginPage() {
  useEffect(() =>{
      document.body.style.overflow ='hidden';
      return () => document.body.style.overflow ='scroll';
  },[])
  return (
    <div className='login_container'>
       <video autoPlay loop muted >
              <source src={intr} type="video/mp4"/>
        </video>
       
       <div className='login_wrapper'>
              <LoginForm />
    </div>
    </div>
  )
}
