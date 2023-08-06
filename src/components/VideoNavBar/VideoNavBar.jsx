// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { getVideosDireccion, getVideosFotografia } from '../../services/firebase';
import './style.css';

function VideoNavBar() {
    

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
    <div className='container_navbar'>
            {direccion.map((data) => (
            <>
                
                <Link 
                    className='bot-navbar'
                    to={data.title} 
                    spy={true} 
                    smooth={true} 
                    offset={-80}  
                    duration={1200}
                >
                    <h5>{data.title}</h5>
                    <p className='data'>{data.description}</p>
                </Link>
            </>
            
            ))}
            {fotografia.map((data) => (
            // eslint-disable-next-line react/jsx-key
            <Link 
                className='bot-navbar'
                to={data.title} 
                spy={true} 
                smooth={true} 
                offset={-80}  
                duration={1200}
            >
                <h5>{data.title}</h5>
                <p className='data'>{data.description}</p>
            </Link>
            
            ))}

    </div>
  )
}

export default VideoNavBar;