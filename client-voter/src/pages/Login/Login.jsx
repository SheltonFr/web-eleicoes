import { useContext, useState } from 'react'
import './login.scss'
import api from '../../api/api.js'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import SimpleBackdrop from '../../components/Backdrop/Backdrop'

const Login = () => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    setIsOpen(true)
    api.post('/auth/login', {
      username: email,
      password: password
    }).then((res) => {
      const token = res.data.token;
      dispatch({ type: "LOGIN", payload: token })
      navigate("/")
      // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
      setError(true)
    })
      .finally(() => setIsOpen(false));

  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='Username' onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        {error && <span>Wrong Username or Password</span>}
      </form>
      <SimpleBackdrop open={isOpen} />
    </div>
  )
}

export default Login