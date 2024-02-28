import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import './Landing.css';
import { useNavigate } from 'react-router-dom';
export default function Landing() {
  const [input ,setInput] = useState('');
  const navigate = useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(input.length==0)return;
    navigate(`/search/${input}`) 
  }
  const handleVisit=()=>{
   
    navigate('/home');
  }
  return (
    <div className="landing">
        <div className="landing_container">
        <h1>PlatForm <span>3/9</span></h1>
        <form onSubmit={handleSubmit}>
            <div className="inputBox">
                  <input type='text' value={input} placeholder='Enter Keywords...' onChange={(e) => setInput(e.target.value)}></input>
                      <button type='submit'> <GoSearch size={30}/></button>   
            </div>
        </form>
             <button className='visit' onClick={handleVisit}>Visit 3/9 <IoIosArrowDroprightCircle  /></button>
             <div className="landing_about">
             <h2>Come with me to a journey of  150 years of Cinema</h2>
            <p id='train_p'>In the vast landscape of online entertainment, where choices seem limitless,Platform 3/9 emerges as a beacon of liberation for movie enthusiasts. Platform 3/9, the go-to platform for free online movie streaming, has transformed the way we consume cinematic content. Let's delve into the world of 3/9 and explore the unique features that set it apart.</p>
            <p id='train_p' className='hideP'>Navigating through 3/9 is a breeze, thanks to its user-friendly interface. this website understands the importance of a seamless user experience, allowing viewers to effortlessly search, discover, and indulge in their favorite movies. Whether you're a tech-savvy cinephile or a casual viewer, 3/9 makes the process as smooth as possible.</p>
             </div>
        </div>
    </div>
  )
}
