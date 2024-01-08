import classes from './Footer.module.css'
import arrow from '../assets/arrow-right.svg'

const Footer = () => {
  return (
    <div className={classes.block}>
      <div className={classes.content}>
        <div className={classes.container}>
          <div className={classes.contact}>
            <h2>LearnHub</h2>
            <div className={classes.menu}>
              <span className={classes.address}>
                148/80-81 Soi Khuborn 27 Yak 52 , Kruborn road Tharaeng Sub-district , Bangkhen District , Bangkok ,
                10220{' '}
              </span>
              <span>095-554-1629</span>
            </div>
          </div>
          <div className={classes.page}>
            <h4>Page</h4>
            <div className={classes.menu}>
              <a>Home</a>
              <a>Sign up</a>
              <a>Register</a>
            </div>
          </div>

          <div className={classes.contact}>
            <h4>Join Newsletter</h4>
            <div className={classes.menu}>
              <span className={classes.join}>Subscribe our newsletter to get more contact</span>
              <div className={classes.email}>
                <input type="email" className={classes.text} placeholder="Enter your email" />
                <button>
                  <img src={arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.container2}>
          <div className={classes.content2}>
            <div className={classes.left}>
              <span>
                Copyright © 2024 LearnHub All rights reserved
                <div className={classes.privacy}>
                  <span>Privacy Policy</span>
                  <span>Terms & Conditions</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
