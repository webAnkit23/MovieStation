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
    if(window.innerWidth<550||window.innerWidth>1800){
      navigate('/home');
    }
    document.body.style.overflow ='hidden';
    return ()  => document.body.style.overflow ='scroll';
 },[])
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
            <p style={{color:'#050405',fontFamily :'cursive'}}>Thousand of movies ...Don't know what to watch.Come to <span style={{color:'white'}}>3/9</span> MovieStation is your go-to destination for discovering and enjoying the latest movie trailers. With a sleek and intuitive React app interface, MovieStation allows users to effortlessly search for their favorite movies, with the added convenience of infinite scrolling for endless browsing. Whether you're looking for the hottest blockbusters or hidden gems, MovieStation has you covered, providing an immersive experience for film enthusiasts of all kinds.</p>
            <p className='train_p'>Hurry up...take the train</p>
             </div>
        </div>
    </div>
  )
}
