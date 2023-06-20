import React from 'react'
import { Link } from 'react-router-dom'
function BackBtn() {
  return (
    <Link to="/" className='mb-5 px-lg-5  ms-sm-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
    </Link>
   
  )
}

export default BackBtn