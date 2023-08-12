// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import{AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import {BsVimeo} from 'react-icons/bs'
import Forms from '../Forms/Forms'
import Footer from '../Footer/Footer'

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
            <p className='informacion'> <span className='negrita'> Soy Ana Bauer, fotógrafa y filmmaker argentina. </span>
<br />
Tengo 23 años y soy estudiante de la carrera de Dirección de Fotografía en la Universidad del Cine, aunque me dedico a la fotografía desde mi adolescencia.
<br />
Me considero simpática, trabajadora y altamente creativa, siempre en búsqueda de inspiración para nuevos proyectos.
<br />
Viajar es una de mis mayores pasiones y me brinda la posibilidad de descubrir la belleza única que se esconde en cada rincón del planeta. 
<br />
Siempre estoy buscando aprender, crecer y enfrentar nuevos desafíos. Mi objetivo es capturar la esencia y las emociones en cada imagen, resaltando la belleza intrínseca de las cosas y la singularidad de cada persona.
<br />
Creo firmemente que la fotografía y el cine son herramientas poderosa para contar, transmitir y trascender. 
<br />
En este sitio web, espero compartir con ustedes mis proyectos fotográficos y cinematográficos, mis experiencias y un poco de mi mundo. 
<br />
<span className='italica'>Gracias por visitarlo y ser parte de este viaje creativo.</span>

</p>

        </div>
    </div>
    <div className='forms-sb'>
    <Forms/>
    </div>
    <Footer />
    </div>
  )
}

export default SobreMi