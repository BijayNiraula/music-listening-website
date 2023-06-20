import React from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom';
import BackBtn from '../RepeatedComponent/BackBtn';

function SingleSong() {
  const playBtn=useRef();
  const pauseBtn=useRef();
  const detail=useParams();
  console.log(detail)
    const music=new Audio(detail.preview)
        music.addEventListener('ended',()=>{
          pauseBtn.current.style.display='none'
          playBtn.current.style.display='block'
        })
     const playMusic=()=>{
      music.play();
      playBtn.current.style.display='none'
      pauseBtn.current.style.display='block'
     }
     const pauseMusic=()=>{
      music.pause()
      pauseBtn.current.style.display='none'
      playBtn.current.style.display='block'
     }
   

  return (
    <div className='bg-dark w-100  single-song py-2 pt-sm-5 pb-5'>
      <BackBtn/>

        <div className="h-100 container  d-flex justify-content-center ">
             
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 col-11">
                    <img src={detail.cover_xl} className='img-fluid' alt="" />
                      
                </div>
                <div className="col-sm-8 col-11 ps-sm-5">
                 
                    <h1 className='text-white fs-1 fw-bold'>{detail.title}</h1>
                   <div className="ms-sm-5 mt-5">

                   <div className='d-flex text-light'>
                     <pre>Artist   : </pre><span>{detail.name}</span>
                      </div> <div className='d-flex text-light'>
                     <pre>Duration : </pre><span>{detail.duration} seconds</span>
                      </div>

                   </div>
                   <div className="d-flex flex-column flex-sm-row justify-content-center   mt-sm-5 mt-3">
                      <button ref={playBtn} onClick={()=>playMusic()} className=" mx-md-5 mx-3 btn btn-danger  px-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg> Play Preview</button>

<button ref={pauseBtn} style={{display:"none"}} onClick={()=>pauseMusic()} className=" mx-md-5 mx-3 btn btn-danger  px-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi me-2  bi-stop-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"/>
</svg> Stop Preview</button>

  <a href={detail.link} className="btn btn-success mt-4 mt-sm-0">

    Visit For Full Music
  </a>
                   </div>
                      
                </div>
            </div>

        </div>
     
    </div>
  )
}

export default SingleSong