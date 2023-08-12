// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { getVideosDireccion, getVideosFotografia } from '../../services/firebase';
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
            <h1 className='title'>Dirección</h1>
            {direccion.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div id={data.title} className='content-player'>
                {
                    data.title == 'Ley de Murphy' ?
                  <a href={data.link}> <img src={data.img} alt={data.img}  className='imagen-iframe'/></a>: 
                  <ReactPlayer
                    url={data.link}
                    controls = {'true'}
                />
                }
               
                <div className='content_text'>
                    <div className='video-title'>
                        <h1 className='title-trailer'>{data.title}</h1><hr className='line' />
                        <p className='year'>{data.year}</p>
                    </div>
                </div>
                <div>
                    <h3 className='subtitle'>{data.description}</h3>
                </div>
            </div>
            ))}
        </div>

        <div className='content-video'>
            <h1 className='title'>Dirección de Fotografía</h1>
            {fotografia.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <div name={data.title} className='content-player'>
                <ReactPlayer
                    url={data.link}
                    controls = {'true'}
                />
                <div className='content_text'>
                    <div className='video-title'>
                        <h1 className='title-trailer'>{data.title}</h1>
                        <hr className='line' />
                        <p className='year'>{data.year}</p>
                    </div>
                </div>
                <div>
                   
                    <h3 className='subtitle'>{data.description}</h3>
                </div>
            </div>
            ))}
        </div>    
    </div>
  )
}

export default VideoPlayer;