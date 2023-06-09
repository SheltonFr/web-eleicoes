/* eslint-disable react/prop-types */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './pages/Home/Home'

function App() {

  const { darkMode } = useContext(DarkModeContext)

  const { token } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return token ? (children) : <Navigate to={'/login'} />
  }

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route path='/' >
            <Route path='login' element={<LoginForm />} />
            <Route path='register' element={<SignupForm />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
