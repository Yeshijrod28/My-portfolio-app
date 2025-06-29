
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-header">
            <h3 className="footer-name">Yeshi Dorji</h3>
            <p className="footer-description">
              Software Developer passionate about creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com/Yeshijrod28" className="footer-link">GitHub</a>
            <a href="https://x.com/Yeshijrod99" className="footer-link">X</a>
            <a href="https://www.facebook.com/yeshijrod49" className="footer-link">Facebook</a>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Yeshi Dorji. All rights reserved. Built with React & CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
