import React, { useEffect, useState } from 'react'
export const RootContext = React.createContext()

export default ({ children }) => {
  const auth = window.localStorage.getItem('authenticated') || 'false'
  const cred = window.localStorage.getItem('credentials') || null
  const [authenticated, setAuthenticated] = useState(auth)
  const [credentials, setCredentials] = useState(cred)

  useEffect(
    () => {
      window.localStorage.setItem('authenticated', authenticated)
      window.localStorage.setItem('credentials', credentials)
    },
    [authenticated, credentials]
  )

  const defaultContext = {
    authenticated,
    setAuthenticated,
    credentials,
    setCredentials 
  }

  return (
    <RootContext.Provider value={defaultContext}>
      {children}
    </RootContext.Provider>
  )
}