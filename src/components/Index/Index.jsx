import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper/modules';
import { getIndex } from '../../services/firebase';

 function Index() {
    const [Photos, setPhotos] = useState([]);
    async function leerDatos() {
        let respuesta
        respuesta = await getIndex()
        setPhotos(respuesta)
    }
    useEffect(()=>{
        leerDatos()
    }, [])
  return (
   
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {Photos.map((photo)=>{
                <SwiperSlide><img src={photo.img} alt={photo.img} /></SwiperSlide>
            })
        }
      </Swiper>
   
  );
} export default Index
