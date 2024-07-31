import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  background: '#ffffff',
  primary: '#007bff',
  primaryHover: '#046ad7',
  secondary: '#333333',
  text: '#ffffff',
  textLight: '#666666',
  borderColor: '#dddddd',
  error: '#dc3545',
  success: '#28a745',
  warning: '#ffc107',
  info: '#17a2b8',
}

const darkTheme: DefaultTheme = {
  background: '#333333',
  primary: '#007bff',
  primaryHover: '#046ad7',
  secondary: '#ffffff',
  text: '#333333',
  textLight: '#cccccc',
  borderColor: '#444444',
  error: '#dc3545',
  success: '#28a745',
  warning: '#ffc107',
  info: '#17a2b8',
}

export { lightTheme, darkTheme }
