import React, { useEffect ,useState} from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import Chennai from '../../assets/Chennai.jpg';
import useFetch from '../../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './hero.css';
export default function Hero() {
  const [image ,setImage] = useState("");
  const [query,setQuery] = useState("");
  const {url} = useSelector(state=>state.homeReducer);
  const {data,loading,error} = useFetch('/movie/upcoming');
  const navigate =useNavigate();
  useEffect(() =>{
       let path = Math.floor(Math.random()*data?.results?.length);
       if(path){
       const a = data?.results[path]?.backdrop_path;
       if(url&&a){
        setImage(url+a);
       }
       }
 },[data]);
 const handleSubmit =(e) =>{
  e.preventDefault();
  if(query.length==0)return;
  console.log('s');
  navigate(`/search/${query}`)
 }
  return (
  ( <div className="heroContainer" >  
       <div className="heroBackground" style={{backgroundImage : `url(${image||Chennai})`}}> 
         <div className="heroSearch">
            <h1>Find Movies TV Shows and more</h1>
            <form onSubmit={handleSubmit}>
              <div className="heroInputBox">
                  <IoSearchOutline size={25}/>
                  <input type='text' placeholder='Enter keywords' value={query} onChange ={(e) =>setQuery(e.target.value)} /> 
              </div>
              <button type='submit'><FaArrowRight size={25}/></button>
            </form>
         </div> 
         </div>
    </div>
   )
  )
}
