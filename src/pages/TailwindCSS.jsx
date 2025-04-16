import React, { useState } from 'react';

const TailwindCSSPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Fundamentos',
      icon: '📚',
      content: (
        <div className="tab-content" role="region" aria-labelledby="fundamentos-title">
          <h2 id="fundamentos-title" className="tab-title">
            Fundamentos de Tailwind CSS
          </h2>
          <div className="code-block">
            <pre className="code-pre" role="presentation">
              <code>
                {/* Código de ejemplo */
                `// Utilidades comunes
<div class="p-4 m-4 bg-blue-500 text-white rounded-lg">
  Contenedor con padding, margen y fondo
</div>

// Flexbox
<div class="flex flex-col sm:flex-row items-center justify-between">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
</div>

// Grid
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</div>`}
              </code>
            </pre>
          </div>
          <p className="tab-description">
            Tailwind CSS es un framework de utilidades que permite construir diseños 
            directamente en el HTML usando clases predefinidas.
          </p>
        </div>
      )
    },
    {
      title: 'Componentes',
      icon: '🧩',
      content: (
        <div className="tab-content" role="region" aria-labelledby="componentes-title">
          <h2 id="componentes-title" className="tab-title">
            Componentes Reutilizables
          </h2>
          <div className="code-block">
            <pre className="code-pre">
              <code>
{`<!-- Card Component -->
<div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Imagen descriptiva">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Título de la tarjeta</div>
    <p class="text-gray-700 text-base">
      Descripción de la tarjeta con texto de ejemplo.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full 
      px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #etiqueta
    </span>
  </div>
</div>

<!-- Button Component -->
<button class="inline-flex items-center px-4 py-2 
  border border-transparent text-sm font-medium 
  rounded-md shadow-sm text-white bg-indigo-600 
  hover:bg-indigo-700 focus:outline-none 
  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Botón
</button>`}
              </code>
            </pre>
          </div>
          <p className="tab-description">
            Con Tailwind puedes crear componentes reutilizables manteniendo 
            la consistencia del diseño en toda la aplicación.
          </p>
        </div>
      )
    },

    {
      title: 'Utilidades',
      icon: '🛠️',
      content: (
        <div className="tab-content">
          <div className="code-block">
            <pre className="code-pre">
              <code>{`// Utilidades comunes
<div class="p-4 m-4 bg-blue-500 text-white rounded-lg">
  Contenedor con padding, margen y fondo
</div>

// Flexbox
<div class="flex flex-col sm:flex-row items-center justify-between">
  <div>Elemento 1</div>
  <div>Elemento 2</div>
</div>

// Grid
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
</div>`}</code>
            </pre>
          </div>
          <p className="tab-description">
            Tailwind proporciona una amplia gama de utilidades para espaciado,
            flexbox, grid y más. Son clases atómicas que se pueden combinar.
          </p>
        </div>
      ),
    },
    {
      title: 'Responsive',
      icon: '📱',
      content: (
        <div className="tab-content">
          <div className="code-block">
            <pre className="code-pre">
              <code>{`// Breakpoints
<div class="text-sm sm:text-base lg:text-lg">
  Texto que cambia de tamaño según el dispositivo
</div>

// Ocultar/Mostrar
<div class="hidden sm:block">
  Visible solo en pantallas medianas y grandes
</div>

// Grid Responsive
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Columna 1</div>
  <div>Columna 2</div>
  <div>Columna 3</div>
  <div>Columna 4</div>
</div>`}</code>
            </pre>
          </div>
          <p className="tab-description">
            Tailwind usa breakpoints predefinidos para crear diseños responsive:
            sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px).
          </p>
        </div>
      ),
    },
    {
      title: 'Personalización',
      icon: '🎨',
      content: (
        <div className="tab-content">
          <h2 id="personalizacion-title" className="tab-title">
            Personalización
          </h2>
          <div className="code-block">
            <pre className="code-pre">
              <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
}`}</code>
            </pre>
          </div>
          <p className="tab-description">
            Tailwind es altamente personalizable a través de su archivo de
            configuración. Puedes extender colores, espaciados, fuentes y más.
          </p>
        </div>
      )
    },
    {
      title: 'Animaciones',
      icon: '✨',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
            <pre className="text-sm sm:text-base text-gray-300 overflow-x-auto">
              <code>{`// Transiciones
<button class="transition duration-300 ease-in-out transform hover:scale-105">
  Botón con efecto hover
</button>

// Animaciones
<div class="animate-bounce">
  Elemento con animación
</div>

// Gradientes
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Fondo con gradiente
</div>`}</code>
            </pre>
          </div>
          <p className="text-sm sm:text-base text-gray-600">
            Tailwind incluye utilidades para transiciones, animaciones y efectos
            visuales que mejoran la experiencia de usuario.
          </p>
        </div>
      ),
    },

    {
      title: 'Optimización',
      icon: '⚡',
      content: (
        <div className="space-y-6" role="region" aria-labelledby="optimizacion-title">
          <h2 id="optimizacion-title" className="text-xl font-semibold text-gray-900">
            Optimización y Producción
          </h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>
{`// PurgeCSS Configuration
module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    options: {
      safelist: ['bg-red-500', 'px-4'],
    }
  },
  // ... resto de la configuración
}

// PostCSS Configuration
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? { cssnano: { preset: 'default' } }
      : {})
  }
}`}
              </code>
            </pre>
          </div>
          <p className="text-gray-600">
            Tailwind incluye herramientas para optimizar el CSS final, eliminando 
            clases no utilizadas y minimizando el tamaño del archivo.
          </p>
        </div>
      )
    }
  ];

  return (
    <main className="main-content">
      <div className="container">
        <header className="header" aria-labelledby="tailwind-title">
          <h1 
            id="tailwind-title"
            className="main-title"
          >
            Tailwind CSS
          </h1>
          <p className="main-description">
            Aprende a utilizar Tailwind CSS para crear diseños modernos y eficientes.
          </p>
        </header>

        <div className="tabs-container">
          {/* Tabs */}
          <div 
            className="tabs-list" 
            role="tablist" 
            aria-label="Secciones de Tailwind CSS"
          >
            <nav className="tabs-navigation">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`tab-button ${
                    activeTab === index
                      ? 'active-tab'
                      : 'inactive-tab'
                  }`}
                  role="tab"
                  aria-selected={activeTab === index}
                  aria-controls={`tabpanel-${index}`}
                  id={`tab-${index}`}
                >
                  <span className="tab-icon" aria-hidden="true">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="tabs-content">
            {tabs.map((tab, index) => (
              <div
                key={index}
                id={`tabpanel-${index}`}
                role="tabpanel"
                aria-labelledby={`tab-${index}`}
                className={activeTab === index ? 'tab-panel active' : 'tab-panel'}
                tabIndex={0}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TailwindCSSPage;