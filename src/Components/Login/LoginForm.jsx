import React, { useState ,useRef} from 'react'
import{ useNavigate }from 'react-router-dom'

import { IoClipboardOutline } from "react-icons/io5";
export default function LoginForm() {
  const ref = useRef();
  const navigate = useNavigate();
  const [email ,setEmail] = useState('');
  const [password ,setPassword] = useState('');
  const handleSubmit =() =>{
    if(email===''){
          alert('enter Email');
          return;
    }
    if(password!='@loveMovies'){
      alert('wrong password');
      return;
    }
    navigate('/home');
  }
  const copyClipborad =() =>{
    navigator.clipboard.writeText('@loveMovies');
     ref.current.style.display ='block';
     setPassword('@loveMovies');
     setTimeout(() =>{
      ref.current.style.display ='none';
     },700);
  }
  return (
    <div className='login_box'>
        <h2>Login </h2>
        <p>password : @loveMovies <IoClipboardOutline className='svg' size={30} onClick={copyClipborad}  color='#205250'/></p>
        <span ref={ref}>Copied</span>
       
        <div className="input_box">
            <label htmlFor='#email'>Email</label>
            <input onChange={(e) =>setEmail(e.target.value)} value={email} type='email'placeholder='enter email' id = 'email'/>
        </div>
        <div className="input_box">
            <label htmlFor='#password'>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} id = 'email' placeholder='minimum 8 characters'/>
        </div>
        <div className="input_box2">
           
            <input type='checkbox' id = 'emai'/>
            <label htmlFor='#emai'>Remember me</label>
        </div>
        <div className='button_box'>

       
        <button onClick={handleSubmit}>Log in</button>
        <button>Sign in with <img src='https://freesvg.org/img/1534129544.png'></img></button>
        </div>
    </div>
  )
}
