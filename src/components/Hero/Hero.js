import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.jpg';
import Title from '../Title';
import hero from '../../assets/hero.jpg';
import { device } from '../../utils/device';
import Wrapper from '../Wrapper';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ui = {
	Wrapper: styled(Wrapper)`
    min-height: calc(100vh - 100px);
  `,
	HeroWrapper: styled.div`
		width: 100%;
		margin: 0 auto;
		min-height: calc(100vh - 100px);
	`,
	Hero: styled.section`
		width: 100%;
		background-color: rgba(0, 0, 0, .4);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 100px);

		@media ${device.mobileL} {
			padding-top: 20px;
			flex-direction: column;
			height: auto;
		}
	`,
	HeroText: styled.div`
		margin-left: 30px;

		.professional-career {
			background-color: #008e89;
			color: white;
			padding: 8px;
		}

		span {
			display: block;
			margin-bottom: 16px;

			:last-child {
				margin-bottom: 0;
			}
		}

		@media ${device.mobileL} {
			text-align: center;
			margin-left: 0;
			padding: 20px;
		}
	`,
	Title: styled(Title)`
    font-size: 68px;
    line-height: 72px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media ${device.mobileL} {
      font-size: 42px;
    }
  `,
	HeroImage: styled.div`
		display: flex;
		min-width: 260px;
		min-height: 260px;
		border-radius: 50%;
		overflow: hidden;
	`
};

const styleAvatar = {
	display: 'flex',
	width: '260px',
	height: '260px',
	objectFit: 'cover'
};

const styleBackgroundHero = {
	background: `url(${hero})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center center'
};

const Hero = () => {
	return (
		<React.Fragment>
			<ui.Wrapper>
				<ui.HeroWrapper style={styleBackgroundHero}>
					<ui.Hero>
						<ui.HeroImage>
							<LazyLoadImage
								style={styleAvatar}
								src={avatar}
								alt="avatar"
								height="auto"
								width="100%"
								effect="blur"
								placeholderSrc={avatar}
							/>
						</ui.HeroImage>
						<ui.HeroText>
							<span>Hola!! Soy</span>
							<ui.Title>Kevin Valdivia</ui.Title>
							<span className="professional-career">Frontend Developer</span>
							<span>Soy un desarrollador frontend, fan de Javascript y React JS.</span>
						</ui.HeroText>
					</ui.Hero>
				</ui.HeroWrapper>
			</ui.Wrapper>
		</React.Fragment>
	);
};

export default Hero;
