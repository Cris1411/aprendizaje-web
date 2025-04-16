import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <NavLink to="/" className="navbar-brand">
            <FaHome className="icon" />
            <span>Inicio</span>
          </NavLink>

          <div className="navbar-links">
            <NavLink to="/html" className="navbar-link">
              <FaHtml5 className="icon" />
              <span>HTML</span>
            </NavLink>

            <NavLink to="/css" className="navbar-link">
              <FaCss3Alt className="icon" />
              <span>CSS</span>
            </NavLink>

            <NavLink to="/javascript" className="navbar-link">
              <FaJs className="icon" />
              <span>JavaScript</span>
            </NavLink>

            <NavLink to="/react" className="navbar-link">
              <FaReact className="icon" />
              <span>React</span>
            </NavLink>

            <NavLink to="/databases" className="navbar-link">
              <FaDatabase className="icon" />
              <span>Bases de Datos</span>
            </NavLink>

            <button 
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;