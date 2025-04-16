import React from 'react';
import { FaJs } from 'react-icons/fa';

const JavaScriptPage = () => {
  const sections = [
    {
      id: 'fundamentos',
      title: 'Fundamentos',
      description: 'Los conceptos básicos de JavaScript que todo desarrollador debe conocer.',
      code: `// Variables y tipos de datos
let nombre = 'Juan';
const edad = 25;
var activo = true;

// Arrays y objetos
const numeros = [1, 2, 3, 4, 5];
const usuario = {
  nombre: 'Ana',
  edad: 28,
  email: 'ana@ejemplo.com'
};

// Funciones
function saludar(nombre) {
  return \`¡Hola, \${nombre}!\`;
}

// Arrow functions
const sumar = (a, b) => a + b;

// Template literals
const mensaje = \`El usuario \${usuario.nombre} 
tiene \${usuario.edad} años\`;`
    },
    {
      id: 'dom',
      title: 'Manipulación del DOM',
      description: 'Interactuar con el Document Object Model (DOM) para modificar elementos HTML dinámicamente.',
      code: `// Seleccionar elementos
const titulo = document.querySelector('h1');
const botones = document.querySelectorAll('.btn');

// Modificar elementos
titulo.textContent = 'Nuevo título';
titulo.style.color = 'blue';

// Crear elementos
const nuevoDiv = document.createElement('div');
nuevoDiv.className = 'contenedor';
nuevoDiv.innerHTML = '<p>Nuevo contenido</p>';

// Eventos
document.getElementById('miBoton')
  .addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Botón clickeado');
  });

// Delegación de eventos
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    // Manejar click en botones
  }
});`
    },
    {
      id: 'async',
      title: 'Programación Asíncrona',
      description: 'Manejo de operaciones asíncronas con Promesas, async/await y más.',
      code: `// Promesas
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.ejemplo.com/datos')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
};

// Async/Await
async function cargarUsuarios() {
  try {
    const response = await fetch('/api/usuarios');
    const usuarios = await response.json();
    return usuarios;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Múltiples promesas
Promise.all([
  fetch('/api/usuarios'),
  fetch('/api/posts'),
  fetch('/api/comentarios')
])
.then(([usuarios, posts, comentarios]) => {
  // Manejar resultados
})
.catch(error => console.error(error));`
    },
    {
      id: 'moderno',
      title: 'JavaScript Moderno',
      description: 'Características modernas de ES6+ que hacen el código más limpio y eficiente.',
      code: `// Desestructuración
const { nombre, edad } = usuario;
const [primero, segundo, ...resto] = numeros;

// Spread operator
const nuevoArray = [...numeros, 6, 7];
const nuevoObjeto = { ...usuario, rol: 'admin' };

// Módulos
import { useState, useEffect } from 'react';
export const miFuncion = () => {};

// Map, Filter, Reduce
const duplicados = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const suma = numeros.reduce((acc, n) => acc + n, 0);

// Optional chaining
const ciudad = usuario?.direccion?.ciudad;

// Nullish coalescing
const nombre = usuario.nombre ?? 'Anónimo';`
    },
    {
      id: 'patrones',
      title: 'Patrones de Diseño',
      description: 'Patrones comunes en JavaScript para escribir código más mantenible y escalable.',
      code: `// Módulo
const Contador = (function() {
  let count = 0;
  
  return {
    incrementar: () => ++count,
    decrementar: () => --count,
    obtenerValor: () => count
  };
})();

// Observer
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data));
    }
  }
}

// Factory
function crearElemento(tipo) {
  return {
    tipo,
    crear() {
      return document.createElement(tipo);
    }
  };
}`
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <FaJs className="page-icon" />
        <h1 className="page-title">JavaScript</h1>
        <p className="page-description">
          El lenguaje de programación que hace que las páginas web cobren vida.
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

export default JavaScriptPage;