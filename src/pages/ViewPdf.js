import React, { useEffect } from 'react'
import styled from 'styled-components'

const ui = {
  PdfContainer: styled.div`
    margin-top: 100px;
    height: calc(100vh - 100px);

    a {
      background-color: #ffe700;
    }
  `
}

const ViewPdf = () => {
  useEffect(() => {
    if (typeof window.orientation !== 'undefined') {
      document.getElementById('enlace-descarga').click()
      window.history.back()
    }
  }, [])
  return (
    <ui.PdfContainer >
      <object
        data={require('../assets/docs/Kevin_Valdivia_Alfonso_CV.pdf')}
        type='application/pdf'
        width='100%'
        height='100%'
      >
        <a href={require('../assets/docs/Kevin_Valdivia_Alfonso_CV.pdf')} id='enlace-descarga'>Tu dispositivo no puede visualizar el documento, Click para descargarlo</a>
      </object>
    </ui.PdfContainer>
  )
}

export default ViewPdf