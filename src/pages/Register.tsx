import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useRegister from '../hook/useRegister'
import classes from './Login.module.css'
import registerlogo from '../assets/registerlogo.svg'

const Register = () => {
  const navigate = useNavigate()
  const { isSubmitting, register } = useRegister()
  const [Newusername, setUsername] = useState<string>('')
  const [Newpassword, setPassword] = useState<string>('')
  const [Newname, setName] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(Newusername, Newpassword, Newname)

    try {
      await register(Newusername, Newpassword, Newname)

      setUsername('')
      setPassword('')
      setName('')

      navigate('/')
    } catch (err) {
      console.error('Cannot Register')
    }
  }

  return (
    <div className={classes.display}>
      <div className={classes.containerLogin}>
        <form className={classes.formLogin} onSubmit={handleSubmit}>
          <img src={registerlogo} />
          <h1 className={classes.lableLogin}>Register</h1>
          <label className={classes.pLogin}>Username</label>
          <input
            type="text"
            value={Newusername}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={classes.inputLogin}
          />
          <label className={classes.pLogin}>Password</label>
          <input
            type="password"
            value={Newpassword}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={classes.inputLogin}
          />
          <label className={classes.pLogin}>Name</label>
          <input
            type="text"
            value={Newname}
            onChange={(e) => setName(e.target.value)}
            required
            className={classes.inputLogin}
          />
          <button type="submit" disabled={isSubmitting} className={classes.summitButton}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
