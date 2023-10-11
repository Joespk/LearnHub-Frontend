import Tap from '../componets/Tap'
import classes from '../pages/Home.module.css'
import useContents from '../hook/useContents'
import Content from '../componets/Content'
import { useAuth } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

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
            <Button
              style={{
                borderRadius: 35,
                backgroundColor: '#008170',
                padding: '18px 36px',
                fontSize: '18px',
                color: '#232D3F',
              }}
            >
              Create Content
            </Button>
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
    </div>
  )
}

export default Home
