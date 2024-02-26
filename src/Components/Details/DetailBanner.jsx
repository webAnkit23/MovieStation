import React, { useState } from 'react'
import './DetailBanner.css'
import { useSelector } from 'react-redux'
import { FaGooglePlay } from "react-icons/fa";
import MI from '../../assets/MI.jpg';
import { RxCross2 } from "react-icons/rx";
import ReactPlayer from 'react-player/lazy';
export default function DetailBanner({data,videos}) {
    const {url} = useSelector((state) =>state.homeReducer);
    const date = data&&(data?.first_air_date||data?.release_date).split('-').reverse().join('-');
     const trailer = videos?.results?.filter((item) =>item?.type=='Trailer');
     const [play ,setPlay] = useState(false);
  return (
    <>
   <div className="banner_overlay" style={{backgroundImage:`url(${url+data?.backdrop_path})`}}></div>   
      { data&& <div className="contentWrap">
     
         <div className="bannerContainer">     
         
           <div className="banner_left">
              <img src={url+data?.poster_path||MI}></img>
        </div>
        <div className="banner_right">
            <div className="bannerName">
                <h3>{data?.name||data?.title}<span>{`  (${date})`}</span></h3>
                <p className='tagline'>{data?.tagline}</p>
                <div className="genreBox">
                    {data?.genres.map((genre) =>{
                      return  <span key={genre.id}>{genre.name}</span>
                    })}
                </div>
            </div>
            <div className="bannerIcons">
                <div className="bannerRating">
                         {String(data?.vote_average).substring(0,3)}
                </div>
                <div onClick={() =>{
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    setPlay(prev =>!prev)}} className="play_button">
                     <FaGooglePlay  size={30} className='play_'/>
                     <p>Play Trailer</p>
                </div>
            </div>
            <h3 className='overview_title'>Overview:</h3>
            <p className='overview'> {data?.overview}</p>

            <div className="status">Status : {data?.status}</div>
           {data?.seasons&& <div className="status">Seasons : {data?.seasons?.length} {`  `}Episodes : {data?.seasons?.reduce((acc,i) =>acc+i.episode_count ,0)}</div>}

           {data?.createdby?(<div className="createdBy">
                Creator: {data?.created_by?.map((c,i) =><p key={c.id}>{c.name}{`${i==data.created_by.length-1?'':','}`}</p>)}
            </div>):(<div className='status'>
                Director : {<>Unknown</>}
            </div>)}
            <div className="status">Languages : {data?.spoken_languages?.map((c,i) =><p key={i}>{c.english_name}{`${i==data.spoken_languages.length-1?'':'  ,'}`}</p>)}</div>
        </div>
    </div>
    </div>
}
   {play&&
   <div className='player'>
    <RxCross2 size={30} color='white' onClick={() => setPlay(false)}/>
    <ReactPlayer url ={`https://www.youtube.com/watch?v=${trailer?trailer[0]?.key:''}`} controls ={true} playing ={true} width='100%' />
    </div>
}
    </>
  )
}
