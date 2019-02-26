import useAuthenticate from './custom/useAuthenticate'

export default function Logout() {
  const {setAuthenticated } = useAuthenticate()

  setAuthenticated('false')

  return null
}
