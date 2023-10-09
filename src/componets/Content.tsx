import { ContentDTO } from '../types/dto'
import classes from './Content.module.css'

interface IContentprops {
  content: ContentDTO
}

const Content = ({ content }: IContentprops) => {
  return (
    <div className={classes.content}>
      <img className={classes.thumbnail} src={content.thumbnailUrl} />
      <p> videoTitle:{content.videoTitle}</p>
      <p> videoUrl:{content.videoUrl}</p>
      <p> comment: {content.comment}</p>
    </div>
  )
}

export default Content
