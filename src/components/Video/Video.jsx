import React, { useEffect, useState } from 'react'
import { getVideosDireccion, getVideosFotografia } from '../../services/firebase';
import { ImageList, ImageListItem } from '@mui/material';
import './style.css'

function Video() {
  const [direccion, getDireccion]=useState([])
  const [fotografia, getFotografia]=useState([])
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
    <div>
      <div className='videos'>
        <h2 className='titulo-direccion'>Dirección</h2>
        <ImageList sx={{ width: 1000, height: 400 }} cols={3} rowHeight={170}>
        {direccion.map((item) => (
          <a href={item.link}  className='link'>
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem></a>
  ))}
        </ImageList>

      </div>
      <div className='videos'>
        <h2  className='titulo-direccion'>Dirección de Fotografía</h2>
        <ImageList sx={{ width: 1000, height: 400 }} cols={3} rowHeight={170}>
        {fotografia.map((item) => (
          <a href={item.link}  className='link'>
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem></a>
  ))}
        </ImageList>

      </div>
    </div>
  )
}

export default Video