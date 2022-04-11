import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import React, { lazy, Suspense } from 'react';
import Loading from './components/Loading/Loading';
import ViewPdf from './pages/ViewPdf';
import Found from './components/404/Found';

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
							<Route exact path="/" element={<Home />} />
							<Route exact path="/sobremi" element={<PageAbout />} />
							<Route exact path="/certificaciones" element={<PageCertifications />} />
							<Route path="/proyectos" element={<PageProjects />} />
							<Route path="/experiencias" element={<PageExperience />} />
							<Route path="/contacto" element={<PageContact />} />
							<Route path="/curriculum_kevin_valdivia_alfonso.pdf" element={<ViewPdf />} />
							<Route path="*" element={<Found />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</Suspense>
		</React.Fragment>
	);
}

export default App;
