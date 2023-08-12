/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import { ImageList, ImageListItem } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { IoMdClose } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategory, getFotoAnalogica, getCategoryDV, getCategorySub } from '../../services/firebase';
import Footer from '../Footer/Footer';

// eslint-disable-next-line no-unused-vars, react/prop-types
function FotoDigitalList({type}) {  
  const [Photos, setPhotos] = useState([]);
  const [responsive, isResponsive] = useState(false)
  const navigate = useNavigate();
const params =useParams()
const idCategory = params.idCategory
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  async function leerDatos() {
    let respuesta 
    switch (type) {
        case 'ddvcat':
        respuesta = await getCategoryDV(idCategory);
        console.log(getCategoryDV);
        break;
          case 'fdcat':
            respuesta = await getCategory(idCategory);
          break;
          case 'sub':
            respuesta = await getCategorySub(idCategory);
          break;
          case 'fotoan':
            respuesta = await getFotoAnalogica();
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
  const colsConfig = {
    desktop: 2,
    mobile: 1,
  };
  
  const gapConfig = {
    desktop: 80,
    mobile: 30,
  };
  

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); 

  
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
  const disable = ( ) => {
    // eslint-disable-next-line no-undef
    console.log(hola);
  }
  
  return (
    <div className='fotos-container'>
          {modalOpen  && (
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
        
        <ImageList variant="masonry"
      cols={colsConfig[isMobile ? 'mobile' : 'desktop']}
      gap={gapConfig[isMobile ? 'mobile' : 'desktop']}>
              {Photos.map((photo) => (
                <ImageListItem key={photo.img}>{ photo.subcat ?     
                  <><div className='cover'  onClick={
                    () => handleClick(photo.category, photo.description) }>
                    <h1 className='titulo-cover'>{photo.title}</h1>
                    </div>              
                   <img 
                      src={`${photo.img}?w=248&fit=crop&auto=format`}
                       srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={photo.category}
                      loading="lazy"
                      className='fotogrilla'
                     onClick={
                          () => handleClick(photo.category, photo.description) } />                      
                </>
                : 
                <img 
                src={`${photo.img}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.category}
                loading="lazy"
                className={ photo.category === 'continuidad' ?  'foto-cont':'fotogrilla'}
                onClick={ photo.category === 'continuidad'|| responsive === true ?  () => disable():
                   () => openModal(photo.img)
                   }
            />
                }
                </ImageListItem>
                        
                        
   
              ))}
        </ImageList>
        <Footer />
    </div>
  )
}

export default FotoDigitalList;