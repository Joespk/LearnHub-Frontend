import { FormEvent, useState } from 'react'
import { useAuth } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />

      <label>Password:</label>
      <input type="Password" onChange={(e) => setPassword(e.target.value)} />

      <input type="submit" value="Login" />
    </form>
  )
}

export default Login

//className={classes.loginForm}
