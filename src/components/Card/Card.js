import React from 'react'
import styled from 'styled-components'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ui = {
  Card: styled.div`
    background-color: #fff;
    box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
    border-radius: 8px;
    max-width: 320px;
    overflow: hidden;
    margin: 20px;
  `,
  CardHeader: styled.div`
    height: 200px;
  `,
  CardFigure: styled.figure`
    width: 100%;
    `,
  CardImage: styled.img`
    width: 100%;
    height: auto;
    display: flex;
    object-fit: cover;
  `,
  CardBody: styled.div`
    padding: 16px;
  `,
  CardTitle: styled.h2`
    margin-bottom: 12px;
  `,
  CardDescription: styled.p`
    font-weight: 300;
  `,
}

const styleCardImage = {
  width: '100%',
  display: 'flex',
  objectFit: 'cover'
}

const Card = ({ cardImage, cardTtile, cardDescription, alt }) => {
  return (
    <>
      <ui.Card>
        <ui.CardHeader>
          <ui.CardFigure>
            <LazyLoadImage 
              style={styleCardImage}
              src={cardImage}
              alt={alt}
              effect='blur'
              placeholderSrc={cardImage}
            />
          </ui.CardFigure>
        </ui.CardHeader>

        <ui.CardBody className='card-body'>
          <ui.CardTitle>{cardTtile}</ui.CardTitle>
          <ui.CardDescription>{cardDescription}</ui.CardDescription>
        </ui.CardBody>
      </ui.Card>
    </>
  )
}

export default Card