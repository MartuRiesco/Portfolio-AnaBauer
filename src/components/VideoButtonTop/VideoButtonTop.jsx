// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-scroll';
import './style.css';
import { AiOutlineArrowUp } from 'react-icons/ai';


function VideoButtonTop() {
  return (
    <div className='button-top'>
        <Link 
            to='top' 
            spy={true} 
            smooth={true} 
            offset={-80}  
            duration={1200}
        >
            <h4>{<AiOutlineArrowUp />}</h4>
        </Link>
    </div>
  )
}

export default VideoButtonTop;