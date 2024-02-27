import React, { useState ,useRef} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  const [isOpen ,setOpen] = useState(false);
 const handleClick =() =>{
  setOpen(prev =>!prev);
 }
 
  return (
    <>
    <div className={`nav_container ${isOpen?'goUp':'goDown'}` }>
        <div className="nav_icon">
             3/9
        </div>
        <ul>
        <li><Link to='/home' className='link' onClick={handleClick}>Home</Link></li>
            <li><Link to='/explore' className='link' onClick={handleClick}>Explore</Link></li>
        
        </ul>
        <button>LOGIN</button>
    </div>
      <FaBars size={30} className={`bars nav_opener ${isOpen?'hide':'show'}`} onClick={handleClick}/>
      <RxCross2 size={30} className={`cross nav_opener ${!isOpen?'hide':'show'}`} onClick={handleClick}/>
      </>
  )
}
