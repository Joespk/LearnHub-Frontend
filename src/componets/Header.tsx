import classes from './Header.module.css'
import close from '../assets/close.svg'
import { useNavigate } from 'react-router'
import { FormEvent, useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [isTabVisible, setIsTabVisible] = useState<boolean>(true)

  const toggleTabVisibility = () => {
    setIsTabVisible(!isTabVisible)
  }
  const handlejoin = (e: FormEvent) => {
    e.preventDefault()
    navigate('/Register')
  }

  return (
    <div style={{ display: isTabVisible ? 'block' : 'none' }}>
      <div className={classes.container}>
        <div className={classes.content}>
          <span className={classes.text}>Welcome to Learnhub website </span>
          <a className={classes.visit} onClick={handlejoin}>
            Join now
          </a>
        </div>
        <div className={classes.icon}>
          <img src={close} className={classes.close} onClick={toggleTabVisibility} />
          {isTabVisible ? <></> : <></>}
        </div>
      </div>
    </div>
  )
}

export default Header
