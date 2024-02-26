import React from 'react'
import './ExploreOptions.css'
export default function ExploreOptions({options,handleClick}) {
  return (
    <div className="exploreOptions" >
    <select className='select' onChange={(e) =>handleClick(e.target.value)}>
       {options?.map((g,i)=>{
        return  <option className='option' key={g.id||i} value={g.id}>{g.name}</option>
       })}
    </select>
 </div>
  )
}
