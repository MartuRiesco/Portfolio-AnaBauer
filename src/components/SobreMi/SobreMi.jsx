// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import{AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {BsVimeo} from 'react-icons/bs'
import Forms from '../Forms/Forms'

function SobreMi() {
  return (
    <div className='container-sb'>
    <div className='sobremi-container'>
        <div className='sobremi-data'>
            <img src="https://i.imgur.com/sHs5DQ4.jpg" alt="foton ana" className='fotoana' />
            <div className='sobremi-iconos'>
                <div className='iconos'>
               <a href="https://www.instagram.com/bauerani/" className='iconos-sb'> <AiOutlineInstagram/></a>              
               <a href="https://www.youtube.com/channel/UCIHvh-B6-JEnVSUcS2TQDAA" className='iconos-sb'> <AiOutlineYoutube/></a>
               <a href="https://vimeo.com/user202548570" className='iconos-sb'> <BsVimeo/></a>               
              <a href="https://drive.google.com/file/d/1vichv6PI5EEFqK5-fXk7ETLPPvnYe19f/view"> <h3 className='cv'> CV</h3></a>
                </div>

            </div>

        </div>
        <div className='sobremi-info'>
            <p>Soy Ana Bauer, fotógrafa y filmmaker. Tengo 23 años y soy argentina. 
Actualmente, me encuentro estudiando la carrera de Dirección de Fotografía en la Universidad del Cine, aunque estudio y me desempeño como fotógrafa desde la adolescencia.
Me considero una persona simpática, trabajadora y altamente creativa, siempre en búsqueda de inspiración para nuevos proyectos.
Hablo cuatro idiomas, lo que me permite conectar con personas de diferentes culturas y enriquecer mi visión del mundo. Además, viajar es una de mis mayores pasiones y me brinda la posibilidad de descubrir la belleza única que se esconde en cada rincón del planeta. Adoro aprender, explotar y estoy  constantemente persiguiendo nuevos desafíos. 
Estoy siempre en búsqueda de capturar la esencia y emociones en cada imagen que capturo, resaltando la belleza intrínseca de las cosas y la unicidad de cada persona. 
Creo firmemente que la fotografía y el cine son herramientas poderosa para contar, transmitir emociones y mostrar mi forma de transitar la vida.
En este sitio web, espero compartir con ustedes mis proyectos fotográficos y cinematográficos, mis experiencias y un poco de mi mundo. 
Gracias por visitarlo y ser parte de este viaje creativo.
</p>

        </div>
    </div>
    <div className='forms-sb'>
    <Forms/>
    </div>
    </div>
  )
}

export default SobreMi