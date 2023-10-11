import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import { FormEvent, useState } from 'react'
import classes from './Home.module.css'
import { Rating, Typography, styled } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

//icon rating
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

// Edit Feature
const EditDetail = () => {
  const { id } = useParams()
  const { isSubmitting, newupdateContent } = useContent(id || '1')
  const [Newcomment, setNewcomment] = useState<string>('')
  const [Newrating, setNewrating] = useState<number>(0)
  const navigate = useNavigate()
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

  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>Comment</label>
        <input type="text" value={Newcomment} onChange={(e) => setNewcomment(e.target.value)} required />
        <label>Rating</label>
        <Typography component="legend"></Typography>
        <StyledRating
          name="simple-controlled"
          value={Newrating}
          onChange={(e, rating) => setNewrating(rating !== null ? rating : 0)}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default EditDetail
