import  { useEffect, useState } from 'react'
import fetchData from '../Api/Api';

export default function useFetch(url) {
  const [data,setData] = useState(null);
  const [loading,setLoading] =useState(false);
  const [error,setError] = useState(null);
 
  useEffect(() =>{
      setLoading(true);
      fetchData(url)
        .then(res =>{
          setLoading(false);
             setData(res);
      }).catch((err) =>{
            setLoading(false);
            setError(err);
      })
  },[url]);

  return {data,loading,error,setLoading};
}
