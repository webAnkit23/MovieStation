import React, { useEffect, useState,useCallback } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Search.css'
import ContentWrapper from '../Components/ContentWrapper';
import useFetch from '../Hooks/useFetch.js'
import DisplayLoading from '../Components/DisplayArea/DisplayLoading.jsx'
import Display from '../Components/DisplayArea/Display.jsx'
import handleScroll from '../Utils/handleScroll.js';
import useThrottledFunction from '../Hooks/useThrottle.js';
export default function Search() {
  const param = useParams();
  const [page,setPage] = useState(1);
  const [mydata,setData] = useState([]);
  const {data ,loading} =useFetch(`/search/multi?query=${param.keywords}&page=${page}`);
 useEffect(() =>{
   if(!data)return;
   setData(prev => [...prev,...data?.results]);
 },[data]);
 const callbackFnToThrottle = useCallback(() => {
  handleScroll(page,data?.total_pages,loading,setPage);
}, []);
 const { throttledFn } = useThrottledFunction({
  callbackFn: callbackFnToThrottle,
  throttleMs: 1000
});
 useEffect(() => {
  window.addEventListener("scroll", throttledFn);
  return () => {
    window.removeEventListener("scroll", throttledFn);
  };
}, [throttledFn]);
  return (
    <ContentWrapper>
    <div className="searchContainer">
      <div className="marginbox" style={{marginTop:'100px'}}></div>
      <h1 id='asd'>Search Results for {param.keywords}</h1>
      <div className="marginbox" style={{marginTop:'60px'}}></div>
      {loading&&<DisplayLoading />}
      {data?.results?.length==0&&(<h1 className='no_result'>No result Found</h1>)}
      <Display data ={mydata} />
    </div>
    </ContentWrapper>
  )
}
