import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'
import classes from './ContentDetail.module.css'
import { FormEvent, useState } from 'react'
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
  const { content, isLoading, error, deleteContent, isSubmitting, newupdateContent } = useContent(id || '1')
  const { isLoggedIn, username } = useAuth()
  const [Newcomment, setNewcomment] = useState<string>('')
  const [Newrating, setNewrating] = useState<number>(0)
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const navigate = useNavigate()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  const handledelete = async (e: FormEvent) => {
    e.preventDefault()
    console.log()

    try {
      await deleteContent()

      navigate('/')
    } catch (err) {
      console.error('Cannot delete')
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(Newcomment, Newrating)

    try {
      await newupdateContent(Newcomment, Newrating)

      setNewcomment('')
      setNewrating(0)

      navigate('/')
    } catch (err) {
      console.error('Cannot edit content')
    }
  }

  const handleedit = (e: FormEvent) => {
    e.preventDefault()
    setIsFormVisible(!isFormVisible)
  }

  return (
    <div className={classes.container}>
      {content && (
        <>
          <div>
            <div className={classes.detail}>
              <ReactPlayer url={content.videoUrl} className={classes.video} />
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
                    <img src={edit} onClick={handleedit} className={classes.button} />
                    <button className={classes.button} onClick={handledelete}>
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
              {isFormVisible && (
                <form onSubmit={handleSubmit} className={classes.formEdit}>
                  <label className={classes.ptext}>Comment</label>
                  <input
                    type="text"
                    value={Newcomment}
                    onChange={(e) => setNewcomment(e.target.value)}
                    required
                    className={classes.labelEdit}
                  />
                  <label className={classes.ptext}>Rating</label>
                  <Typography component="legend"></Typography>
                  <StyledRating
                    name="simple-controlled"
                    value={Newrating}
                    onChange={(e, rating) => setNewrating(rating !== null ? rating : 0)}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                  />
                  <button type="submit" disabled={isSubmitting} className={classes.summitButton}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ContentDetail
