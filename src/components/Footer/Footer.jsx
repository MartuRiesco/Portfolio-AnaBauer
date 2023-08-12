// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo-mym.png'

function Footer() {
  return (
    <div className='footer container'>
        <div className='footer__content'>
            <div className='footer__content-copyright'>
                <p>©2023  Ana Bauer. Todos los derechos reservados.</p>
            </div>
            <div className='footer__content-developer'>
                <Link to='https://www.instagram.com/mymdevelopers/'>
                    <img src={Logo} alt='Web Developer - Martina & Martin'  className='footer-img'></img>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;