import React from 'react';
import styled from 'styled-components';
import SlideShow from '../SlideShow';
import Slide from '../Slide';
import { device } from '../../utils/device';

const ui = {
	Certifications: styled.section`
		background-color: ${({ backgroundColor }) => backgroundColor};
		border-radius: 10px;
		padding: 40px;
		margin-bottom: 30px;
		max-height: 420px;
		margin-right: 20px;
		margin-left: 20px;

		:last-child {
			margin-bottom: 0;
		}

		@media ${device.mobileL} {
			margin: 0 20px;
		}
	`,
	CertificationsCard: styled.div`
		width: 100%;
		text-align: center;
	`,
	CertificationsCardLogo: styled.div`
		max-width: 300px;
		margin: 0 auto;
		img {
			width: 100%;
		}
	`,
	CertificationsCarousel: styled.div``
};

const Certification = ({ logo, backgroundColor, data }) => {
	return (
		<React.Fragment>
			<ui.Certifications backgroundColor={backgroundColor}>
				<ui.CertificationsCard>
					<ui.CertificationsCardLogo>
						<img src={logo} width={300} alt="Logo platzi" />
					</ui.CertificationsCardLogo>
					<ui.CertificationsCarousel>
						<SlideShow controles intervalo="5000">
							{data.map((curso) => (
								<React.Fragment>
									<Slide
										key={curso.id}
										imageSlide={curso.image}
										textSlide={curso.title}
										alt={curso.alt}
									/>
								</React.Fragment>
							))}
						</SlideShow>
					</ui.CertificationsCarousel>
				</ui.CertificationsCard>
			</ui.Certifications>
		</React.Fragment>
	);
};

export default Certification;
