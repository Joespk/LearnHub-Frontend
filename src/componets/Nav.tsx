import { useAuth } from '../provider/AuthProvider'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Nav = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="100" viewBox="0 0 103 100" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.51789 0H0V2.51789V65.465V67.9829H2.51789H65.465V62.9471H5.03577V5.03577H78.0545V15.1073H83.0902V2.51789V0H80.5723H2.51789ZM80.5723 32.7325C84.7442 32.7325 88.126 29.3507 88.126 25.1789C88.126 21.007 84.7442 17.6252 80.5723 17.6252C76.4005 17.6252 73.0187 21.007 73.0187 25.1789C73.0187 29.3507 76.4005 32.7325 80.5723 32.7325ZM75.3183 37.7904C75.2261 37.7904 75.1347 37.792 75.0438 37.7952H70.5008C69.3534 37.7952 68.2684 38.3169 67.5516 39.2128L58.6141 50.3847H45.3219C43.2361 50.3847 41.5451 52.0757 41.5451 54.1615C41.5451 56.2476 43.2361 57.9383 45.3219 57.9383H60.4293C61.5767 57.9383 62.6616 57.4169 63.3785 56.521L68.1922 50.5038V95.4097C68.1922 97.6733 70.0443 99.5255 72.3079 99.5255C74.5715 99.5255 76.4236 97.6733 76.4236 95.4097V74.8316H84.6548V95.4097C84.6548 97.6733 86.507 99.5255 88.7706 99.5255C91.0342 99.5255 92.8863 97.6733 92.8863 95.4097V64.821C95.1499 64.821 102.14 60.5124 102.14 49.9027C102.14 41.9062 95.1499 37.7904 92.8863 37.7904H75.3183Z"
            fill="#141E46"
          />
        </svg>
        <h1>LearnHub</h1>
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
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav
