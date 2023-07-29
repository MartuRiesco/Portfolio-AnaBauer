// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'

function Reel() {
  return (
      <div className='reel'>
      
            <div className='titulo-container'>
                <hr className='hr1' /> <h2 className='titulo-reel'> REEL</h2>
            </div>

            <div className='iframe-reel'>
                <iframe 
                    src="https://player.vimeo.com/video/848918316?h=97737faf66" 
                    width="900" height="500"
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

      </div>
  )
}

export default Reel