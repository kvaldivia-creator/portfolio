import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import { device } from '../utils/device'
import logoSynergytec from '../assets/logo-synergytec.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ui = {
  Experiences: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: 0 20px;
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
    margin-bottom: 20px;

    span {
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 16px;
    }
  `,
  Description: styled.ul`
    max-width: 600px;
    margin-left: 20px;

    li {
      list-style: outside;
      font-family: 'Raleway', sans-serif;
      margin-bottom: 12px;
    }
  `
}

const styleImage = {
  margin: '0 auto',
  display: 'block',
  marginBottom: '16px'
}

const Experiences = () => {
  return (
    <>
      <Wrapper>
        <ui.Title>Experiencia Laboral</ui.Title>
        <Container>
          <ui.Experiences>
            <ui.CompanyLogo>
              <LazyLoadImage
                style={styleImage}
                src={logoSynergytec}
                alt='Logo SynergyTec'
                effect='blur'
                placeholderSrc={logoSynergytec}
              />
              <span>Junior Frontend Developer</span>
            </ui.CompanyLogo>

            <ui.Description>
              <li>Utilización de HTML, CSS y JS para el desarrollo de la pagina
                  Web de la empresa.
              </li>
              <li>Utilización del software balsamiq para el diseño de wireframes
                  del aplicativo movil SportGo.
              </li>
              <li>
                Utilización del framework Next.js junto con TypeScript para el
                desarrollo del aplicativo movil SportGo, que facilita la búsqueda
                y reserva de campos deportivos. Así como también, la
                promoción y gestión de complejos deportivos.
              </li>
            </ui.Description>
          </ui.Experiences>
        </Container>
          
      </Wrapper>
    </>
  )
}

export default Experiences