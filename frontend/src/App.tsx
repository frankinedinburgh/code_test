import MainView from '@views/main'
import { AppProvider } from './App.provider'

function App() {
  return (
    <AppProvider>
      <MainView />
    </AppProvider>
  )
}

export default App
