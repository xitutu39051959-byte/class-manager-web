import { useEffect, useMemo, useState } from 'react'
import './App.css'
import AppShell from './components/AppShell'
import { navigate, parseLocation, subscribe, type Route } from './router'
import StudentsPage from './pages/StudentsPage'
import WorkbenchPage from './pages/WorkbenchPage'

function App() {
  const [route, setRoute] = useState<Route>(() => parseLocation())

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setRoute(parseLocation())
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (route.name === 'unknown') {
      navigate('/', true)
    }
  }, [route])

  const currentPath = useMemo<'/' | '/students'>(() => {
    if (route.name === 'students') return '/students'
    return '/'
  }, [route])

  return (
    <AppShell currentPath={currentPath} onNavigate={(path) => navigate(path)}>
      {route.name === 'students' ? <StudentsPage /> : <WorkbenchPage />}
    </AppShell>
  )
}

export default App
