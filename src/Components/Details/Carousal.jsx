import React, { useRef } from 'react'
import './Carousal.css'

import { useSelector } from 'react-redux';
import profilePhoto from '../../assets/profilePhoto.webp'
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
export default function Carousal({members,heading,loading}) {
    const parent = useRef(null);
    const handleleftClick =() =>{
      parent.current.scrollLeft -= window.innerWidth; 
    }
    const handleRightClick =() =>{
      parent.current.scrollLeft += window.innerWidth;
    }
    if(loading){
      return (<div>Loading</div>)
    }
  return (
     <div className='carousal'>
       <h3 className='cast'>{heading}</h3>
     <div className="carousalContainer" >
         <IoArrowBackCircle size={30} className='leftArrow arrow'  onClick={handleleftClick}/>
          <div className="carousalBox" ref={parent} >
           {members?.map((item,i) =>{
                  return <CarousalBox item = {item} key ={i}></CarousalBox>
           })}
          </div>
          <IoArrowForwardCircleSharp size={30} className='rightArrow arrow' onClick={handleRightClick}/>
     </div>
     </div>
  )
}




 function CarousalBox({item}) {
 const {url} = useSelector(state => state.homeReducer);
 let image = profilePhoto;
if(item?.profile_path){
    image = url+item?.profile_path;
}
  return (
    <div className="profileBox">
        <div style={{backgroundImage:  `url(${image})`}}></div>
         <h3>{item?.name?.substring(0,15)||'Unknown'}</h3>
         <p>{item?.character?.substring(0,15)||item?.job?.substring(0,15)}</p>
    </div>
  )
}

