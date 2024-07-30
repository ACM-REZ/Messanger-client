import React from 'react'
import { Button } from './Button.styles'

type ThemeButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export default ThemeButton
