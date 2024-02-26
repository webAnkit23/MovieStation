import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import DetailBanner from '../Components/Details/DetailBanner';
import Carousal from '../Components/Details/Carousal';
import Similar from '../Components/Similar/Similar';
export default function Details() {
  useEffect(() =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[]);
  let {pathname} = useLocation();
  pathname = pathname.split('/');
  const media = pathname[2];
  const id =pathname[3];
  const {data,loading,error} = useFetch(`/${media}/${id}`);
  const {data:credits ,loading:creditsLoading} = useFetch(`/${media}/${id}/credits`);
  const {data:videos ,loading:videoLoading} = useFetch(`/${media}/${id}/videos`);
  console.log(videos);
  return (
         (<>
            <DetailBanner data ={data} videos ={videos} />
            <Carousal members = {credits?.cast} heading ='Cast'/>
            <Carousal members = {credits?.crew} heading ='Crew'/>
            <Similar media ={media} mediaId ={id} />
         </>)
        
   
  )
}
