import React from 'react';
import styled from 'styled-components';
import sportGo from '../../assets/images-proyectos/sportGo.jpg';
import batatabit from '../../assets/images-proyectos/batatabit.png';
import synergytec from '../../assets/images-proyectos/pagina-web-st.png';
import googleClone from '../../assets/images-proyectos/google-clone.jpg';
import todoMachine from '../../assets/images-proyectos/todo-machine.jpg';
import Title from '../Title';
import SubTitle from '../SubTitle/SubTitle';
import Wrapper from '../Wrapper';
import Container from '../Container/Container';
import Card from '../Card/Card';

const ui = {
	ProjectsWrapper: styled.div`
		width: 90%;
		max-width: 900px;
		margin: 0 auto;
	`,
	Projects: styled.section``,
	Title: styled(Title)`
    text-align: center;
    text-transform: uppercase;
    padding-top: 30px;
    margin-bottom: 20px;
  `,
	ProjectsContent: styled.article`
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
	`,
	SubTitle: styled(SubTitle)`
    max-width: 100%;
    background-color: #0E185F;
    padding: 6px 20px;
    color: white;
    font-size: 20px;
  `
};

const Projects = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					<ui.ProjectsWrapper>
						<ui.Title>Proyectos</ui.Title>
						<ui.Projects>
							<ui.SubTitle>Proyectos SynergyTec</ui.SubTitle>
							<ui.ProjectsContent>
								<Card
									cardImage={sportGo}
									cardTtile="Aplicativo Web para la búsqueda, reserva y géstion de campos deportivos"
									cardDescription="App que facilita la búsqueda y reserva de campos deportivos. Así como también, la promoción y gestión de complejos deportivos.."
									link="https://play.google.com/store/apps/details?id=com.synergytecsac.sportgoapp"
								/>
								<Card
									cardImage={synergytec}
									cardTtile="Pagina Web SynergyTec"
									cardDescription="SynergyTec empresa peruana que desarrolla productos y servicios de tecnologías de información, especialmente software."
									link="https://www.synergytecsac.com/"
								/>
							</ui.ProjectsContent>
							<ui.SubTitle>Proyectos de la escuela de Platzi</ui.SubTitle>
							<ui.ProjectsContent>
								<Card
									cardImage={batatabit}
									cardTtile="Batatabit"
									cardDescription="Batatabit una pagina web de criptomonedas desarrollado con HTML y CSS adaptado a diferentes tipos de pantalla."
									link="https://kvaldivia-creator.github.io/mobile-first-batatabit/"
								/>
								<Card
									cardImage={googleClone}
									cardTtile="Clone Google"
									cardDescription="Clone de Google una pagina web idéntico a Google desarrollado con HTML y CSS"
									link="https://kvaldivia-creator.github.io/google-clone/"
								/>
								<Card
									cardImage={todoMachine}
									cardTtile="Todo Machine"
									cardDescription="Todo Machine una pagina web desarrollado con React.js para el busqueda, completado y eliminación de diferentes tareas registrados por el usuario."
									link="https://kvaldivia-creator.github.io/todo-machine/"
								/>
							</ui.ProjectsContent>
						</ui.Projects>
					</ui.ProjectsWrapper>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};

export default Projects;
