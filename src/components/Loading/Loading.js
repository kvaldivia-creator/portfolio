import React from 'react'
import styled from 'styled-components'
import BarLoader from 'react-spinners/BarLoader'

const ui = {
  Loading: styled.div`
    width: 100%;
    height: calc(100vh - 10px);
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    margin-top: 10px;
  `
}

const override = {
  display: 'block',
  margin: '0 auto'
}

const Loading = ({ loading }) => {
  
  return (
    <>
      <ui.Loading>
        <BarLoader css={override} width={300} height={6} loading={loading} color={'#65C18C'}/>
      </ui.Loading>
    </>
  )
}

export default Loading