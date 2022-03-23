import React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/device'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ui = {
  Slide: styled.div`
    min-width: 30%;
    max-height: 30%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    position: relative;
    margin-right: 20px;

    @media ${device.mobileL} {
      min-width: 100%;
    }
  `,
  SlideLink: styled.a`
    
  `,
  SlideAction: styled.p`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.5)'};
    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    top: 0;
    padding: 20px;

    .text {
      display: block;
      margin-bottom: 10px;
    }

    @media ${device.mobileL} {
      .text {
        font-size: 14px;
      }
    }

    .button {
      width: 50%;
      padding: 4px 0;
      cursor: pointer;
      border-radius: 8px;
      border: none;
      background-color: #E83A14;
      font-size: 16px;
      color: white;
    }
  `
}

const styleSlideImage = {
  width: '100%',
  verticalAlign: 'top',
  objectFit: 'contain'
}

const Slide = ({ textSlide, imageSlide, alt }) => {
  return (
    <>
      <ui.Slide>
        <ui.SlideLink href='#'>
          <LazyLoadImage
            style={styleSlideImage}
            src={imageSlide}
            alt={alt}
            effect='blur'
            placeholderSrc={imageSlide}
          />   
        </ui.SlideLink>
        <ui.SlideAction>
          <span className='text'>{textSlide}</span>
          <button className='button'>ver</button>
        </ui.SlideAction>
      </ui.Slide>
    </>
  )
}

export default Slide