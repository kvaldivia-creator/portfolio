import React from 'react';
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ui = {
	Card: styled.div`
		background-color: #fff;
		box-shadow: 0 2px 8px rgb(0 0 0 / 25%);
		border-radius: 8px;
		max-width: 300px;
		overflow: hidden;
		margin: 20px;
	`,
	CardHeader: styled.a`
		height: 200px;
		cursor: pointer;
	`,
	CardFigure: styled.figure`
		width: 100%;
		height: inherit;
		text-align: center;

		span {
			width: 100%;
			height: inherit;
		}

		img {
			object-fit: fill;
		}
	`,
	CardBody: styled.div`padding: 16px;`,
	CardTitle: styled.h2`
		margin-bottom: 12px;
		font-weight: 500;
	`,
	CardDescription: styled.p`font-weight: 300;`
};

const styleCardImage = {
	width: '100%',
	height: '200px',
	justifyContent: 'center',
	display: 'flex',
	objectFit: 'cover'
};

const Card = ({ cardImage, cardTtile, cardDescription, alt, link }) => {
	return (
		<React.Fragment>
			<ui.Card>
				<ui.CardHeader href={link} target="_blank">
					<ui.CardFigure>
						<LazyLoadImage
							style={styleCardImage}
							src={cardImage}
							alt={alt}
							effect="blur"
							placeholderSrc={cardImage}
						/>
					</ui.CardFigure>
				</ui.CardHeader>

				<ui.CardBody className="card-body">
					<ui.CardTitle>{cardTtile}</ui.CardTitle>
					<ui.CardDescription>{cardDescription}</ui.CardDescription>
				</ui.CardBody>
			</ui.Card>
		</React.Fragment>
	);
};

export default Card;
