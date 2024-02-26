import React, { useEffect,useCallback } from 'react'
import { useSelector } from 'react-redux'
import ContentWrapper from '../Components/ContentWrapper';
import ExploreOptions from '../Components/Explore/ExploreOptions';
import { useState } from 'react';
import useFetch from '../Hooks/useFetch.js'
import Display from '../Components/DisplayArea/Display.jsx';
import DisplayLoading from '../Components/DisplayArea/DisplayLoading.jsx';
import handleScroll from '../Utils/handleScroll.js';
import useThrottledFunction from '../Hooks/useThrottle.js';
const mediaoptions =[{name : 'Movies'} ,{name :'TV Shows'}];
export default function Explore() {
  const [page,setPage] =useState(1);
  const [mydata,setData] =useState([]);
  const [media,setMedia] =useState('movie');
  const [genreID,setGenreID] =useState(28);
  const {genre}= useSelector(state => state.homeReducer);
  const {genres} =genre;
  const {data ,loading} =useFetch(`/discover/${media}?page=${page}&with_genres=${genreID}`);
   const handleClick =(messege) =>{
    setPage(1);
    setData([]);
    if(Number(messege)){
           setGenreID(messege);
    }
    else{
        if(messege=='Movies'){
           setMedia('movie')
        }
        else{
            setMedia('tv');
        }
    }    
   } 
 const callbackFnToThrottle = useCallback(() => {
  handleScroll(page,data?.total_pages,loading,setPage);
}, []);
 const { throttledFn } = useThrottledFunction({
  callbackFn: callbackFnToThrottle,
  throttleMs: 1000
});
useEffect(() =>{
  if(!data)return;
  const value =data?.results;
  setData(prev => [...prev,...value]);
},[data]);
useEffect(() => {
  window.addEventListener("scroll", throttledFn);
  return () => {
    window.removeEventListener("scroll", throttledFn);
  };
}, [throttledFn]);

  return (
      <ContentWrapper >
        <div style={{minHeight:'700px'}}>
    <h1 style={{ color: 'skyblue', fontFamily:'system-ui',fontWeight: '300'}}>Explore</h1>
      <div className="exploreContainer" >
        <ExploreOptions options ={genres} handleClick={handleClick}/>
        <ExploreOptions options ={mediaoptions} handleClick={handleClick}/>
      </div>
      {data?.results?.length==0&&(<h1>No result Found</h1>)}
      <Display data ={mydata||data?.results} mediaType={media}/>
      {loading&&<DisplayLoading />}
      </div>
      </ContentWrapper>
   )
}
