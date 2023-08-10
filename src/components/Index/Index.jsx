import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation,Autoplay } from 'swiper/modules';
import { getIndex } from '../../services/firebase';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

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
    console.log(Photos);
  return (
   
    <>
    
    <Swiper 
   
  navigation={true}
    modules={[Pagination, Navigation, Autoplay]} 
    className="mySwiper"
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    >
     {Photos.map((photo)=>
      <SwiperSlide><img src={photo.img} alt={photo.img} className='imagen-swiper' /></SwiperSlide>
     )}
    </Swiper>
  </>
   
  );
} export default Index
