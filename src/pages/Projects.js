import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'
import sportGo from '../assets/sportGo.jpg'
import synergytec from '../assets/pagina-web-st.png'

const ui = {
  ProjectsWrapper: styled.div``,
  Projects: styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `,
  Title: styled(Title)`
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
    padding-top: 30px;
`,
}

const Projects = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <ui.ProjectsWrapper>
            <ui.Title>Proyectos</ui.Title>
            <ui.Projects>
              <Card 
                cardImage={sportGo} 
                cardTtile='Aplicativo Web para la búsqueda, reserva y géstion de campos deportivos' 
                cardDescription='App que facilita la búsqueda y reserva de campos deportivos. Así como también, la promoción y gestión de complejos deportivos..'
              />
              <Card 
                cardImage={synergytec} 
                cardTtile='Pagina Web SynergyTec' 
                cardDescription='SynergyTec empresa peruana que desarrolla productos y servicios de tecnologías de información, especialmente software.'
              />
            </ui.Projects>
          </ui.ProjectsWrapper>
        </Container>
      </Wrapper>
    </>
  )
}

export default Projects