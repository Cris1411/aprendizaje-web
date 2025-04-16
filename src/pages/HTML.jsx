import React from 'react';
import { FaHtml5 } from 'react-icons/fa';

const HTMLPage = () => {
  const sections = [
    {
      id: 'estructura',
      title: 'Estructura Básica',
      description: 'La estructura básica de un documento HTML incluye la declaración DOCTYPE, el elemento html con el atributo lang, y las secciones head y body.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Página Web</title>
</head>
<body>
  <h1>Bienvenido</h1>
  <p>Este es un ejemplo de estructura HTML básica.</p>
</body>
</html>`
    },
    {
      id: 'elementos',
      title: 'Elementos Comunes',
      description: 'HTML proporciona una amplia variedad de elementos para estructurar y dar formato al contenido de tu página web.',
      code: `<!-- Encabezados -->
<h1>Título Principal</h1>
<h2>Subtítulo</h2>

<!-- Párrafos y texto -->
<p>Este es un párrafo de texto.</p>
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>

<!-- Enlaces e imágenes -->
<a href="https://ejemplo.com">Enlace</a>
<img src="imagen.jpg" alt="Descripción de la imagen">

<!-- Listas -->
<ul>
  <li>Elemento de lista desordenada</li>
</ul>
<ol>
  <li>Elemento de lista ordenada</li>
</ol>`
    },
    {
      id: 'semantica',
      title: 'HTML Semántico',
      description: 'El HTML semántico ayuda a dar significado y estructura al contenido, mejorando la accesibilidad y el SEO.',
      code: `<header>
  <nav>
    <ul>
      <li><a href="#inicio">Inicio</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <section>
      <h2>Sección del artículo</h2>
      <p>Contenido...</p>
    </section>
  </article>
  
  <aside>
    <h3>Contenido relacionado</h3>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Mi Sitio Web</p>
</footer>`
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <FaHtml5 className="page-icon" />
        <h1 className="page-title">HTML</h1>
        <p className="page-description">
          El lenguaje de marcado estándar para crear la estructura de páginas web.
        </p>
      </header>

      <div className="tech-content">
        {sections.map((section) => (
          <section key={section.id} className="tech-section">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            <div className="code-block">
              <pre>
                <code>{section.code}</code>
              </pre>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HTMLPage;