import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Content.module.css'

interface IContentprops {
  content: ContentDTO
}

const Content = ({ content }: IContentprops) => {
  return (
    <div className={classes.content}>
      <Link to={`/content/${content.id}`}>
        <img className={classes.thumbnail} src={content.thumbnailUrl} />
        <p> {content.videoTitle}</p>
        <p>{content.creatorName}</p>
        <p> {content.comment}</p>
        <p>{content.postedBy.name}</p>
        <p>{content.rating}</p>
      </Link>
    </div>
  )
}

export default Content
