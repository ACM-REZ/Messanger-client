import 'styled-components'

interface ThemeColors {
  background: string
  color: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeColors {}
}
