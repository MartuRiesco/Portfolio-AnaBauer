// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './styles.css';
import { ImageList, ImageListItem } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import photos from '../../Data/photos.json'

// eslint-disable-next-line no-unused-vars
function FotoDigitalList() {  

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
        console.log("Open Modal");
  }

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
    console.log("Close Modal");
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
              {photos.map((photo) => (
                <ImageListItem key={photo.img}>
                        <img 
                            src={`${photo.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={photo.category}
                            loading="lazy"
                            className='fotogrilla'
                            // Si contiene sub-category es true, navega hacia ella, si es false, activa openModal
                            onClick={() => openModal(photo.img)}

                        /> 
                </ImageListItem>
              ))}
          </ImageList>
    </div>
  )
}

export default FotoDigitalList;