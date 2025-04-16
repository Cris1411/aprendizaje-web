import React from 'react';
import { FaCss3Alt } from 'react-icons/fa';

const CSSPage = () => {
  const sections = [
    {
      id: 'selectores',
      title: 'Selectores',
      description: 'Los selectores CSS te permiten apuntar a elementos HTML específicos para aplicar estilos.',
      code: `/* Selector de elemento */
p {
  color: blue;
}

/* Selector de clase */
.mi-clase {
  background-color: #f0f0f0;
}

/* Selector de ID */
#mi-id {
  border: 1px solid black;
}

/* Selector de atributo */
input[type="text"] {
  padding: 8px;
}

/* Selector descendiente */
.contenedor p {
  margin: 10px;
}

/* Pseudo-clases */
button:hover {
  background-color: #e0e0e0;
}`
    },
    {
      id: 'box-model',
      title: 'Modelo de Caja',
      description: 'El modelo de caja es fundamental en CSS y define cómo se calcula el tamaño total de un elemento.',
      code: `.elemento {
  /* Contenido */
  width: 300px;
  height: 200px;
  
  /* Relleno interno */
  padding: 20px;
  
  /* Borde */
  border: 2px solid #333;
  
  /* Margen externo */
  margin: 10px;
  
  /* Cambiar el modelo de caja */
  box-sizing: border-box;
}`
    },
    {
      id: 'flexbox',
      title: 'Flexbox',
      description: 'Flexbox es un modelo de diseño unidimensional para crear layouts flexibles y responsivos.',
      code: `.contenedor-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.item-flex {
  flex: 1;
  padding: 20px;
}

/* Dirección del flex */
.columna {
  flex-direction: column;
}

/* Envoltura de elementos */
.envolver {
  flex-wrap: wrap;
}`
    },
    {
      id: 'grid',
      title: 'CSS Grid',
      description: 'CSS Grid es un sistema de diseño bidimensional que permite crear layouts complejos de manera sencilla.',
      code: `.contenedor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

/* Áreas de grid */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar contenido anuncios"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.contenido { grid-area: contenido; }
.anuncios { grid-area: anuncios; }
.footer { grid-area: footer; }`
    },
    {
      id: 'responsive',
      title: 'Diseño Responsivo',
      description: 'Técnicas para hacer que tu sitio web se adapte a diferentes tamaños de pantalla.',
      code: `/* Media Queries */
@media (max-width: 768px) {
  .contenedor {
    flex-direction: column;
  }
}

/* Unidades Relativas */
.elemento {
  font-size: 1rem;
  padding: 2em;
  width: 90vw;
  height: 100vh;
}

/* Imágenes Responsivas */
.imagen {
  max-width: 100%;
  height: auto;
}

/* Grid Responsivo */
.grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  );
  gap: 20px;
}`
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <FaCss3Alt className="page-icon" />
        <h1 className="page-title">CSS</h1>
        <p className="page-description">
          El lenguaje de estilos que da vida y diseño a las páginas web.
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

export default CSSPage;