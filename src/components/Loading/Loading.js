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
    justify-content: center;
    margin-top: 10px;
  `
}

const override = {
  display: 'flex',
  margin: '0 auto',
  width: '300px',
  marginLeft: '20px',
  marginRight: '20px'
}

const Loading = ({ loading }) => {
  
  return (
    <>
      <ui.Loading>
        <BarLoader css={override} height={6} loading={loading} color={'#65C18C'}/>
      </ui.Loading>
    </>
  )
}

export default Loading