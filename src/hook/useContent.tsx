import { useEffect, useState } from 'react'
import { ContentDTO, UpdateContentDTO } from '../types/dto'
import axios from 'axios'

const useContent = (id: string) => {
  const [content, setContentDetail] = useState<ContentDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [updateContent, setUpdate] = useState<UpdateContentDTO | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)

        setContentDetail(res.data)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  const newupdateContent = async (Newcomment: string, Newrating: number) => {
    const token = localStorage.getItem('token')
    const newContentBody: UpdateContentDTO = {
      comment: Newcomment,
      rating: Newrating,
    }

    setIsSubmitting(true)
    try {
      const res = await axios.patch<UpdateContentDTO>(
        `https://api.learnhub.thanayut.in.th/content/${id}`,
        newContentBody,
        {
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        },
      )
      setUpdate(res.data)
    } catch (err) {
      throw err
    } finally {
      setIsSubmitting(false)
    }
  }
  const deleteContent = async () => {
    const token = localStorage.getItem('token')
    setIsSubmitting(true)
    try {
      const res = await axios.delete<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      })
      setUpdate(res.data)
    } catch (err) {
      throw err
    } finally {
      setIsSubmitting(false)
    }
  }

  return { content, isLoading, error, newupdateContent, isSubmitting, deleteContent }
}

export default useContent
