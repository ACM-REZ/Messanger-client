import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../entities/theme/model/themeSlice'
import { AppDispatch } from '../../../app/store'
import ThemeButton from '../../../shared/ui/components/ThemeButton/ThemeButton'

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className="App">
      <h1>Hello?</h1>
      <ThemeButton onClick={handleToggleTheme}>Toggle Theme</ThemeButton>
    </div>
  )
}

export default HomePage
