import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">Aprendizaje Web</h3>
            <p className="footer-description">
              Explora y aprende las tecnologías fundamentales para el desarrollo web moderno.
            </p>
          </div>

          <div className="footer-links">
            <Link to="/" className="footer-link">Inicio</Link>
            <Link to="/html" className="footer-link">HTML</Link>
            <Link to="/css" className="footer-link">CSS</Link>
            <Link to="/javascript" className="footer-link">JavaScript</Link>
            <Link to="/react" className="footer-link">React</Link>
            <Link to="/databases" className="footer-link">Bases de Datos</Link>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/cris1411"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/cristian-roberto-sanchez-canesin-044283b7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:cris1411@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;