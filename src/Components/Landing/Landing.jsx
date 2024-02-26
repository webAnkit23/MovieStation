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
  useEffect(() =>{
            document.body.style.overflow ='hidden';
    return () => {
      document.body.style.overflow ='scroll';
    }
  },[]);
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
             <h2>Come with me to a journey of  100 years of Cinema</h2>
            <p>This is a great plave to choose a movie that you want to watch today...</p>
            <p style={{color:'#050405',fontFamily :'cursive'}}>Thousand of movies ...Don't know what to watch.Come to <span>3/9</span> ..we got collections of movies that can help you narrow down your list based on your interaction with us.it contains details of almost all the best movies and TV shows ever been released .Filter it based on rating ,genre and a lot more ...Thank You for visiting this site</p>
            <p className='train_p'>Hurry up...take the train</p>
             </div>
        </div>
    </div>
  )
}
