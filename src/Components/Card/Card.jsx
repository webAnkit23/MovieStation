import React from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { BsPlayCircleFill } from "react-icons/bs";
export default function Card({item,url,genre,mediaType}) {
    let myids = genre.genres?.filter((g) =>item?.genre_ids?.includes(g.id));
    const navigate = useNavigate();
   const name = item?.title||item?.original_name;
   const date = (item?.release_date||item?.first_air_date)?.split('-').reverse().join('-');
   const vote = item?.vote_average;
   mediaType =mediaType||item.media_type;
   const handleClick =() =>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      navigate(`/details/${mediaType||item.media_type}/${item.id}`);
      
   }
   console.log(item);
  return (
  item&& ( <div className="cardContainer">
        <div className="card_image" style={{backgroundImage:`url(${url+item.poster_path})`}} onClick={handleClick}>
            <div className="genre">
                {myids?.splice(0,2).map((info) =>{
                 return <span key={info.id}>{info.name}</span>
                })}
                <div className="play_overlay">
                <BsPlayCircleFill className='play'/>
                </div>
            </div>
            <div className="rating">{String(vote).substring(0,3)}</div>
           
        </div>
        <div className="card_about">
             <div className="card_div">
             <h4>{name.substring(0,15)}{name.length>=15?'...':''}</h4>
             <p>{date} <span>HD</span></p>
             </div>
        </div>
    </div>
   )
  )
}
