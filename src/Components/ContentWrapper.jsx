import React from 'react'
import './ContentWrapper.css'
export default function ContentWrapper({children}) {
 
  return (
    <div className="contentWrapper" >
     {children}
    </div>
  )
}
