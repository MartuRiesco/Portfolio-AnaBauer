// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css';
import VideoNavBar from '../VideoNavBar/VideoNavBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

function Video() {
  return (
    <div className='container_video'>
        <div className='navbar'>
            <VideoNavBar />
        </div>
        <div className='videoplayer'>
            <VideoPlayer />
        </div>
    </div>
  )
}

export default Video;