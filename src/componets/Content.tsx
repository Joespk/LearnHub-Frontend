import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Content.module.css'
import useContent from '../hook/useContent'

interface IContentprops {
  content: ContentDTO
}

const Content = ({ content }: IContentprops) => {
  return (
    <div className={classes.content}>
      <Link to={`/content/${content.id}`} className={classes.font}>
        <img className={classes.thumbnail} src={content.thumbnailUrl} />
        <h3> {content.videoTitle}</h3>
        <p>{content.creatorName}</p>
        <p> {content.comment}</p>
        <p>{content.postedBy.name}</p>
        <p>{content.rating}</p>
      </Link>
    </div>
  )
}

export default Content
