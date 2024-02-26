import React from 'react'

export default function ContentWrapper({children}) {
 const style ={
    width:'100%',
    margin: '100px auto',
    padding : '0px 20px'
 }
  return (
    <div className="contentWrapper" style={style}>
     {children}
    </div>
  )
}
