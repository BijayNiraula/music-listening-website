import React, { useRef } from 'react'
import BackBtn from '../RepeatedComponent/BackBtn'
import ListCard from './ListCard'
import { useState } from 'react'
import { useEffect } from 'react'
import fetchData from '../../module/fetchData'
import { useParams } from 'react-router-dom'
import ListCardPlaceHolder from './ListCardPlaceHolder'

function SearchSongList() {
  const  [list, setList] = useState([]);
  const NoData=useRef()
  const route=useParams();
  const placeHolder=useRef()
  const process=async()=>{
    const data=await fetchData(import.meta.env.VITE_API_URL+`search?q=${route.q}`,{ 
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }}
    )
    console.log(data)
    if(data.data.length!=0){
      setList(data.data)

    }else{
      NoData.current.style.display="flex"
    }
    placeHolder.current.style.display="none"
   }
  
  
    useEffect(()=>{
      process()
    },[])
  
  return (
    <div>
      <BackBtn/>
      <div className="container">
      <div className='row  mt-3  d-flex justify-content-center' >
       <div className="col-lg-6 col-sm-10 col-11 ">


        {

          list.length!=0?
           list.map(d=>{
            return( 
            <ListCard key={d.id} d={d}/>
            )
           })
           : ""
        }
 <div ref={NoData} style={{display:"none"}} className=' justify-content-center align-items-center mt-5'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
           <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
         </svg> <span className='ms-3 fs-4'>No Data Found ?</span> </div>
        <div ref={placeHolder}>
        <ListCardPlaceHolder/>
        <ListCardPlaceHolder/>
        <ListCardPlaceHolder/>
        </div>
    

       </div>




       </div>
      </div>
     


    </div>
  )
}

export default SearchSongList