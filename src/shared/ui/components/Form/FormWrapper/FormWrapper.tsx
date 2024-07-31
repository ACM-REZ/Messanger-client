import React from 'react'
import { Title, Wrapper } from './FormWrapper.styles'
import { FormWrapperProps } from './FormWrapper.types'

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

export default FormWrapper
