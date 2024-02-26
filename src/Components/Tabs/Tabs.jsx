import React, { useState } from 'react'
import './Tabs.css'
export default function Tabs({options,handleEndpoint}) {
    const [active ,setActive] = useState(options[0]);
    const handleClick =(item ) =>{
        if(active===item)return;
        
        setActive(item);
        handleEndpoint(item);
    }
  return (
    
    <div className="tabs">
        {options.map((item ,index) =>{
            return <span key={index} className={active===item?'active':''}  onClick={() =>handleClick(item)}>{item}</span>
        })}
    </div>
  )
}
