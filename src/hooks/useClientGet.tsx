import {useContext, useEffect, useState} from 'react'

import {ZAFClientContext} from '../providers/ZAFClientContext'
import {Feedback, FeedbackStatus, Response} from '../types'

export function useClientGet<T>(path: string): Response<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<any | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const client = useContext(ZAFClientContext)

  const getData = async () => {
    setFeedback({status: FeedbackStatus.loading})
    try {
      if (!client) {
        throw new Error('You forgot to use ZAFClientContext')
      }
      const result = await client.get<{errors: object}>(path)
      setData(result[path])
      setFeedback({status: FeedbackStatus.success})
      if (result.errors && Object.keys(result.errors).length > 0) {
        setError(result.errors)
        setFeedback({status: FeedbackStatus.error})
      }
    } catch (e) {
      setError(e)
      setFeedback({status: FeedbackStatus.error})
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return {data, error, feedback}
}

export default useClientGet
