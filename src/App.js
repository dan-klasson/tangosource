import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import BmiForm from './BmiForm'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import AuthenticatedRoute from './AuthenticatedRoute'
import Header from './Header'
import './index.css'

export default function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <AuthenticatedRoute exact path="/" component={BmiForm} />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/logout" component={ Logout } />
              <Route exact path="/register" component={ Register } />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  )

}
