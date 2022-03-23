import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import avatar from '../assets/avatar.jpg'
import Container from '../components/Container/Container'
import about from '../assets/about.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import html from '../assets/conocimientos/html.png'
import css from '../assets/conocimientos/css.png'
import js from '../assets/conocimientos/js.png'
import reactjs from '../assets/conocimientos/reactjs.png'
import npm from '../assets/conocimientos/npm.png'
import webpack from '../assets/conocimientos/webpack.jpg'
import nextjs from '../assets/conocimientos/nextjs.png'
import { device } from '../utils/device'
import Wrapper from '../components/Wrapper'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { NavLink } from 'react-router-dom'


const ui = {
  AboutWrapper: styled.div`
    padding: 36px 20px;
    font-family: 'Raleway', sans-serif;
  `,
  About: styled.div`
    max-width: 1000px;
    border-radius: 10px;
    margin: 0 auto;
    /* box-shadow: 0 0px 10px 0 rgba(0,0,0,0.3); */
    overflow: hidden;
  `,
  Title: styled(Title)`
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  `,
  AboutHero: styled.section`
    max-width: 700px;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  AboutInformation: styled.div`
    font-weight: 400;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    font-size: 24px;

    /* span {
      width: 320px;
      margin: 10px auto;
      padding: 8px;
      display: block;
      text-align: center;
      font-weight: 300;
      color: white;
      background-color: #008E89;
    } */

  `,
  KnowledgeWrapper: styled.div`
    height: auto;
    margin-bottom: 36px;
  `,
  Knowledge: styled.section`
    height: 100%;
    background-color: rgba(0, 0, 0, .5);

    .logo-knowledge {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin: 20px;
      
      :last-child {
        border: 3px solid #fff;
      }

      @media ${device.mobileL} {
        width: 75px;
        height: 75px;
      }
    }
  `,
  KnowledgeTitle: styled.h2`
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 30px;
    padding: 30px 0;
    `,
  IconLogos: styled.div`
    display: flex;
    padding-bottom: 30px;
    justify-content: center;
    flex-flow: row wrap;
  `,
  EducationWrapper: styled.div`
    padding-bottom: 30px;
  `,
  Button: styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    padding: 12px 30px;
    background-color: #2f4c84;
    color: #ffffff;
    border-radius: 8px;
    margin-bottom: 20px;
  `,
  Education: styled.section`
    max-width: 800px;
    margin: 0 auto;

    .education-list {
      margin-left: 40px;
    }

    .education-item {
      list-style: outside;
      line-height: 1.5;
      font-family: 'Raleway', sans-serif;
      font-style: italic;
      font-size: 26px;

      span {
        font-size: 30px;
        color: #019267;
        font-weight: 700;
      }
    }

    @media ${device.mobileL} {
      padding: 0 20px;
    }
  `,
  EducationTitle: styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
  `
}

const styleBackgroundAbout = {
  background: `url(${about})`, 
  backgroundRepeat: 'no-repeat', 
  backgroundSize: 'cover',
  backgroundPosition: 'center center'
}

const styleAboutImage = {
  width: '200px',
  height: '200px',
  borderRadius: '10px',
  marginBottom: '30px'
}

const logoKnowledge = [
  {
    id: 1,
    image: html,
    alt: 'Logo html'
  },
  {
    id: 2,
    image: css,
    alt: 'Logo css'
  },
  {
    id: 3,
    image: js,
    alt: 'Logo Javascript'
  },
  {
    id: 4,
    image: reactjs,
    alt: 'Logo react.js'
  },
  {
    id: 5,
    image: npm,
    alt: 'Logo npm'
  },
  {
    id: 6,
    image: webpack,
    alt: 'Logo webpack'
  },
  {
    id: 7,
    image: nextjs,
    alt: 'Logo next.js'
  },
]

const About = () => {
  return (
    <>
      <Wrapper>
        <ui.AboutWrapper>
          <ui.Title>Sobre mi</ui.Title>
          <Container>
            <ui.About>
              <ui.AboutHero>
                <LazyLoadImage
                  style={styleAboutImage}
                  src={avatar}
                  alt='Avatar'
                  effect='blur'
                  placeholderSrc={avatar}
                />
                <NavLink to='/pdf'>
                  <ui.Button>Ver CV</ui.Button>
                </NavLink>
                <ui.AboutInformation>
                  Soy Kevin Valdivia Alfonso egresado de la Universidad Nacional del Centro del Perú, de la Escuela Profesional de Ingeniería de Sistemas, con experiencia en Desarrollador Frontend.
                  {/* <span>Soy fan de JavaScript y React JS</span>
                  <span>Abierto a aprender lo que sea.</span> */}
                </ui.AboutInformation>
              </ui.AboutHero>
            </ui.About>
          </Container>
        </ui.AboutWrapper>
        <ui.KnowledgeWrapper style={styleBackgroundAbout}>
          <ui.Knowledge>
            <ui.KnowledgeTitle>Conocimientos</ui.KnowledgeTitle>
            <Container>
              <ui.IconLogos>
                {
                  logoKnowledge.map(logo => (
                    <LazyLoadImage 
                      className='logo-knowledge'
                      key={logo.id}
                      src={logo.image}
                      alt={logo.alt}
                      effect='blur'
                      placeholderSrc={logo.image}
                    />
                  ))
                }
              </ui.IconLogos>
            </Container>
          </ui.Knowledge>
        </ui.KnowledgeWrapper>
        <ui.EducationWrapper>
          <Container>
            <ui.Education>
              <ui.EducationTitle>Educación</ui.EducationTitle>
              <ul className='education-list'>
                <li className='education-item'>2017, Ingeniería de Sistemas <span>UNCP</span></li>
                <li className='education-item'>2021, Ingles Básico <span>UNCP CEID</span></li>
              </ul>
            </ui.Education>
          </Container>
        </ui.EducationWrapper>
      </Wrapper>
    </>
  )
}

export default About