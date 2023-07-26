import React, { useEffect, useState } from 'react'
import { getFotoAnalogica } from '../../services/firebase';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem'
import './style.css'


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
    <div className='grilla-fotos'>
        <Grid container spacing={1}>
        {Users.map((user)=>(
             <Grid item xs="auto">
                 <Item>
                    <img src={user.img} alt={user.category} className='fotogrilla' />
                 </Item>
             </Grid>
        ))}


        </Grid>

    </div>
  )
}

export default FotoAnalogica