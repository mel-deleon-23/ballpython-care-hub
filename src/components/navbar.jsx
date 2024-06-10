import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import '../css/styles.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }
  
    return (
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="logo">
            <h3>Ball Python Care Hub</h3>
          </div>
          <div className="navbar-right">
            <div className="search-bar-container">
              <input type="text" className="search-bar" placeholder="Search" />
              <FaSearch className="search-icon" />
            </div>
            <FaUserCircle className="login-icon" size={24} />
            <div className='menu-icon' onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </div>
        {/* <div className="navbar-menu"> */}
        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <a href="/" onClick={toggleMenu}>Home</a>
          <a href="/about" onClick={toggleMenu}>About Us</a>
          <a href="/careguides" onClick={toggleMenu}>Care Guides</a>
          <a href="/resources" onClick={toggleMenu}>Resources</a>
          <a href="/ballpythons" onClick={toggleMenu}>Ball Pythons</a>
          <a href="/contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    );
  }
  
  export default Navbar;