import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import useAuthenticate from './custom/useAuthenticate'

export default function Header() {

  const { authenticated } = useAuthenticate()

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Online BMI Calculator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {authenticated === 'true' ? (
            <Nav.Link href="/logout">Logout</Nav.Link>
          ) : (
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}