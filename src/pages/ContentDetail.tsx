import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'
import classes from './ContentDetail.module.css'
import { FormEvent } from 'react'
import { Rating, Typography, styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import edit from '../assets/edit.svg'
import deletelogo from '../assets/delete.svg'
import backhome from '../assets/back.svg'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error, deleteContent, isSubmitting } = useContent(id || '1')
  const { isLoggedIn, username } = useAuth()
  const navigate = useNavigate()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log()

    try {
      await deleteContent()

      navigate('/')
    } catch (err) {
      console.error('Cannot delete')
    }
  }

  return (
    <div className={classes.container}>
      {content && (
        <>
          <div>
            <div className={classes.detail}>
              <ReactPlayer url={content.videoUrl} />
              <h2>{content.videoTitle}</h2>
              <span className={classes.text}>{content.creatorName}</span>
              <h3 className={classes.text}>Detail</h3>
              <span>Comment:&nbsp;{content.comment}</span>
              <span>
                Rating:
                <StyledRating
                  name="read-only"
                  value={content.rating}
                  readOnly
                  icon={<FavoriteIcon fontSize="inherit" />}
                  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
              </span>

              <span>PostedBy:&nbsp;{content.postedBy.username}</span>
              <span>Date:&nbsp;{content.updatedAt}</span>
              {username === content.postedBy.username ? (
                <>
                  <div className={classes.icon}>
                    <Link to={`/edit/${content.id}`} className={classes.button}>
                      <img src={edit} />
                    </Link>
                    <button className={classes.button} onClick={handleSubmit}>
                      <img src={deletelogo} />
                    </button>

                    <Link to="/" className={classes.button}>
                      <img src={backhome} />
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/">
                    <img src={backhome} />
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ContentDetail
