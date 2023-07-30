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
                        <img 
                            src={`${photo.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.category}
                            loading="lazy"
                            className='fotogrilla'
                            // Si contiene sub-category es true, navega hacia ella, si es false, activa openModal
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
    </div>
  )
}

export default FotoDigital;