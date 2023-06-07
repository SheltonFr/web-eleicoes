/* eslint-disable react/prop-types */
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { partyInputs, candidateInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'

function App() {

  const { darkMode } = useContext(DarkModeContext)

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to={'/login'} />
  }

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Router>
        <Routes>
          <Route path='/' >
            <Route path='login' element={<Login />} />

            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path='users'>
              <Route index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                } />
              <Route
                path=':userId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                } />
            </Route>

            <Route path='parties'>
              <Route
                index
                element={<List title='Adicionar novo partido' />}
              />
              <Route
                path=':partyId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={partyInputs} title="Adicionar Partido" />
                  </RequireAuth>
                } />
            </Route>

            <Route path='candidates'>
              <Route
                index
                element={<List title='Adicionar novo Candidato' />}
              />
              <Route
                path=':candidateId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={candidateInputs} title="Adicionar Candidato" />
                  </RequireAuth>
                } />
            </Route>


          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
