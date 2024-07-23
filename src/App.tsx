import StyledButton from './components/StyledButton'
import Counter from './components/Counter'

function App() {
  const apiUrl = import.meta.env.VITE_API_URL
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <div className="App">
      <h1>Welcome to {appName}</h1>
      <p>API URL: {apiUrl}</p>
      <StyledButton size="large">Click Me</StyledButton>
      <Counter />
    </div>
  )
}

export default App
