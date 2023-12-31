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
            <div className="loguito">
              <h2 className="titulo-pag">A N A &nbsp;&nbsp;&nbsp;&nbsp; B A U E R </h2>
            </div>
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
            <Link to="/fotoanalogica">
              <button className="menu" onClick={showNavBar}>
                FOTO ANALOGICA
              </button>
            </Link>
            <Link to="/cine">
              <button className="menu" onClick={showNavBar}>
                CINE
              </button>
            </Link>
            <Link to="/reel">
              <button className="menu" onClick={showNavBar}>
                REEL
              </button>
            </Link>
            <Link to="/sobremi">
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