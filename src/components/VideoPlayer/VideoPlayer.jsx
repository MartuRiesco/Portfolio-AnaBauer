// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { getVideosDireccion, getVideosFotografia } from '../../services/firebase';
//import VideoDosCorazones from '../../assets/Videos/dos-corazones-trailer.mp4';
import './style.css';

function VideoPlayer() {

    const [direccion, getDireccion] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [fotografia, getFotografia] = useState([])

    async function leerDatos() {
        let respuesta = await getVideosDireccion();
        getDireccion(respuesta);
        let respon = await getVideosFotografia();
        getFotografia(respon);
    }
    
    useEffect(() => {
    leerDatos();
    }, []);

  return (
    <div className='container_videoplayer'>
        
        <div className='content-video'>
            {direccion.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div id={data.title} className='content-player'>
                <ReactPlayer
                    url={'https://player.vimeo.com/video/848918316?h=97737faf66'}
                    controls = {'true'}
                />
                <div className='content_text'>
                    <div className='video-title'>
                        <h1 className='title-trailer'>{data.title}</h1>
                        <p className='year'>{data.year}</p>
                    </div>
                </div>
                <div>
                    <hr className='line' />
                    <h3 className='subtitle'>{data.description}</h3>
                </div>
            </div>
            ))}
        </div>

        <div className='content-video'>
            {fotografia.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div name={data.title} className='content-player'>
                <ReactPlayer
                    url={'https://player.vimeo.com/video/848918316?h=97737faf66'}
                    controls = {'true'}
                />
                <div className='content_text'>
                    <div className='video-title'>
                        <h1 className='title-trailer'>{data.title}</h1>
                        <p className='year'>{data.year}</p>
                    </div>
                </div>
                <div>
                    <hr className='line' />
                    <h3 className='subtitle'>{data.description}</h3>
                </div>
            </div>
            ))}
        </div>    

    </div>
  )
}

export default VideoPlayer;