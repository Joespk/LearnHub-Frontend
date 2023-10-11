import axios from 'axios'
import { useState } from 'react'
import { RegisterDTO } from '../types/dto'

const useRegister = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const register = async (Newusername: string, Newpassword: string, Newname: string) => {
    const newUserBody: RegisterDTO = {
      username: Newusername,
      password: Newpassword,
      name: Newname,
    }
    setIsSubmitting(true)
    try {
      const res = await axios.post<RegisterDTO>('https://api.learnhub.thanayut.in.th/user', newUserBody, {
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(res.data)
    } catch (err) {
      alert('Username already exists')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, register }
}

export default useRegister
