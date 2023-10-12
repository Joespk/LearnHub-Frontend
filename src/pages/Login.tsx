import { FormEvent, useState } from 'react'
import { useAuth } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'

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
    <div className={classes.display}>
      <div className={classes.containerLogin}>
        <form onSubmit={handleSubmit} className={classes.formLogin}>
          <h1 className={classes.lableLogin}>Login</h1>
          <p className={classes.ptext}>
            Doesn't have an account yet? <Link to="/Register">Sign Up</Link>
          </p>

          <label className={classes.pLogin}>Username</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} className={classes.inputLogin} />

          <label className={classes.pLogin}>Password</label>
          <input type="Password" onChange={(e) => setPassword(e.target.value)} className={classes.inputLogin} />

          <input type="submit" value="Login" className={classes.summitButton} />
        </form>
      </div>
    </div>
  )
}

export default Login

//className={classes.loginForm}
