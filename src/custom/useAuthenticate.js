import { useEffect, useContext } from 'react';
import useReactRouter from 'use-react-router';
import { RootContext } from './../RootContext'

export default function useAuthenticate() {
  const { history } = useReactRouter()
  const {
    authenticated,
    setAuthenticated,
    credentials,
    setCredentials
  } = useContext(RootContext);

  useEffect(() => {
    if(authenticated === 'true') {
      history.push('/')
    }
  }, [authenticated])

  return {
    authenticated,
    setAuthenticated,
    credentials,
    setCredentials
  }

}
