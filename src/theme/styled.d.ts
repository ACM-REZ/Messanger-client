import 'styled-components'

interface ThemeColors {
  background: string
  primary: string
  secondary: string
  text: string
  textLight: string
  error: string
  success: string
  warning: string
  info: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeColors {}
}
