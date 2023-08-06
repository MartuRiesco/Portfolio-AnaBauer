// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css';
import VideoNavBar from '../VideoNavBar/VideoNavBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoButtonTop from '../VideoButtonTop/VideoButtonTop';

function Video() {
  return (
    <div name='top' className='container_video'>
        <div className='navbar'>
            <VideoNavBar />
        </div>
        <div className='videoplayer'>
            <VideoPlayer />
        </div>
        <div className='button_top'>
            <VideoButtonTop />
        </div>
    </div>
  )
}

export default Video;