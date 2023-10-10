import { FormEvent, useState } from 'react'
import useContents from '../hook/useContents'
import classes from './Home.module.css'
import { useNavigate } from 'react-router'

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
        <input type="number" value={Newrating} onChange={(e) => setNewrating(e.target.valueAsNumber)} required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default CreateContent
