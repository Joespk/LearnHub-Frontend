import { Link } from 'react-router-dom'
import { ContentDTO } from '../types/dto'
import classes from './Content.module.css'
import Rating from '@mui/material/Rating'
import { Typography, styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

interface IContentprops {
  content: ContentDTO
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

const Content = ({ content }: IContentprops) => {
  return (
    <div className={classes.content}>
      <Link to={`/content/${content.id}`} className={classes.font}>
        <img className={classes.thumbnail} src={content.thumbnailUrl} />
        <h3> {content.videoTitle}</h3>
        <h5>{content.creatorName}</h5>
        <h5> {content.comment}</h5>
        <br />
        <p className={classes.post}>
          {content.postedBy.name}
          <StyledRating
            name="read-only"
            value={content.rating}
            readOnly
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </p>
      </Link>
    </div>
  )
}

export default Content
