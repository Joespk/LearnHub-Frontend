import Tap from '../componets/Tap'
import classes from '../pages/Home.module.css'
import useContents from '../hook/useContents'
import Content from '../componets/Content'

function Home() {
  const { contents } = useContents()

  return (
    <div className={classes.container}>
      <Tap />
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
