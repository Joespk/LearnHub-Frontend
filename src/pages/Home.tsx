import Tap from '../componets/Tap'
import classes from '../pages/Home.module.css'
import useContents from '../hook/useContents'
import Content from '../componets/Content'
import { useAuth } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'
import Footer from '../componets/Footer'

//Function Homepage
function Home() {
  const { contents } = useContents()
  const { isLoggedIn } = useAuth()

  return (
    <div className={classes.container}>
      <Tap />
      {isLoggedIn ? (
        <>
          <Link to="/CreateContent">
            <button className={classes.create}>CREATE CONTENT</button>
          </Link>
        </>
      ) : (
        <></>
      )}
      <div className={classes.feedContainer}>
        {contents &&
          contents.data.map((content) => {
            return <Content key={content.id} content={content} />
          })}
      </div>
      <Footer />
    </div>
  )
}

export default Home
