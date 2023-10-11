import { FormEvent, useState } from 'react'
import { useAuth } from '../provider/AuthProvider'
import classes from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import useRegister from '../hook/useRegister'

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
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value={Newusername} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password</label>
        <input type="text" value={Newpassword} onChange={(e) => setPassword(e.target.value)} required />
        <label>Name</label>
        <input type="text" value={Newname} onChange={(e) => setName(e.target.value)} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default Register
