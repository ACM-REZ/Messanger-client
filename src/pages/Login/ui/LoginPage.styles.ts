import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 400px;
  width: 100%;

  background-color: ${({ theme }) => theme.secondary};
  border-radius: 6px;

  padding: 40px 30px;
`

export const Title = styled.h1`
  text-align: center;

  font-size: 36px;
  font-weight: 600;

  color: ${({ theme }) => theme.text};
`
