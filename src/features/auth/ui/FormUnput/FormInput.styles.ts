import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`

export const Label = styled.label`
  font-size: 16px;
  max-width: fit-content;
`

export const InputContainer = styled.div`
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);

    width: 16px;
    height: 16px;
  }

  path {
    transition: all 0.3s;
  }
`

export const Input = styled.input`
  width: 100%;

  font-size: 16px;

  border-bottom: 2px solid #e3e3e3;

  padding: 10px 30px;

  transition: border-bottom 0.3s;

  &::placeholder {
    color: #e3e3e3;
  }

  &:focus {
    border-bottom: 2px solid #007bff;
  }

  &:focus + svg path {
    fill: #007bff;
  }
`

export const IconWrapper = styled.div`
  margin-right: 0.5rem;
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
