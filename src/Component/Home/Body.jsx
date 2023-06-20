import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import fetchData from '../../module/fetchData'
import { useRef } from 'react'
import SongCard from './SongCard'
import SongCardPlaceHolder from './SongCardPlaceHolder'
import {RotatingLines} from "react-loader-spinner"
function Body() {
  const  [list, setList] = useState([])
    const placeHolder=useRef()
    const spinner=useRef();

 const process=async()=>{
  let data=await fetchData( import.meta.env.VITE_API_URL+'search?q=nepali folk song',{ 
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }}
  )
  console.log("new data from data base for home page ")
  data.time=Date.now()
  localStorage.setItem("cache",JSON.stringify(data))
    setList(data.data)
    console.log(data)
  placeHolder.current.style.display="none"
  spinner.current.style.display="none"
  

 }


  useEffect(()=>{
    if(localStorage.getItem("cache")){
      const cacheData=JSON.parse(localStorage.getItem("cache"))
        // for refresh the cache data after a certain time
       if((Date.now()-cacheData.time)>10000000){
        localStorage.removeItem("cache");
        process();
       }else{
         console.log("get data from cache for home page")

        setList(cacheData.data)
        placeHolder.current.style.display="none"
        spinner.current.style.display="none"
       }
    }else{
      process()
      
    }
    
  },[])


  return (
  <div className="home-body ">
    <div className="spinner" ref={spinner}>
    <RotatingLines
  strokeColor="red"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </div>
    <div className="container mt-5">
    <h3 className='fw-bold fs-2 py-1 ps-2'>Featured Song </h3>
         <div className="row ms-md-5 ms-sm-4 ms-2">
          {
           list.length!=0 ?
            list.map(d=>{
              return( 
                <SongCard key={d.id} d={d}/>
             
              )

            }):""
          
          }
          <div className='row' ref={placeHolder}>

<SongCardPlaceHolder/>
<SongCardPlaceHolder/>
<SongCardPlaceHolder/>
<SongCardPlaceHolder/>
<SongCardPlaceHolder/>
<SongCardPlaceHolder/>
<SongCardPlaceHolder/>
<SongCardPlaceHolder/>

</div>
        

         </div>
    </div>
  </div>
  )
}

export default Body