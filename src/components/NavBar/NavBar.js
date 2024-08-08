import React, { useState, useEffect } from 'react';
import { FaAngleUp, FaBars } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setShowScrollUpBtn(window.scrollY > 300);
      setMenuVisible(window.scrollY > 0); // Show menu after any scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <>
      <button className={`scroll-up-btn ${showScrollUpBtn ? 'show' : ''}`} onClick={handleScrollUp}>
        <FaAngleUp />
      </button>
      <nav className={`navbar ${isSticky ? 'sticky' : ''} ${menuVisible ? 'visible' : ''}`}>
        <div className="max-width">
          <a href="#home" className="logo">
            <img src="https://i.postimg.cc/g0PZKHWS/home-icon.webp" alt="Logo" />
          </a>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="menu-btn" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className="menu-btn" onClick={handleLinkClick}>Sobre Mi</a></li>
            <li><a href="#skills" className="menu-btn" onClick={handleLinkClick}>Habilidades</a></li>
            <li><a href="#proyectos" className="menu-btn" onClick={handleLinkClick}>Proyectos</a></li>
            <li><a href="#contact" className="menu-btn" onClick={handleLinkClick}>Contacto</a></li>
          </ul>
          <button className="menu-btn" onClick={handleMenuClick}>
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
