import React, { useEffect, useState } from 'react'
import { getFotoAnalogica } from '../../services/firebase';
import { IoMdClose } from 'react-icons/io';
import ImageListItem from '@mui/material/ImageListItem'
import { ImageList } from '@mui/material';
import './style.css'



function FotoAnalogica() {
    const [Users, setUser] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };
    async function leerDatos() {
        let respuesta = await getFotoAnalogica();
        setUser(respuesta);
      
      }
      useEffect(() => {
        leerDatos();
      }, []);
  return (
    <div className='grilla-fotos'>
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
        {Users.map((user)=>(
             <ImageListItem key={user.img}>
             <img
               src={`${user.img}?w=248&fit=crop&auto=format`}
               srcSet={`${user.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
               alt={user.category}
               loading="lazy"
               className='fotogrilla'
               onClick={() => openModal(user.img)}
             />
              
           </ImageListItem>
        ))}
        </ImageList>

    </div>
  )
}
export default FotoAnalogica