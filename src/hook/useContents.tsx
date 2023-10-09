import { useState, useEffect } from 'react'
import { ContentDTO, ContentsDTO } from '../types/dto'
import axios from 'axios'

const UseContents = () => {
  const [contents, setContents] = useState<ContentsDTO | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')
        setContents(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return { contents }
}

export default UseContents
