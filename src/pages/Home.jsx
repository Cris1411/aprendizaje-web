import React from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="main-content">
      <header className="home-header">
        <h1 className="home-title">Aprende Desarrollo Web</h1>
        <p className="home-description">
          Explora las tecnologías fundamentales para convertirte en un desarrollador web full-stack
        </p>
      </header>

      <div className="tech-grid">
        <Link to="/html" className="tech-card">
          <div className="tech-card-icon">
            <FaHtml5 />
          </div>
          <h2 className="tech-card-title">HTML</h2>
          <p className="tech-card-description">
            El lenguaje estándar para crear y estructurar contenido en la web.
          </p>
        </Link>

        <Link to="/css" className="tech-card">
          <div className="tech-card-icon">
            <FaCss3Alt />
          </div>
          <h2 className="tech-card-title">CSS</h2>
          <p className="tech-card-description">
            El lenguaje de estilos que da vida y diseño a las páginas web.
          </p>
        </Link>

        <Link to="/javascript" className="tech-card">
          <div className="tech-card-icon">
            <FaJs />
          </div>
          <h2 className="tech-card-title">JavaScript</h2>
          <p className="tech-card-description">
            El lenguaje de programación que hace interactiva la web.
          </p>
        </Link>

        <Link to="/react" className="tech-card">
          <div className="tech-card-icon">
            <FaReact />
          </div>
          <h2 className="tech-card-title">React</h2>
          <p className="tech-card-description">
            La biblioteca de JavaScript para construir interfaces de usuario modernas.
          </p>
        </Link>

        <Link to="/databases" className="tech-card">
          <div className="tech-card-icon">
            <FaDatabase />
          </div>
          <h2 className="tech-card-title">Bases de Datos</h2>
          <p className="tech-card-description">
            Fundamentos de bases de datos relacionales y NoSQL para aplicaciones web.
          </p>
        </Link>
      </div>

      <section className="features-section">
        <h2 className="features-title">¿Por qué aprender con nosotros?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Contenido Estructurado</h3>
            <p>Aprende de manera organizada y progresiva, desde los fundamentos hasta temas avanzados.</p>
          </div>
          <div className="feature-card">
            <h3>Ejemplos Prácticos</h3>
            <p>Cada tema incluye ejemplos de código reales y casos prácticos para reforzar tu aprendizaje.</p>
          </div>
          <div className="feature-card">
            <h3>Tecnologías Modernas</h3>
            <p>Mantente actualizado con las últimas tendencias y mejores prácticas en desarrollo web.</p>
          </div>
          <div className="feature-card">
            <h3>Recursos Gratuitos</h3>
            <p>Accede a una amplia colección de recursos, tutoriales y herramientas sin costo.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;