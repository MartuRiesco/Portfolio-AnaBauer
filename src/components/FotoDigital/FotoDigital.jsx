
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom';
import { getFotoDigital } from '../../services/firebase';

function FotoDigital() { 
  const [Photos, setPhotos] = useState([]);
  async function leerDatos() {
    let respuesta = await getFotoDigital();
    setPhotos(respuesta);
  }
  useEffect(() => {
    leerDatos();
  }, []);
  return (
    <div className='grid-container'>
          <Grid container spacing={0.5} columns={12}>
              {Photos.map((photo) => (
                // eslint-disable-next-line react/jsx-key
                <Grid xs={4}>
                    <Item>
                        <Link to={photo.category}>
                              <img 
                                  src={`${photo.img}?w=248&fit=crop&auto=format`}
                                  srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                  alt={photo.category}
                                  loading="lazy"
                                  className='foto-dig-grilla'
                                

                              />
                        </Link>
                    </Item>
               
                </Grid>
              ))}
        
          </Grid>
    </div>
  )
}

export default FotoDigital;