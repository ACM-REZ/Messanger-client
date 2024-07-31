import React from 'react'
import LoginForm from '../../../features/auth/ui/LoginForm/LoginForm'
import FormWrapper from '../../../shared/ui/components/Form/FormWrapper/FormWrapper'

const LoginPage: React.FC = () => {
  return (
    <FormWrapper title="Вход">
      <LoginForm />
    </FormWrapper>
  )
}

export default LoginPage
