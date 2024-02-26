import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import barbie from './barbie.jpg'
import Interstellar from './Interstellar.jpg';
import Reasons from './Reasons.jpg';
import narcos from './narcos.jpeg';
import TopGun from './TopGun.jpeg'
import './Footer.css'
export default function Footer() {
  return (
    <div className="footerContainer">

            <div className="footerHeading">
                 <h1>Welcome to Platform <span>3/9</span></h1>
                 <p>Contact us</p>
                 <div className="footerIcons" >
                      <FaFacebook className='facebook' size={25}/>
                      <FaSquareInstagram className='insta' size={25}/>
                      <FaTwitter className='twitter' size={25}/>
                      <ImLinkedin className='linkedin' size={25}/>
                      <IoLogoWhatsapp className='whatsapp' size={25}/>
                 </div>
            </div>
       <div className="about_author">
        <h1>Here are some of best movies and series i have watched</h1>
        <div className="footer_div">
          <div className="movieBox">
            <img src={barbie}></img>
            <p>Barbie</p>
          </div>
          <div className="movieBox">
            <img src={Interstellar}></img>
            <p>InterStellar</p>
          </div>
          <div className="movieBox">
            <img src={Reasons}></img>
            <p>13 Reasons Why</p>
          </div>
          <div className="movieBox">
            <img src={TopGun}></img>
            <p>Top Gun</p>
          </div>
          <div className="movieBox">
            <img src={narcos}></img>
            <p>Narcos</p>
          </div>
          </div>
          <h3 className='phone'><FaPhoneVolume size={25} color='green'/>Phone Number : 9569435722</h3>
          <h3 className='phone'><IoMail size={25} color='#4856e2'/>Email : www.ankitsingh2323@gmail.com</h3>
       </div>
    </div>
  )
}
