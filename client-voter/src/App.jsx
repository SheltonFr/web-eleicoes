import { Route, Routes } from "react-router-dom"
import { Container } from "semantic-ui-react"
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
function App() {

  return (
    <Container>
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </Container>
  )
}

export default App
