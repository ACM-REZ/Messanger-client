import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Main, Footer, Container } from './Layout.styles'

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  )
}

export default Layout
