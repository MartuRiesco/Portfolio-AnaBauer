// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getFotoAnalogica } from '../../services/firebase';
import './style.css';


function FotoAnalogica() {
    const [Users, setUser] = useState([]);
    async function leerDatos() {
        let respuesta = await getFotoAnalogica();
        setUser(respuesta);
      
      }
      useEffect(() => {
        leerDatos();
      }, []);
  return (
    <div className='container_grid'>
                {Users.map((user)=>(
                  // eslint-disable-next-line react/jsx-key
                  <div className='container_grid-img'>
                      <figure>
                            <img src={user.img} alt={user.category} />
                      </figure>
                  </div>
                ))}
    </div>
  )
}

export default FotoAnalogica