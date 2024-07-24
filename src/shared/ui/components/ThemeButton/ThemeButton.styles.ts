import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &.large {
    font-size: 20px;
  }

  &.small {
    font-size: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`
