// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Unstable_Grid2'
import { ImageList, ImageListItem } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import photos from '../../Data/photos.json'
import { Link, useNavigate } from 'react-router-dom';

function FotoDigital() {  

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
          {modalOpen && (
              <div className="modal-bk">
                  <div className='modal-cont'>
                    <IoMdClose onClick={closeModal} className="modal-close-button">
                        Cerrar
                    </IoMdClose>
                    <img
                        src={selectedImage}
                        alt="Imagen seleccionada"
                        className="modal-image"
                    />
                  </div>
              </div>
          )}
          <Grid container spacing={0.5} columns={12}>
              {photos.map((photo) => (
                <Grid xs={4}>
                <Item>
                  <Link to={photo.category}>
                        <img 
                            src={`${photo.thumbnail}?w=248&fit=crop&auto=format`}
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