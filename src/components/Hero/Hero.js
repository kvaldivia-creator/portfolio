import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/avatar.jpg'
import Title from '../Title'
import hero from '../../assets/hero.jpg'
import { device } from '../../utils/device'
import Container from '../Container/Container'
import Wrapper from '../Wrapper'

const ui = {
  HeroWrapper: styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    margin: 0 auto;
  `,
  Hero: styled.section`
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.mobileL} {
      flex-direction: column;
    }
  `,
  HeroText: styled.div`
    margin-left: 30px;

    .professional-career {
      background-color: #008E89;
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
    width: 260px;
    height: 260px;
    border-radius: 50%;
    overflow: hidden;

    .avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `
}

const styleBackgroundHero = {
  background: `url(${hero})`, 
  backgroundRepeat: 'no-repeat', 
  backgroundSize: 'cover',
  backgroundPosition: 'center center' 
}

const Hero = () => {
  return (
    <>
      <Wrapper>
        <ui.HeroWrapper style={styleBackgroundHero}>
          <ui.Hero>
            <ui.HeroImage>
              <img className='avatar' src={avatar} alt="Avatar" />
            </ui.HeroImage>
            <ui.HeroText>
              <span>Hola!! Soy</span>
              <ui.Title>Kevin Valdivia</ui.Title>
              <span className='professional-career'>Frontend Developer</span>
              <span>
                Soy un desarrollador frontend, fan de Javascript y React JS.
              </span>
            </ui.HeroText>
          </ui.Hero>
        </ui.HeroWrapper>
      </Wrapper>
    </>
  )
}

export default Hero