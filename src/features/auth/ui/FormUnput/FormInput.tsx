import { forwardRef } from 'react'
import { FormInputProps } from './FormInput.types'
import { Input, InputContainer, InputWrapper, Label } from './FormInput.styles'

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, id, error, icon, ...props }, ref) => {
    return (
      <InputWrapper>
        <Label>{label}</Label>
        <InputContainer className="modalFormInput__block">
          <Input id={id} ref={ref} {...props} />
          {icon && <>{icon}</>}
        </InputContainer>
        {error && <span>{error}</span>}
      </InputWrapper>
    )
  },
)

export default FormInput
