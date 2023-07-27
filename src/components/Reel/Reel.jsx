import React from 'react'
import './style.css'

function Reel() {
  return (
    <div className='reel'>
      <h1 className='titulo-reel'> REEL</h1>
     <iframe src="https://player.vimeo.com/video/848918316?h=97737faf66" width="900" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>

     </iframe>
<p>
  <a href="https://vimeo.com/848918316" className='descrip-reel'>
    Reel - Ana Bauer 2023
  </a> 
  from 
  <a href="https://vimeo.com/user202548570" className='descrip-reel'>Ana Bauer</a> 
  on </p>
      </div>
  )
}

export default Reel