import React from 'react'
import FormWrapper from '../../../shared/ui/components/Form/FormWrapper/FormWrapper'
import RegistrationForm from '../../../features/auth/ui/RegistrationForm/RegistrationForm'

const RegistrationPage: React.FC = () => {
  return (
    <FormWrapper title="Регистрация">
      <RegistrationForm />
    </FormWrapper>
  )
}

export default RegistrationPage
