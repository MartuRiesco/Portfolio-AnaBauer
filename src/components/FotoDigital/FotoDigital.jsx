// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom';
import { getDiarioDeViajes, getFotoDigital } from '../../services/firebase';

function FotoDigital({type}) { 
  const [Photos, setPhotos] = useState([]);
  async function leerDatos() {
    let respuesta 
    switch (type) {
        case 'ddviajes':
        respuesta = await getDiarioDeViajes();
          break;
          case 'fotodig':
            respuesta = await getFotoDigital();
          break;
      default: 
      alert('hola')
      break;
      
    }
  
    setPhotos(respuesta);
  }
  useEffect(() => {
    leerDatos();
  }, [type]);
 
  console.log(leerDatos);
  return (
    <div className='grid-container'>
          <Grid container spacing={1} columns={12}>
              {Photos.map((photo) => (
                <Grid xs={4}>
                <Item>
                  <Link to={photo.category}>
                        <img 
                            src={`${photo.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.category}
                            loading="lazy"
                            className='foto-dig-grilla'
                            // Si contiene sub-category es true, navega hacia ella, si es false, activa openModal
                           

                        /> </Link>
                        </Item>
                        </Grid>
               
              ))}
        
          </Grid>
    </div>
  )
}

export default FotoDigital