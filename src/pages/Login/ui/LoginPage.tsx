import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../entities/user/model/userSlice'
import { User } from '../../../entities/user/types/User'
import ThemeButton from '../../../shared/ui/components/ThemeButton/ThemeButton'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const user: User = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    }
    dispatch(login(user))
    navigate('/')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <ThemeButton onClick={handleLogin}>Login</ThemeButton>
    </div>
  )
}

export default LoginPage
