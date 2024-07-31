import { forwardRef } from 'react'
import { FormInputProps } from './FormInput.types'
import {
  ErrorMessage,
  Input,
  InputContainer,
  InputWrapper,
  Label,
} from './FormInput.styles'

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, id, error, icon, ...props }, ref) => {
    return (
      <InputWrapper>
        <Label>{label}</Label>
        <InputContainer className="modalFormInput__block">
          <Input id={id} ref={ref} {...props} />
          {icon && <>{icon}</>}
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    )
  },
)

export default FormInput
