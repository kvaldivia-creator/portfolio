import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container'
import Title from '../components/Title'
import cardImage from '../assets/avatar.jpeg'
import Wrapper from '../components/Wrapper'
import Card from '../components/Card'

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
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
              <Card 
                cardImage={cardImage} 
                cardTtile='Aplicaciones' 
                cardDescription='Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.'
              />
            </ui.Projects>
          </ui.ProjectsWrapper>
        </Container>
      </Wrapper>
    </>
  )
}

export default Projects