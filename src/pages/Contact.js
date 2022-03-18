import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Container from '../components/Container/Container'
import Loading from '../components/Loading'
import Title from '../components/Title'
import Wrapper from '../components/Wrapper'

const ui = {
  ContactWrapper: styled.div``,
  Contact: styled.section``,
  Title: styled(Title)`
    margin-top: 30px;
    text-align: center;
    padding-top: 30px;
    text-transform: uppercase;
  `,
}
const Contacto = () => {
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
          ? <Loading loading={loading}/>
          : <Wrapper>
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
            </Wrapper>
      }
    </>
  )
}

export default Contacto