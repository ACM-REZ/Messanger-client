import { forwardRef, useState } from 'react'
import { FormInputProps } from './FormInput.types'
import {
  ErrorMessage,
  EyeContainer,
  IconContainer,
  Input,
  InputContainer,
  InputWrapper,
  Label,
} from './FormInput.styles'
import { EyeIcon } from '../../../icons'

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, id, error, icon, type, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
      setIsVisible((prev) => !prev)
    }

    const isPasswordType = type === 'password'
    const inputType = isVisible ? 'text' : type

    return (
      <InputWrapper>
        <Label>{label}</Label>
        <InputContainer>
          <Input id={id} ref={ref} {...props} type={inputType} />
          {icon && <IconContainer>{icon}</IconContainer>}
          {isPasswordType && (
            <EyeContainer type="button" onClick={toggleVisibility}>
              <EyeIcon isVisible={isVisible} />
            </EyeContainer>
          )}
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    )
  },
)

export default FormInput
