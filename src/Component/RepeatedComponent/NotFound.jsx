import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='Not_Found'>
    <img   className='' src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" alt="" />
 
    <Link to="/" className='fs-5'>Go to Home</Link>


    </div>
  )
}

export default NotFound