import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`

export const Label = styled.label`
  font-size: 16px;
  max-width: fit-content;

  color: ${({ theme }) => theme.text};
`

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`

export const IconContainer = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);

  width: 16px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
  }

  path {
    transition: all 0.3s;
  }
`

export const EyeContainer = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  width: 16px;
  height: 16px;

  cursor: pointer;

  svg {
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

  color: ${({ theme }) => theme.text};
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }

  &:focus + div svg path {
    fill: ${({ theme }) => theme.primary};
  }
`

export const IconWrapper = styled.div`
  margin-right: 0.5rem;
`

export const ErrorMessage = styled.span`
  text-align: left;
  color: ${({ theme }) => theme.error};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
