import * as yup from 'yup'

const loginSchema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязательно'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен иметь не менее 6-ти символов'),
})

export default loginSchema
