import React from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {

  const navigate=useNavigate()
  const search=(e)=>{
e.preventDefault()
console.log("search")
navigate(`/search/${e.target[0].value}`)


  }
  return (
    <div  className="bg-dark">
    <div className="container">

    <div className='  row  py-3  '>
        <div className="logo col-3 col-sm-6 d-flex align-items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className=" text-danger bi bi-music-note-list" viewBox="0 0 16 16">
  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fillRule="evenodd" d="M12 3v10h-1V3h1z"/>
  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
  <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
</svg>
          <h1 className=' ms-2 mt-1 fs-2 d-none d-sm-flex  fw-bold text-light'>Music World</h1>
        </div>
        <div className='col-9 col-sm-6 d-flex align-items-center justify-content-end '>
        <form  onSubmit={(e)=>search(e)} className="search-bar w-100  row  d-flex justify-content-end  ">
      <input required type="text" className=' px-4  col-lg-8 col-sm-10 col-10' placeholder='search...' />  
      <button  className='col-md-2 col-2' >
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-search pe-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </button>
         

      </form>
        </div>
   
           
        


    </div>
    </div>

    </div>

  )
}

export default Header;