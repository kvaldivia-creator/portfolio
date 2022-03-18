import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-size: 1.1rem;
}

  ol,
  ul,
  li {
    list-style: none;
  }

  a {
    color:#000000;
    text-decoration:none;
  } 
`

export { GlobalStyle }
