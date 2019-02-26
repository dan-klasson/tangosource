import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import useAuthenticate from './custom/useAuthenticate'

export default function Login(props) {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const { credentials, setAuthenticated } = useAuthenticate()

  function handleSubmit(e) {
    e.preventDefault()
    if(username.length && password.length) {
      if(JSON.stringify({username, password}) === credentials) {
        setAuthenticated('true')
      } else {
        setError(true)
      }
    }
  }

  return (
    <Form onSubmit={ handleSubmit }>
      { error &&
        <Alert variant="danger">Username or password incorrect</Alert>
      }
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control 
          name="username" 
          type="text" 
          value={ username }
          onChange={ e => setUsername(e.target.value) }
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control 
          name="password" 
          type="password" 
          value={ password }
          onChange={ e => setPassword(e.target.value) }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}
