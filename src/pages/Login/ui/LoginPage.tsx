import React from 'react'
import LoginForm from '../../../features/auth/ui/LoginForm/LoginForm'
import { Title, Wrapper } from './LoginPage.styles'

const LoginPage: React.FC = () => {
  return (
    <Wrapper>
      <Title>Вход</Title>
      <LoginForm />
    </Wrapper>
  )
}

export default LoginPage
