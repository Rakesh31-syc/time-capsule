import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Time Capsule. All rights reserved.</p>
      <div className="social-icons">
        <a href="#facebook" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#x" aria-label="X"><i className="fab fa-x"></i></a>
    
        <a href="#instagram" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;