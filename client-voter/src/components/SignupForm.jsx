import React, { useState } from 'react'
import { NavLink, useNavigate, useNavigation } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { createVoter } from '../repository';

const SigupForm = () => {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [bi, setBi] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createVoter({
        bi, name, password, username
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Bem Vindo
        </Header>
        <Form size='large' onSubmit={e => handleSubmit(e)}>
          <Segment stacked>
            <Form.Input
              fluid icon='user'
              iconPosition='left'
              placeholder='Nome'
              required
              onChange={e => setName(e.target.value)} />
            <Form.Input
              fluid icon='wallet'
              iconPosition='left'
              placeholder='BI'
              required
              onChange={e => setBi(e.target.value)} />
            <Form.Input
              fluid icon='user'
              iconPosition='left'
              placeholder='Username'
              required
              onChange={e => setUsername(e.target.value)} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              required
              onChange={e => setPassword(e.target.value)}
            />

            <Button color='teal' fluid size='large'>
              Enviar
            </Button>
          </Segment>
        </Form>
        <Message>
          Possue uma conta?
          <NavLink to={'/'}> Entre</NavLink>
        </Message>
      </Grid.Column>
    </Grid>

  )
}






export default SigupForm;