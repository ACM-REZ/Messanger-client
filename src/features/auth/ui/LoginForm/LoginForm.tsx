import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormInput from '../../../../shared/ui/components/Form/FormInput/FormInput'
import loginSchema from '../../schemas/loginSchema'

import { Form } from './LoginForm.styles'
import { Button } from '../../../../shared/ui/components/Button/Button.styles'
import { IFormInputs } from './LoginForm.types'
import { UserIcon, PasswordIcon } from '../../../../shared/ui/icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../../entities/user/model/userSlice'
import RegistrationLink from '../../../../shared/ui/components/Link/RegistrationLink'

const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<IFormInputs> = (user) => {
    console.log(user)

    dispatch(login(user))
    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Имя пользователя"
        placeholder="Введите логин"
        id="username"
        {...register('username')}
        error={errors.username?.message}
        icon={<UserIcon />}
      />
      <FormInput
        label="Пароль"
        placeholder="Введите пароль"
        id="password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
        icon={<PasswordIcon />}
      />
      <RegistrationLink to={'/registration'}>
        Зарегистрироваться
      </RegistrationLink>
      <Button type="submit">Войти</Button>
    </Form>
  )
}

export default LoginForm
