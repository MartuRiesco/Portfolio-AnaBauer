// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import Footer from '../Footer/Footer'

function Reel() {
  return (
      <>
      <div className='reel'>
            <div className='iframe-reel'>
                <iframe 
                    src="https://player.vimeo.com/video/848918316?h=97737faf66" 
                    width="900" height="500"
                    className='iframe'
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
      </div>
      <Footer />
      </>
  )
}

export default Reel