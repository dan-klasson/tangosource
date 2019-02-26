import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RootContext } from './RootContext'

export default ({ render, ...routeProps }) => {

  const { authenticated } = useContext(RootContext)

  if(authenticated === 'true') {
    return <Route {...routeProps} />
  } else {
    return <Redirect to='/login' />
  }
}