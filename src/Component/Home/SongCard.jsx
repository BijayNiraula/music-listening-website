import React from 'react'
import { Link } from 'react-router-dom'
function SongCard(props) {
  return (
    <div className="px-sm-3 py-3 col-md-3 col-sm-4 col-6 ">

    <Link to={`/detail/${encodeURIComponent(props.d.album.cover_xl)}/${props.d.title}/${props.d.artist.name}/${props.d.duration}/${encodeURIComponent(props.d.preview)}/${encodeURIComponent(props.d.link)}`} className="home-card   song-card   ">
                  <img src={props.d.album.cover_big} alt="" className=' p-1 img-fluid' />
                  
                
                 </Link>
             <div  className='mt-1 fw-bold text-center artist-name '>{props.d.title} ( <small className='fs-6 fw-normal'>  {props.d.artist.name }  </small>  )</div>
                    </div>
  )
}

export default SongCard;


