import { useContext, useState } from 'react'
import './login.scss'
import api from '../../api/api.js'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import SimpleBackdrop from '../../components/Backdrop/Backdrop'

const Login = () => {

  const [error, setError] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true)
    api.post('/auth/login', {
      username: username,
      password: password
    }).then((res) => {
      const token = res.data.token;
      dispatch({ type: "LOGIN", payload: token })
      navigate("/")
      // eslint-disable-next-line no-unused-vars
    }).catch((error) => {
      setError(error.response.data.message)
      setTimeout(() => {
        setError(null)
      }, 3500)
      
    }).finally(() => {
      setIsLoading(false)
    });

  }

  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Bem Vindo
          </Header>
          <Form size='large' onSubmit={handleLogin}>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={e => setUsername(e.target.value)} required />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={e => setPassword(e.target.value)}
                required
              />

              <Button color='teal' fluid size='large'>
                Enviar
              </Button>
            </Segment>
          </Form>

          {error &&

            <Message className='error'>
              {error}
            </Message>
          }

        </Grid.Column>
      </Grid>
      <SimpleBackdrop open={isLoading} />

    </div>
  )
}

export default Login