import React from 'react';
import { FaDatabase } from 'react-icons/fa';

const DatabasesPage = () => {
  const sections = [
    {
      id: 'sql',
      title: 'SQL Básico',
      description: 'Comandos fundamentales de SQL para manipular y consultar bases de datos relacionales.',
      code: `-- Crear una tabla
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos
INSERT INTO usuarios (nombre, email) 
VALUES ('Juan Pérez', 'juan@email.com');

-- Consultar datos
SELECT nombre, email 
FROM usuarios 
WHERE id > 100 
ORDER BY fecha_registro DESC;

-- Actualizar datos
UPDATE usuarios 
SET nombre = 'Juan A. Pérez' 
WHERE id = 1;

-- Eliminar datos
DELETE FROM usuarios 
WHERE fecha_registro < '2023-01-01';`
    },
    {
      id: 'joins',
      title: 'Joins y Relaciones',
      description: 'Diferentes tipos de JOIN para combinar datos de múltiples tablas.',
      code: `-- INNER JOIN
SELECT p.nombre, c.total
FROM pedidos p
INNER JOIN compras c ON p.id = c.pedido_id;

-- LEFT JOIN
SELECT u.nombre, p.fecha
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id;

-- Múltiples JOINs
SELECT 
  u.nombre,
  p.fecha,
  d.producto,
  d.cantidad
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
LEFT JOIN detalles d ON p.id = d.pedido_id
WHERE p.estado = 'completado';

-- Subqueries
SELECT nombre
FROM usuarios
WHERE id IN (
  SELECT usuario_id 
  FROM pedidos 
  WHERE total > 1000
);`
    },
    {
      id: 'indices',
      title: 'Índices y Optimización',
      description: 'Técnicas para mejorar el rendimiento de las consultas mediante índices y optimización.',
      code: `-- Crear índice
CREATE INDEX idx_email ON usuarios(email);

-- Índice compuesto
CREATE INDEX idx_nombre_email 
ON usuarios(nombre, email);

-- Analizar consulta
EXPLAIN SELECT * 
FROM usuarios 
WHERE email LIKE '%@gmail.com';

-- Optimizar consulta
SELECT u.* 
FROM usuarios u
FORCE INDEX (idx_email)
WHERE u.email LIKE '%@gmail.com';

-- Estadísticas de tabla
ANALYZE TABLE usuarios;

-- Ver uso de índices
SHOW INDEX FROM usuarios;`
    },
    {
      id: 'nosql',
      title: 'NoSQL (MongoDB)',
      description: 'Operaciones básicas en bases de datos NoSQL usando MongoDB como ejemplo.',
      code: `// Insertar documento
db.usuarios.insertOne({
  nombre: "Ana García",
  email: "ana@email.com",
  edad: 28,
  intereses: ["programación", "diseño"]
});

// Consultar documentos
db.usuarios.find({
  edad: { $gt: 25 },
  intereses: "programación"
}).sort({ nombre: 1 });

// Actualizar documento
db.usuarios.updateOne(
  { email: "ana@email.com" },
  { 
    $set: { edad: 29 },
    $push: { 
      intereses: "bases de datos" 
    }
  }
);

// Agregaciones
db.pedidos.aggregate([
  { $match: { estado: "completado" } },
  { $group: {
      _id: "$usuario_id",
      total: { $sum: "$monto" },
      pedidos: { $count: {} }
    }
  },
  { $sort: { total: -1 } }
]);`
    },
    {
      id: 'seguridad',
      title: 'Seguridad',
      description: 'Prácticas de seguridad esenciales para proteger la base de datos.',
      code: `-- Crear usuario con privilegios limitados
CREATE USER 'app_user'@'localhost' 
IDENTIFIED BY 'contraseña_segura';

GRANT SELECT, INSERT, UPDATE 
ON mi_base.* 
TO 'app_user'@'localhost';

-- Prevenir SQL Injection
-- ❌ MAL (vulnerable):
"SELECT * FROM usuarios WHERE id = " + userId

-- ✅ BIEN (usando prepared statements):
const query = 'SELECT * FROM usuarios WHERE id = ?';
connection.query(query, [userId]);

-- Backup y Restore
-- Realizar backup
mysqldump -u root -p mi_base > backup.sql

-- Restaurar backup
mysql -u root -p mi_base < backup.sql

-- Encriptar datos sensibles
UPDATE usuarios 
SET password = SHA2(password, 256)
WHERE id = 1;`
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <FaDatabase className="page-icon" />
        <h1 className="page-title">Base de Datos</h1>
        <p className="page-description">
          Fundamentos de bases de datos relacionales y NoSQL para aplicaciones web modernas.
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

export default DatabasesPage;