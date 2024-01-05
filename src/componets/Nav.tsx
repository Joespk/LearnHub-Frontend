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
            <Button
              variant="outlined"
              style={{
                fontSize: '18px',
                color: '#141E46',
                backgroundColor: '#FF6969',
              }}
              onClick={logout}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <Link to="/Login" className={classes.link}>
              Login
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
