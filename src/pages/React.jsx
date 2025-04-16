import React from 'react';
import { FaReact } from 'react-icons/fa';

const ReactPage = () => {
  const sections = [
    {
      id: 'componentes',
      title: 'Componentes',
      description: 'Los componentes son los bloques de construcción fundamentales de React. Pueden ser funcionales o de clase.',
      code: `// Componente Funcional
const Saludo = ({ nombre }) => {
  return <h1>¡Hola, {nombre}!</h1>;
};

// Componente con Hooks
const Contador = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
};

// Componente de Clase (legacy)
class Usuario extends React.Component {
  render() {
    const { nombre, email } = this.props;
    return (
      <div>
        <h2>{nombre}</h2>
        <p>{email}</p>
      </div>
    );
  }
}`
    },
    {
      id: 'hooks',
      title: 'Hooks',
      description: 'Los Hooks permiten usar estado y otras características de React en componentes funcionales.',
      code: `// useState para estado local
const [estado, setEstado] = useState(valorInicial);

// useEffect para efectos secundarios
useEffect(() => {
  // Se ejecuta después del render
  document.title = \`Contador: \${count}\`;
  
  return () => {
    // Limpieza (opcional)
    document.title = 'React App';
  };
}, [count]); // Solo se ejecuta si count cambia

// useContext para contexto
const valor = useContext(MiContexto);

// useRef para referencias
const inputRef = useRef(null);

// useCallback para memorizar funciones
const memoizedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// useMemo para memorizar valores
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`
    },
    {
      id: 'estado',
      title: 'Manejo de Estado',
      description: 'Diferentes formas de manejar el estado en aplicaciones React.',
      code: `// Estado Local con useState
const [user, setUser] = useState({
  name: '',
  email: ''
});

// Actualizaciones de Estado
setUser(prevUser => ({
  ...prevUser,
  name: 'Nuevo Nombre'
}));

// Context API
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Redux (gestión de estado global)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});`
    },
    {
      id: 'routing',
      title: 'Enrutamiento',
      description: 'Implementación de navegación y rutas en aplicaciones React con React Router.',
      code: `// Configuración básica
import { 
  BrowserRouter,
  Routes,
  Route,
  Link 
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

// Hooks de enrutamiento
function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1>Usuario {id}</h1>
      <button onClick={() => navigate('/')}>
        Volver
      </button>
    </div>
  );
}`
    },
    {
      id: 'optimizacion',
      title: 'Optimización',
      description: 'Técnicas para mejorar el rendimiento de aplicaciones React.',
      code: `// React.memo para evitar renders innecesarios
const MiComponente = React.memo(({ dato }) => {
  return <div>{dato}</div>;
});

// Lazy Loading de componentes
const ComponentePesado = React.lazy(() => 
  import('./ComponentePesado')
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ComponentePesado />
    </Suspense>
  );
}

// Virtualización de listas
import { FixedSizeList } from 'react-window';

function Lista({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}`
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <FaReact className="page-icon" />
        <h1 className="page-title">React</h1>
        <p className="page-description">
          La biblioteca de JavaScript para construir interfaces de usuario modernas y reactivas.
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

export default ReactPage;