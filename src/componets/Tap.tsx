import classes from './Tap.module.css'
import learnhub from '../assets/content-video_1-removebg-preview.png'

const Tap = () => {
  return (
    <section className={classes.container}>
      <div className={classes.tap}>
        <div className={classes.title}>
          <span>Welcome to LearnHub</span>
        </div>
        <img src={learnhub} />
      </div>
    </section>
  )
}

export default Tap
