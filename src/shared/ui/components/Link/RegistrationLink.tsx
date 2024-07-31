import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-align: right;
`

interface RegistrationLinkProps {
  to: string
  children: React.ReactNode
}

const RegistrationLink: React.FC<RegistrationLinkProps> = ({
  to,
  children,
}) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

export default RegistrationLink
