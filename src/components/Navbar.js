import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          Ritika Kumar
          {/* <span className="gradient-text">Ritika Kumar</span> */}
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('experience')}>Experience</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('leadership')}>Leadership</button>
          <button onClick={() => scrollToSection('achievements')}>Achievements</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;