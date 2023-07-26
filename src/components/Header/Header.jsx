// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import './style.css';
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { VscListSelection } from 'react-icons/vsc';

function Header() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  return (
    <header>
      <div className="header__content container">
        <div className="header__content-logo">
          <Link to="/">
            {' '}
            <section className="loguito">
              <h2 className="titulo-pag">A N A </h2>
              <h2 className="titulo-pag">B A U E R </h2>{' '}
            </section>
          </Link>
        </div>
        <div className="header__content-menu">
          <nav ref={navRef}>
            <Link to="/fotodigital">
              <button className="menu" onClick={showNavBar}>
                {' '}
                FOTO DIGITAL
              </button>
            </Link>
            <Link to="/fotofija">
              <button className="menu" onClick={showNavBar}>
                FOTO 35mm
              </button>
            </Link>
            <Link to="/videos">
              <button className="menu" onClick={showNavBar}>
                VIDEOS
              </button>
            </Link>
            <Link to="/publicaciones">
              <button className="menu" onClick={showNavBar}>
                REEL
              </button>
            </Link>
            <Link to="/aboutme">
              <button className="menu" onClick={showNavBar}>
                SOBRE MÍ
              </button>
            </Link>

            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <BsXLg />
            </button>
          </nav>
          <div className="cart">
            <button className="nav-btn" onClick={showNavBar}>
              <VscListSelection />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;