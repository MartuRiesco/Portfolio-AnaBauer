/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Unstable_Grid2'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Item from '@mui/material/Unstable_Grid2'
import { Link } from 'react-router-dom';
import { getDiarioDeViajes, getFotoDigital } from '../../services/firebase';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

function FotoDigital({type}) { 
  const [Photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function leerDatos() {

    let respuesta 
    switch (type) {
        case 'ddviajes':
        respuesta = await getDiarioDeViajes();
        setIsLoading(false);
          break;
          case 'fotodig':
            respuesta = await getFotoDigital();
            setIsLoading(false);
          break;
      default: 
      alert('hola')
      break;
      
    }
  
    setPhotos(respuesta);
  }
  useEffect(() => {
    leerDatos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);
 
  console.log(leerDatos);
  return (
    <div className='grid-container'>
       <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >     
          {
            isLoading ?
            <Loader/> :

          <Grid container spacing={1} columns={{ mobile:1, tablet:6, laptop:12}} disableEqualOverflow>
              {Photos.map((photo) => (
                <Grid mobile={1} tablet={3} laptop={4}>
                <Item>
                  <Link to={photo.category}>
                    <div className='foto-container'>
                      <img 
                            src={`${photo.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.category}
                            loading="lazy"
                            className='foto-dig-grilla'
                        /> 
                        <div className='foto-titulo'><h1 className='titulo-cover'>{photo.title}</h1></div>
                        </div></Link>
                        
                        </Item>
                        </Grid>
               
              ))}
        
          </Grid>

          }

          </ThemeProvider>

          <Footer />
    </div>
  )
}

export default FotoDigital