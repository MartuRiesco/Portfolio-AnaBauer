<<<<<<< HEAD
// eslint-disable-next-line react/prop-types
=======
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import { ImageList, ImageListItem } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCategory } from '../../services/firebase';

// eslint-disable-next-line no-unused-vars
function FotoDigitalList() {  
  const [Photos, setPhotos] = useState([]);
  const navigate = useNavigate();
const params =useParams()
const idCategory = params.idCategory
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  async function leerDatos() {
    let respuesta = await getCategory(idCategory);
    setPhotos(respuesta);
  }
  useEffect(() => {
    leerDatos();
  }, []);


  
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
  const handleClick = (titulo, categoria) => {
    navigate (`/fotodigital/${titulo}/${categoria}`);
  };
>>>>>>> 7447806e6b8e301253ee1cff3b3b50275fac756f

import FotoDigital from '../FotoDigital/FotoDigital'
// eslint-disable-next-line react/prop-types
const FotoDigitalList = ({categories}) => {
  return (
<<<<<<< HEAD
      <div>
             
            <FotoDigital categories={categories}/>
                  
        </div>
=======
    <div className='fotos-container'>
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
        <ImageList variant="masonry" cols={2} gap={80}>
              {Photos.map((photo) => (
                <ImageListItem key={photo.img}>{ photo.subcat ?                   
                   <img 
                      src={`${photo.img}?w=248&fit=crop&auto=format`}
                       srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={photo.category}
                      loading="lazy"
                      data-title={photo.title}
                      data-img={photo.img}
                      className='fotogrilla'
                     onClick={
                          () => handleClick(photo.category, dato.description) } />                      
                : 
                <img 
                src={`${photo.img}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.category}
                loading="lazy"
                className='fotogrilla'
                onClick={
                   () => openModal(photo.img)}
            />
                }
                </ImageListItem>
                        
                        
   
              ))}
        </ImageList>
    </div>
>>>>>>> 7447806e6b8e301253ee1cff3b3b50275fac756f
  )
}

export default FotoDigitalList