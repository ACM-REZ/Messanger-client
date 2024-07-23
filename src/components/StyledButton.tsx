import styled from 'styled-components'
import classNames from 'classnames'

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &.large {
    font-size: 20px;
  }

  &.small {
    font-size: 12px;
  }

  &:hover {
    background-color: #0056b3;
  }
`

type StyledButtonProps = {
  size?: 'small' | 'large'
  children: React.ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({
  size = 'small',
  children,
}) => {
  const buttonClass = classNames({
    large: size === 'large',
    small: size === 'small',
  })

  return <Button className={buttonClass}>{children}</Button>
}

export default StyledButton
