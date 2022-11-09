import React from 'react';
import styled from 'styled-components';
import logoSynergytec from '../../assets/logos/logo-synergytec.png';
import logoSolintels from '../../assets/logos/logo-solintels.png';
import Wrapper from '../Wrapper';
import Container from '../Container/Container';
import Title from '../Title';
import { device } from '../../utils/device';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ui = {
	Experiences: styled.section`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 100%;
		margin: 0 20px 20px;
	`,
	Title: styled(Title)`
    padding-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;

    @media ${device.mobileL} {
      font-size: 24px;
    }
  `,
	CompanyLogo: styled.div`
		margin-bottom: 20px;

		span {
			display: inline-block;
			width: 100%;
			text-align: center;
			font-size: 16px;
		}
	`,
	Description: styled.ul`
		max-width: 600px;
		margin-left: 20px;

		li {
			list-style: outside;
			font-family: 'Raleway', sans-serif;
			margin-bottom: 12px;
		}
	`,
  Span: styled.span`
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  `
};

const styleImage = {
	margin: '0 auto',
	display: 'block',
	marginBottom: '16px'
};

const Experiences = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<ui.Title>Experiencia Laboral</ui.Title>
				<Container>
					<ui.Experiences>
						<ui.CompanyLogo>
							<LazyLoadImage
								style={styleImage}
								src={logoSolintels}
								alt="Logo Solintels"
								effect="blur"
								placeholderSrc={logoSolintels}
							/>
							<ui.Span>Frontend Developer</ui.Span>
						</ui.CompanyLogo>

						<ui.Description>
							<li>Utilización de herramientas como HTML, CSS, C#, .NET y el framework Blazor para el desarrollo software EvolSoft que permite la gestión de los procesos administrativos como presupuestos, logística, recursos humanos, finanzas y contabilidad.</li>
						</ui.Description>
					</ui.Experiences>
          <ui.Experiences>
						<ui.CompanyLogo>
							<LazyLoadImage
								style={styleImage}
								src={logoSynergytec}
								alt="Logo SynergyTec"
								effect="blur"
								placeholderSrc={logoSynergytec}
							/>
							<ui.Span>Junior Frontend Developer</ui.Span>
						</ui.CompanyLogo>

						<ui.Description>
							<li>Utilización de HTML, CSS y JS para el desarrollo de la pagina Web de la empresa.</li>
							<li>
								Utilización del software balsamiq para el diseño de wireframes del aplicativo movil
								SportGo.
							</li>
							<li>
								Utilización del framework Next.js junto con TypeScript para el desarrollo del aplicativo
								movil SportGo, que facilita la búsqueda y reserva de campos deportivos. Así como
								también, la promoción y gestión de complejos deportivos.
							</li>
						</ui.Description>
					</ui.Experiences>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};

export default Experiences;
