// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import { ImageList, ImageListItem } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCategory, getCategoryDV, getCategorySub } from '../../services/firebase';

// eslint-disable-next-line no-unused-vars
function FotoDigitalList({type}) {  
  const [Photos, setPhotos] = useState([]);
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
          break;
          case 'fdcat':
            respuesta = await getCategory(idCategory);
          break;
          case 'sub':
            respuesta = await getCategorySub(idCategory);
          break;
      default: 
      alert('hola')
      break;
      
    }
  
    setPhotos(respuesta);
  }
  useEffect(() => {
    leerDatos();
  }, [Photos]);


  
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
                onClick={ photo.category === 'continuidad' ?  () => disable():
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