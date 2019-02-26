import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuthenticate from './custom/useAuthenticate'

export default function Register(props) {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nomatchPassword, setNoMatchPassword] = useState(false)
  const [alreadyTaken, setAlreadyTaken] = useState(false)
  const { credentials, setCredentials, setAuthenticated } = useAuthenticate()

  useEffect(() => {
    if(username.length > 2) {
      const parsedCredentials = JSON.parse(credentials)
      if(parsedCredentials && parsedCredentials.username === username) {
        return setAlreadyTaken(true)
      }
    }
    setAlreadyTaken(false)
  }, [username])

  useEffect(() => {
    if(password.length > 2 && confirmPassword.length > 2) {
      if(password !== confirmPassword) {
        return setNoMatchPassword(true)
      }
    }
    setNoMatchPassword()
  }, [password, confirmPassword])

  function handleSubmit(e) {
    e.preventDefault()
    if(username.length && password.length) {
      if(password === confirmPassword) {
        setCredentials(JSON.stringify({username, password}))
        setAuthenticated('true')
      } else {
        setNoMatchPassword(true)
      }
    }
  }

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control 
          name="username" 
          type="text" 
          value={ username }
          onChange={ e => setUsername(e.target.value) }
          isInvalid={ alreadyTaken }
        />
        <Form.Control.Feedback type="invalid">
          Username already taken
        </Form.Control.Feedback>
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
      <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
          name="confirm_password" 
          type="password" 
          value={ confirmPassword }
          onChange={ e => setConfirmPassword(e.target.value) }
          isInvalid={ nomatchPassword }
        />
        <Form.Control.Feedback type="invalid">
          Passwords do not match
        </Form.Control.Feedback>
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit"
       >Register</Button>
    </Form>
  );
}
