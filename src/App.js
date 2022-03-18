import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sobremi' element={<About />}></Route>
          <Route path='/certificaciones' element={<Certifications />}></Route>
          <Route path='/proyectos' element={<Projects />}></Route>
          <Route path='/experiencias' element={<Experiences />}></Route>
          <Route path='/contacto' element={<Contact />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
