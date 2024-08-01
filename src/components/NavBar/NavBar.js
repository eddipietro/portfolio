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

  return (
    <>
      <button className={`scroll-up-btn ${showScrollUpBtn ? 'show' : ''}`} onClick={handleScrollUp}>
        <FaAngleUp />
      </button>
      <nav className={`navbar ${isSticky ? 'sticky' : ''} ${menuVisible ? 'visible' : ''}`}>
        <div className="max-width">
          <a href="#" className="logo">
            <img src="icon.png" alt="Logo" />
          </a>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="menu-btn">Home</a></li>
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#tech-skills" className="menu-btn">Tech Skills</a></li>
            <li><a href="#skills-hobbies" className="menu-btn">Skills and Hobbies</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
