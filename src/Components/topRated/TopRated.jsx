import React from 'react'
import './TopRated.css'
import { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import Tabs from '../Tabs/Tabs';
import Display from '../DisplayArea/Display';
const options =['Movie','TV Shows'];
export default function TopRated() {
    const {data ,loading,error} = useFetch(`/movie/top_rated`);
   return (
        <div className="trndingContainer">
           <div className="heading">
           <h1>Top Rated</h1>
          </div>
        <Display data={data?.results} mediaType = 'movie'/>
     </div>
  )
}
