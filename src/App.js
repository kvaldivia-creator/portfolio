import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import ViewPdf from './pages/ViewPdf';

const Home = lazy(() => import('./pages/Home'));
const PageAbout = lazy(() => import('./pages/sobremi'));
const PageCertifications = lazy(() => import('./pages/certificaciones'));
const PageExperience = lazy(() => import('./pages/experiencia'));
const PageProjects = lazy(() => import('./pages/proyectos'));
const PageContact = lazy(() => import('./pages/contacto'));

function App() {
	return (
		<React.Fragment>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/sobremi" element={<PageAbout />} />
							<Route path="/certificaciones" element={<PageCertifications />} />
							<Route path="/proyectos" element={<PageProjects />} />
							<Route path="/experiencias" element={<PageExperience />} />
							<Route path="/contacto" element={<PageContact />} />
							<Route path="/pdf" element={<ViewPdf />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</Suspense>
		</React.Fragment>
	);
}

export default App;
