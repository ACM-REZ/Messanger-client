import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../theme/theme'
import GlobalStyle from './GlobalStyle'
import LoginPage from '../pages/Login/ui/LoginPage'
import HomePage from '../pages/Home/ui/HomePage'
import PrivateRoute from '../features/auth/model/PrivateRoute'
import Layout from './layout/Layout'
import RegistrationPage from '../pages/Registration/ui/RegistrationPage'

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
