import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const manejarToggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const manejarCerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <NavLink to="/" className="navbar-brand" onClick={manejarCerrarMenu}>
            <FaHome className="icon" />
            <span>Inicio</span>
          </NavLink>

          {/* Botón hamburguesa solo visible en móviles */}
          <button
            className="menu-toggle"
            aria-label={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            onClick={manejarToggleMenu}
          >
            <FaBars />
          </button>

          <div
            className={`navbar-links${menuAbierto ? " active" : ""}`}
            id="menu-principal"
            role="menu"
          >
            <NavLink to="/html" className="navbar-link" onClick={manejarCerrarMenu}>
              <FaHtml5 className="icon" />
              <span>HTML</span>
            </NavLink>

            <NavLink to="/css" className="navbar-link" onClick={manejarCerrarMenu}>
              <FaCss3Alt className="icon" />
              <span>CSS</span>
            </NavLink>

            <NavLink to="/javascript" className="navbar-link" onClick={manejarCerrarMenu}>
              <FaJs className="icon" />
              <span>JavaScript</span>
            </NavLink>

            <NavLink to="/react" className="navbar-link" onClick={manejarCerrarMenu}>
              <FaReact className="icon" />
              <span>React</span>
            </NavLink>

            <NavLink to="/databases" className="navbar-link" onClick={manejarCerrarMenu}>
              <FaDatabase className="icon" />
              <span>Bases de Datos</span>
            </NavLink>

            <button
              onClick={() => {
                toggleTheme();
                manejarCerrarMenu();
              }}
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