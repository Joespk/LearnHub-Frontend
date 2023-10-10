import { useNavigate, useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import { FormEvent, useState } from 'react'
import classes from './Home.module.css'

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
        <input type="number" value={Newrating} onChange={(e) => setNewrating(e.target.valueAsNumber)} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default EditDetail
