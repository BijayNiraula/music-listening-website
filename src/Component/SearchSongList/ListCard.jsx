import React from 'react'
import { Link } from 'react-router-dom'
function ListCard(props) {
  
  return (
    <Link to={`/detail/${encodeURIComponent(props.d.album.cover_xl)}/${props.d.title}/${props.d.artist.name}/${props.d.duration}/${encodeURIComponent(props.d.preview)}/${encodeURIComponent(props.d.link)}`}  className='row text-decoration-none text-dark mb-5  search-list-card p-2'>
          {
          }
                <div className="col-sm-4 col-5">
                  <img src={props.d.album.cover_xl} alt="" className="img-fluid " />
                </div>
                <div className="col-sm-8 col-7 px-2 d-flex align-items-center ">
                  <p className=''>
                     Title : <strong>{props.d.title}</strong>
                     <br />
                     Artist : <strong> {props.d.artist.name}   </strong> 

                  </p>
                   


                </div>
                
              </Link>
              
  )
}

export default ListCard