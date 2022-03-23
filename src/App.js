import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import { lazy, Suspense } from 'react'
import Loading from './components/Loading/Loading'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Certifications = lazy(() => import('./pages/Certifications'))
const Experiences = lazy(() => import('./pages/Experiences'))

function App() {
  return (
    <>
    <Suspense fallback={<Loading />}>
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
    </Suspense>
    </>
  );
}

export default App;
