import { Outlet,Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Paginas</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/pagina1">pagina1</Link> | {'  '}
        <Link to="/pagina2">pagina2</Link>
      </nav>
      <Outlet />
    </div>
  );
}
