import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Pagina1 from './Routes/pagina1';
import Pagina2 from './Routes/pagina2';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="pagina1" element={<Pagina1 />} />
      <Route path="pagina2" element={<Pagina2 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
