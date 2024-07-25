import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s, color 0.3s;

    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }

  #root {
    width: 100%;

    max-width: 1280px;
    margin: 0 auto;

    padding: 2rem;
    text-align: center;
  }
`

export default GlobalStyle
