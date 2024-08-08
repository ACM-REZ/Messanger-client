import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormInput from '../../../../shared/ui/components/Form/FormInput/FormInput'

import { Button } from '../../../../shared/ui/components/Button/Button.styles'
import { UserRegistrationForm } from './RegistrationForm.types'
import { UserIcon, PasswordIcon } from '../../../../shared/ui/icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../../entities/user/model/userSlice'
import Form from '../../../../shared/ui/components/Form/Form'
import registrationSchema from '../../schemas/registrationSchema'

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegistrationForm>({
    resolver: yupResolver(registrationSchema),
  })

  const onSubmit: SubmitHandler<UserRegistrationForm> = (user) => {
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
        type="text"
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
      <FormInput
        label="Подтвердите пароль"
        placeholder="Введите пароль"
        id="confirmPassword"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        icon={<PasswordIcon />}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </Form>
  )
}

export default RegistrationForm
