// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import { ImageList, ImageListItem } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCategory, getFotoAnalogica, getCategoryDV, getCategorySub } from '../../services/firebase';

// eslint-disable-next-line no-unused-vars
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
  }, [type]);
  function esMobile(){
    if(isMobile){
      isResponsive(true)
    }else{
      isResponsive(false)
    }
    
     }
     useEffect(()=>{
      esMobile();
    },[false])


  
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
        
        <ImageList variant="masonry" cols={ responsive ? 1 : 2} gap={responsive ? 30 :80}>
              {Photos.map((photo) => (
                <ImageListItem key={photo.img}>{ photo.subcat ?                   
                   <img 
                      src={`${photo.img}?w=248&fit=crop&auto=format`}
                       srcSet={`${photo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={photo.category}
                      loading="lazy"
                      className='fotogrilla'
                     onClick={
                          () => handleClick(photo.category, photo.description) } />                      
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
    </div>
  )
}

export default FotoDigitalList;