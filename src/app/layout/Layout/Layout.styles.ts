import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  width: 100%;
  height: 70px;
`

export const Main = styled.main`
  flex-grow: 1;
  padding: 20px;
`

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  width: 100%;
  height: 70px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
