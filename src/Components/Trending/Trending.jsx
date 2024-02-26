import React, { useEffect, useState } from 'react'
import './Trending.css';
import Tabs from '../Tabs/Tabs';
import useFetch from '../../Hooks/useFetch.js'
import Display from '../DisplayArea/Display.jsx';
import { useMemo } from 'react';
import DisplayLoading from '../DisplayArea/DisplayLoading.jsx';
const options = ['Movie','TV Shows'];
export default function Trending() {
   const [endpoint ,setEndpoint] = useState('movie');
   const {data ,loading,error} = useFetch(`/trending/${endpoint}/day`);
   const handleEndpoint =(end) =>{
    const value = end==='Movie'?'movie':'tv';
    setEndpoint(value);
   }
  return (
     <div className="trndingContainer">
          <div className="heading">
          <h1>Trending</h1>
          <Tabs options = {options} handleEndpoint = {handleEndpoint} ></Tabs>
         </div>
        { loading==false?<Display data={data?.results} mediaType={endpoint}/>:<DisplayLoading />}
    </div>
  )
}
