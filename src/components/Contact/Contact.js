import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import Title from '../Title';
import { device } from '../../utils/device';
import Wrapper from '../Wrapper';
import Container from '../Container/Container';

const ui = {
	ContactWrapper: styled.div`
		padding: 20px;
		max-height: 100%;
	`,
	Contact: styled.section``,
	Title: styled(Title)`
    margin-top: 30px;
    text-align: center;
    margin-bottom: 30px;
    text-transform: uppercase;
  `,
	CardContact: styled.div`
		max-width: 500px;
		margin: 0 auto;
		text-align: center;
		display: flex;
		justify-content: start;
		flex-flow: row wrap;
	`,
	CardContactItem: styled.div`
		width: 100%;
		margin: 20px;

		span {
			margin-left: 8px;
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 12px;
		}

		p {
			font-family: 'Raleway', sans-serif;
		}

		a {
			font-family: 'Raleway', sans-serif;
		}

		@media ${device.mobileL} {
			p {
				font-size: 16px;
			}
			a {
				font-size: 16px;
			}
		}
	`
};
const Contacto = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<ui.ContactWrapper>
					<ui.Title>Contacto</ui.Title>
					<Container>
						<ui.Contact>
							<ui.CardContact>
								<ui.CardContactItem>
									<div>
										<FaIcons.FaMobileAlt /> <span>Celular</span>
									</div>
									<p>+(51) 936 232 284</p>
								</ui.CardContactItem>
								<ui.CardContactItem>
									<div>
										<FaIcons.FaEnvelopeSquare /> <span>Correo</span>
									</div>
									<p>
										<a href="mailto:kevin.dfrontend@gmail.com">kevin.dfrontend@gmail.com</a>
									</p>
								</ui.CardContactItem>
								<ui.CardContactItem>
									<div>
										<FaIcons.FaLinkedin /> <span>LinkedIn</span>
									</div>
									<p>
										<a href="https://www.linkedin.com/in/kevin-holman-valdivia-alfonso-8b5a1518b">
											kevin valdivia
										</a>
									</p>
								</ui.CardContactItem>
								<ui.CardContactItem>
									<div>
										<FaIcons.FaGithubSquare /> <span>GitHub</span>
									</div>
									<p>
										<a href="https://github.com/kvaldivia-creator">kevin valdivia</a>
									</p>
								</ui.CardContactItem>
							</ui.CardContact>
						</ui.Contact>
					</Container>
				</ui.ContactWrapper>
			</Wrapper>
		</React.Fragment>
	);
};

export default Contacto;
