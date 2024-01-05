import { useAuth } from '../provider/AuthProvider'
import classes from './Nav.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { FormEvent } from 'react'

const Nav = () => {
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()
  const handleClick = (e: FormEvent) => {
    navigate('/')
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo} onClick={handleClick}>
        <img className={classes.image} src={logo} alt="logo" />
        <h3 className={classes.learn}>LEARNHUB</h3>
      </div>
      <div className={classes.menu}>
        {isLoggedIn ? (
          <>
            <h4 onClick={logout} className={classes.link}>
              Sign out
            </h4>
          </>
        ) : (
          <>
            <Link to="/Login" className={classes.link}>
              Sign up
            </Link>
            <Link to="/Register" className={classes.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
