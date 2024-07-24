import React from 'react'
import classNames from 'classnames'
import { Button } from './ThemeButton.styles'

type ThemeButtonProps = {
  size?: 'small' | 'large'
  onClick: () => void
  children: React.ReactNode
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  size = 'large',
  onClick,
  children,
}) => {
  const buttonClass = classNames({
    large: size === 'large',
    small: size === 'small',
  })

  return (
    <Button onClick={onClick} className={buttonClass}>
      {children}
    </Button>
  )
}

export default ThemeButton
