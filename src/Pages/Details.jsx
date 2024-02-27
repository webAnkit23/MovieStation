import React, { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import DetailBanner from '../Components/Details/DetailBanner';
import Carousal from '../Components/Details/Carousal';
import Similar from '../Components/Similar/Similar';
export default function Details() {
  const [director ,setDirector] = useState([]);
  useEffect(() =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[]);
  let {pathname} = useLocation();
  pathname = pathname.split('/');
  const media = pathname[2];
  const id =pathname[3];
  const {data} = useFetch(`/${media}/${id}`);
  const {data:credits ,loading:creditsLoading} = useFetch(`/${media}/${id}/credits`);
  const {data:videos ,loading:videoLoading} = useFetch(`/${media}/${id}/videos`);
 console.log(credits);
  useEffect(() =>{
 setDirector(credits?.crew?.filter((it) =>it?.job==='Director'));
  },[credits])
  return (
         (<>
            <DetailBanner data ={data} videos ={videos} director ={director}/>
            <Carousal members = {credits?.cast} heading ='Cast' loading ={creditsLoading}/>
            <Carousal members = {credits?.crew} heading ='Crew' loading ={creditsLoading}/>
            <Similar media ={media} mediaId ={id} />
         </>)
        
   
  )
}
