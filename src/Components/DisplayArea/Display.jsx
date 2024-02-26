import React from 'react'
import Card from '../Card/Card'
import './Display.css'
import DisplayLoading from './DisplayLoading'
import { useSelector } from 'react-redux'
export default function Display({data,mediaType}) {
  const {url ,genre} = useSelector(state =>state.homeReducer);
  return (
    data?(<div className="display_container">
    {data.map((item,i) =>{
        return <Card key={i} item ={item} url ={url} genre ={genre} mediaType = {mediaType}></Card>
    })}
      </div>):<DisplayLoading></DisplayLoading>

  )
}
