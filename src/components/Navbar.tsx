import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'program', 'benefits', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>세대혁신 네트워크 포럼</h1>
        </div>
        <button className="navbar-mobile-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={closeMenu}
            >
              홈
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={closeMenu}
            >
              소개
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#program" 
              className={activeSection === 'program' ? 'active' : ''}
              onClick={closeMenu}
            >
              프로그램
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#benefits" 
              className={activeSection === 'benefits' ? 'active' : ''}
              onClick={closeMenu}
            >
              기대효과
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              참가신청
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 