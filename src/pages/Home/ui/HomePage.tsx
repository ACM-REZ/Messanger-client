import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../entities/theme/model/themeSlice'
import { AppDispatch } from '../../../app/store'
import Button from '../../../shared/ui/components/Button/Button'

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className="App">
      <h1>Hello?</h1>
      <Button onClick={handleToggleTheme}>Toggle Theme</Button>
    </div>
  )
}

export default HomePage
