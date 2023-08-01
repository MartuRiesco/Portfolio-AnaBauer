// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './styles.css';
import { ImageList, ImageListItem } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCategory } from '../../services/firebase';

// eslint-disable-next-line no-unused-vars
function FotoDigitalList() {  
  const [Datos, setDatos] = useState([]);
  const navigate = useNavigate();
const params =useParams()
const idCategory = params.idCategory
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  async function leerDatos() {
    let respuesta = await getCategory(idCategory);
    setDatos(respuesta);
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
    navigate (`/${titulo}/${categoria}`);
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
        <ImageList variant="masonry" cols={2} gap={80}>
              {Datos.map((dato) => (
              
                <ImageListItem key={dato.img}>
                        <img 
                            src={`${dato.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${dato.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={dato.category}
                            loading="lazy"
                            className='fotogrilla'
                            // Si contiene sub-category es true, navega hacia ella, si es false, activa openModal
                            onClick={dato.subcat ? 
                              () => handleClick(dato.category, dato.description) 
                              : () => openModal(dato.img)}

                        /> </ImageListItem>
                        
                        
   
              ))}
        </ImageList>
    </div>
  )
}

export default FotoDigitalList;