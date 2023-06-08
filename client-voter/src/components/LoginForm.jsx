import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Bem Vindo
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='' iconPosition='left' placeholder='Username' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Enviar
          </Button>
        </Segment>
      </Form>
      <Message>
        Não tem uma conta?
        <NavLink to={'/register'}> Cria já</NavLink>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm