import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'

const ui = {
  Layout: styled.main`
    background-color: #F7F7F7;
    max-width: 100%;
    min-height: 100vh;
  `
}

const Layout = ({ children }) => {
  return (
    <>
      <ui.Layout>
        <Navigation />
        {children}
      </ui.Layout>
    </>
  )
}

export default Layout