import React, { useEffect, useState ,useCallback} from 'react'
import './Similar.css'
import useFetch from '../../Hooks/useFetch';
import Display from '../DisplayArea/Display'
import DisplayLoading from '../DisplayArea/DisplayLoading';
import handleScroll from '../../Utils/handleScroll';
import useThrottledFunction from '../../Hooks/useThrottle';
export default function Similar({media ,mediaId}) {
    const [page,setPage] = useState(1);
    const [mydata,setData] = useState([]);
    const {data ,loading} = useFetch(`/${media}/${mediaId}/similar?page=${page}`);
   useEffect(() =>{
    if(!data)return
    const value = data?.results;
      setData(prev => [...prev,...value]);
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
    <div className="similarContainer">
        <h1>Similar Content</h1>
        <Display data={mydata||data} mediaType ={media}/>
        {loading&&<DisplayLoading />}
        <div style={{marginBottom:'50px'}}></div>
    </div>


  )
}
