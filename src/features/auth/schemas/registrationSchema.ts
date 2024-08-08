import * as yup from 'yup'

const registrationSchema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязательно'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен иметь не менее 6-ти символов'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтверждение пароля обязательно'),
})

export default registrationSchema
