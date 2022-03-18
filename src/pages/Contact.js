import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container'
import Title from '../components/Title'

const ui = {
  ContactWrapper: styled.div``,
  Contact: styled.section``,
  Title: styled(Title)`
    margin-top: 30px;
    text-align: center;
  `,
}
const Contacto = () => {
  return (
    <>
      <ui.ContactWrapper>
        <ui.Title>Contacto</ui.Title>
          <Container>
            <ui.Contact>
              <p>
                <a href="hh">Facebook</a>
              </p>
              <p>  
                <a href="hh">GitHub</a>
              </p>
              <a href="hh">Correo Institucional</a>
            </ui.Contact>
          </Container>
      </ui.ContactWrapper>
    </>
  )
}

export default Contacto