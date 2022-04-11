import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import Wrapper from '../Wrapper';
import imageFound from '../../assets/image-found.png';
import Title from '../Title';
import { device } from '../../utils/device';

const ui = {
	ErrorPage: styled.section`
		width: 100%;
		height: calc(100vh - 100px);
		display: flex;
		justify-content: center;
		align-items: center;

		@media ${device.mobileL} {
			flex-direction: column;
			margin: 0 auto;
			text-align: center;
		}
	`,
	ErrorPageLeft: styled.article`min-width: 50%;`,
	Figure: styled.figure`
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	`,
	ErrorPageRight: styled.article`
		min-width: 50%;
		margin: 0 auto;
		padding: 16px;
		p {
			font-size: 16px;
			line-height: 20px;
			margin-bottom: 12px;
		}
	`,
	Title: styled(Title)`
    font-size: 70px;
    line-height: 74px;
  `,
	Button: styled.a`
		display: block;
		max-width: 180px;
		background: #fff;
		border: 2px solid #6400ff;
		padding: 12px;
		border-radius: 5px;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		font-size: 16px;
		transition: background 0.5s;
		text-align: center;

		@media ${device.mobileL} {
			margin: 0 auto;
		}

		:hover {
			background: #6400ff;
			box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
			color: #fff;
		}
	`
};

const Found = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Container>
					<ui.ErrorPage class="err_page">
						<ui.ErrorPageLeft class="err_page_left">
							<ui.Figure>
								<img src={imageFound} width={360} height={250} alt="Imagen Page 404" />
							</ui.Figure>
						</ui.ErrorPageLeft>
						<ui.ErrorPageRight class="err_page_right">
							<ui.Title>404</ui.Title>
							<p>OOPS. Parece que la página que estás buscando ya no existe.</p>
							<p>No te preocupes. Lo traeremos de vuelta a un lugar seguro.</p>
							<ui.Button href="/" class="err_btn">
								Back to home
							</ui.Button>
						</ui.ErrorPageRight>
					</ui.ErrorPage>
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};

export default Found;
