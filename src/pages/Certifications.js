import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Container from '../components/Container/Container'
import Certification from '../components/Certification'

import logoPlatzi from '../assets/logo-platzi.png'

import certificado1 from '../assets/certificados-platzi/1.jpg'
import certificado2 from '../assets/certificados-platzi/2.jpg'
import certificado3 from '../assets/certificados-platzi/3.jpg'
import certificado4 from '../assets/certificados-platzi/4.jpg'
import certificado5 from '../assets/certificados-platzi/5.jpg'
import certificado6 from '../assets/certificados-platzi/6.jpg'
import certificado7 from '../assets/certificados-platzi/7.jpg'
import certificado8 from '../assets/certificados-platzi/8.jpg'
import certificado9 from '../assets/certificados-platzi/9.jpg'
import certificado10 from '../assets/certificados-platzi/10.jpg'
import Loading from '../components/Loading'
import Wrapper from '../components/Wrapper'

const ui = {
  Title: styled(Title)`
    padding-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
  `,
  CertificationsWrapper: styled.div`
    margin: 30px 0;
  `,
}


const cursosPlatzi = [
  {
    id: 1,
    title: 'CURSO FRONTEND DEVELOPER',
    image: certificado1,
    alt: 'Certificado 1'
  },
  {
    id: 2,
    title: 'CURSO PRÁCTICO DE FRONTEND DEVELOPER',
    image: certificado2,
    alt: 'Certificado 2'
  },
  {
    id: 3,
    title: 'CURSO BÁSICO DE JAVASCRIPT',
    image: certificado3,
    alt: 'Certificado 3'
  },
  {
    id: 4,
    title: 'CURSO PRÁCTICO DE JAVASCRIPT',
    image: certificado4,
    alt: 'Certificado 4'
  },
  {
    id: 5,
    title: 'CURSO DE CLOSURES Y SCOPE EN JAVASCRIPT',
    image: certificado5,
    alt: 'Certificado 5'
  },
  {
    id: 6,
    title: 'CURSO ASINCRONISMO CON JAVASCRIPT',
    image: certificado6,
    alt: 'Certificado 6'
  },
  {
    id: 7,
    title: 'CURSO ECMASCRIPT 6+',
    image: certificado7,
    alt: 'Certificado 7'
  },
  {
    id: 8,
    title: 'CURSO DE GESTIÓN DE DEPENDENCIAS Y PAQUETES CON NPM',
    image: certificado8,
    alt: 'Certificado 8'
  },
  {
    id: 9,
    title: 'CURSO PROFESIONAL DE JAVASCRIPT',
    image: certificado9,
    alt: 'Certificado 9'
  },
  {
    id: 10,
    title: 'CURSO DE INTRODUCCIÓN A REACT.JS',
    image: certificado10,
    alt: 'Certificado 10'
  },
]


const Certifications = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])
  return (
    <>
      {
        loading
          ? <Loading loading={loading} />
          : <Wrapper>
              <ui.CertificationsWrapper>
                <ui.Title>Certificaciones</ui.Title>
                <Container>
                  <Certification logo={logoPlatzi} data={cursosPlatzi} backgroundColor='#121f3d' />
                </Container> 
              </ui.CertificationsWrapper>
            </Wrapper>
      }
    </>
  )
}

export default Certifications