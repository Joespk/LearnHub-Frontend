import classes from './Tap.module.css'
import learnhub from '../assets/content-video_1-removebg-preview.png'
import rectangle from '../assets/Rectangle.svg'

const Tap = () => {
  return (
    <section className={classes.container}>
      <div className={classes.tap}>
        <div className={classes.title}>
          <span>
            <img src={rectangle} />
            &nbsp; Welcome to LearnHub
          </span>
          <h1>The best video content website.</h1>
          <span className={classes.mind}>
            Expand Your Mind, Watch Your World: Learn Hub <br />
            Where Knowledge Meets Vision. Empower Your Journey, <br /> Illuminate Your Path: Learn Hub Unveiling Wisdom,
            Framing Futures.
          </span>
        </div>
        <img src={learnhub} />
      </div>
    </section>
  )
}

export default Tap
