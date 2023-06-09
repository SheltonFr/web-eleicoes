import './auth.scss'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { AuthContext } from '../context/AuthContext'
import Backdrop from '../components/Backdrop/Backdrop'
import api from '../api/api'


const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const [isLoading, setIsLoaging] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoaging(true)
    api.post('/auth/login', {
      username: username,
      password: password
    }).then((res) => {
      const token = res.data.token;
      dispatch({ type: "LOGIN", payload: token });     // eslint-disable-next-line no-unused-vars
      navigate("/");
    }).catch((error) => {
      setError(error.response.data.message)
      setTimeout(() => {
        setError(null)
      }, 3500)


    }).finally(() => setIsLoaging(false));

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

          <Message>
            Não tem uma conta?
            <NavLink to={'/register'}> Cria já</NavLink>
          </Message>
        </Grid.Column>
      </Grid>
      <Backdrop open={isLoading} />

    </div>

  )
}





export default LoginForm