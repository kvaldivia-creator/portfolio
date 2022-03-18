import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container'
import Title from '../components/Title'
import cardImage from '../assets/avatar.jpeg'
import Loading from '../components/Loading'
import Wrapper from '../components/Wrapper'

const ui = {
  ProjectsWrapper: styled.div``,
  Projects: styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `,
  Card: styled.div`
    background-color: #fff;
    box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
    border-radius: 8px;
    min-height: 200px;
    max-width: 320px;
    overflow: hidden;
    margin: 20px;
  `,
  CardHeader: styled.div``,
  CardFigure: styled.figure`
    width: 100%;
    `,
  CardImage: styled.img`
    width: 100%;
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
  Title: styled(Title)`
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
    padding-top: 30px;
`,
}

const Projects = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <>
      {
        loading 
          ? <Loading loading={loading} />
          : <Wrapper>
              <Container>
                <ui.ProjectsWrapper>
                  <ui.Title>Proyectos</ui.Title>
                  <ui.Projects>
                    <ui.Card>
                      <ui.CardHeader>
                        <ui.CardFigure>
                          <ui.CardImage src={cardImage} />
                        </ui.CardFigure>
                      </ui.CardHeader>
        
                      <ui.CardBody>
                        <ui.CardTitle>Aplicaciones</ui.CardTitle>
                        <ui.CardDescription>Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.</ui.CardDescription>
                      </ui.CardBody>
                    </ui.Card>
                    <ui.Card>
                      <ui.CardHeader>
                        <ui.CardFigure>
                          <ui.CardImage src={cardImage} />
                        </ui.CardFigure>
                      </ui.CardHeader>
        
                      <ui.CardBody>
                        <ui.CardTitle>Aplicaciones</ui.CardTitle>
                        <ui.CardDescription>Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.</ui.CardDescription>
                      </ui.CardBody>
                    </ui.Card>
                    <ui.Card>
                      <ui.CardHeader>
                        <ui.CardFigure>
                          <ui.CardImage src={cardImage} />
                        </ui.CardFigure>
                      </ui.CardHeader>
        
                      <ui.CardBody>
                        <ui.CardTitle>Aplicaciones</ui.CardTitle>
                        <ui.CardDescription>Emisiones en vivo donde conversamos sobre diversos temas del maravilloso mundo de la web.</ui.CardDescription>
                      </ui.CardBody>
                    </ui.Card>
                  </ui.Projects>
                </ui.ProjectsWrapper>
              </Container>
            </Wrapper>
      }
      
    </>
  )
}

export default Projects