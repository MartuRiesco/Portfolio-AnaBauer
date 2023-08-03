<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function FotoDigital( {categories} ) {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    console.log("Open Modal");
  };

  const closeModal = () => {
  setSelectedImage(null);
  setModalOpen(false);
  console.log("Close Modal");
  };

  const navigate = useNavigate();

  const handleClickCat = () => {
    navigate ('/diariosdeviaje/');
  };

  const handleClickSubCat = () => {
    navigate ('/continuidad/');
  };


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
           <ImageList variant='masonry' cols={2} gap={80}>
              {categories.map((photo) => (
                <ImageListItem key={photo.id}>
=======
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Unstable_Grid2'
import Item from '@mui/material/Unstable_Grid2'
import photos from '../../Data/photos.json'
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
                <Grid xs={4}>
                <Item>
                  <Link to={photo.category}>
>>>>>>> 7447806e6b8e301253ee1cff3b3b50275fac756f
                        <img 
                            src={`${photo.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.category}
                            loading="lazy"
                            className='foto-dig-grilla'
                            // Si contiene sub-category es true, navega hacia ella, si es false, activa openModal
<<<<<<< HEAD
                            onClick={photo['subcategory'] ? 
                            () => {handleClickCat()} :
                            photo['category'] ?
                            () => {handleClickSubCat()} : 
                            () => openModal(photo.img)
                            }
                        /> 
                </ImageListItem>
              ))}
          </ImageList>        
=======
                           

                        /> </Link>
                        </Item>
                        </Grid>
               
              ))}
        
          </Grid>
>>>>>>> 7447806e6b8e301253ee1cff3b3b50275fac756f
    </div>
  )
}

export default FotoDigital;