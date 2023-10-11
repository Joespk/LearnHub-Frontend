import { FormEvent, useState } from 'react'
import useContents from '../hook/useContents'
import classes from './Home.module.css'
import { useNavigate } from 'react-router'
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

//Create Feature
const CreateContent = () => {
  const { isSubmitting, createContent } = useContents()
  const navigate = useNavigate()
  const [NewvideoUrl, setNewvideoUrl] = useState<string>('')
  const [Newcomment, setNewcomment] = useState<string>('')
  const [Newrating, setNewrating] = useState<number>(0)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(NewvideoUrl, Newcomment, Newrating)

    try {
      await createContent(NewvideoUrl, Newcomment, Newrating)

      setNewvideoUrl('')
      setNewcomment('')
      setNewrating(0)

      navigate('/')
    } catch (err) {
      console.error('Cannot post content')
    }
  }

  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>VideoURL</label>
        <input type="text" value={NewvideoUrl} onChange={(e) => setNewvideoUrl(e.target.value)} required />
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

export default CreateContent
