import React from 'react'
import { Button } from './Button.styles'
import { ThemeButtonProps } from './Button.types'

const ThemeButton: React.FC<ThemeButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
}

export default ThemeButton
