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
    max-width: 600px;
		margin: auto;
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
	`,
  Info: styled.div`
    margin-bottom: 12px;
  `,
	Description: styled.ul`
		margin-left: 20px;
    width: 80%;
    margin: auto;
		li {
			list-style: outside;
			font-family: 'Raleway', sans-serif;
			margin-bottom: 12px;
		}
	`,
  Header: styled.div`
    text-align: center;
    margin-bottom: 18px;
  `,
  Span: styled.span`
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    background-color: #19376D;
    color: white;
    border-radius: 5px;
    padding: 5px 8px;
  `,
  Date: styled.span`
    background-color: #F5F3C1;
    border-radius: 10px;
    padding: 2px 5px;
    margin-bottom: 20px;
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
						</ui.CompanyLogo>
            
            <ui.Date>Junio 2022 - Actual</ui.Date>

            <ui.Info>
              <ui.Header>
                <ui.Span>Desarrollo de una Web App HomeBanking para</ui.Span> <br/> <ui.Span>transacciones bancarias</ui.Span>
              </ui.Header>

              <ui.Description>
                <li>Diseño de interfaces, desarrollo  y programación de componentes reutilizables del aplicativo web.</li>
                <li>Integración de interfaces con la parte Backend.</li>
                <li>Utilización HTML, CSS, JS, C#, Blazor y MudBlazor para el desarrollo del aplicativo web.</li>
              </ui.Description>
            </ui.Info>

            <ui.Info>
              <ui.Header>
                <ui.Span>Desarrollo de un Aplicativo Web para la gestión de los procesos</ui.Span> <br/> <ui.Span>administrativos como presupuestos, logística,</ui.Span> <br /> <ui.Span>recursos humanos, finanzas y contabilidad</ui.Span>
              </ui.Header>

              <ui.Description>
                <li>Utilización de herramientas como HTML, CSS, C#, .NET y el framework Blazor para el desarrollo software EvolSoft que permite la gestión de los procesos administrativos como presupuestos, logística, recursos humanos, finanzas y contabilidad.</li>
              </ui.Description>
            </ui.Info>
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
						</ui.CompanyLogo>

            <ui.Date>Noviembre 2021 - Marzo 2022</ui.Date>

            <ui.Info>
              <ui.Header>
                <ui.Span>Desarrollo de un Aplicativo web móvil para la búsqueda,</ui.Span> <br/> <ui.Span>reserva y gestión de campos deportivos</ui.Span>
              </ui.Header>

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
            </ui.Info>
						
            <ui.Info>
              <ui.Header>
                <ui.Span>Desarrollo de la página Web de la empresa</ui.Span>
              </ui.Header>

              <ui.Description>
							<li>Diseño de interfaz de la página web mediante el software Figma.</li>
							<li>
              Utilización HTML, CSS Y JS para el desarrollo de la página web.
							</li>
						</ui.Description>
            </ui.Info>
					</ui.Experiences>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};

export default Experiences;
