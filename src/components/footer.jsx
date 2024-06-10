import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import '../css/styles.css';

const Footer = () => {
    return (
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h4>Ball Python Care Hub</h4>
          </div>
          <div className="footer-center">
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#resources">Resources</a>
          </div>
          <div className="footer-right">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ball Python Care Hub. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;