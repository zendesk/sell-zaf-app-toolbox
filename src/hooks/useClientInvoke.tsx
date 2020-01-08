import {useState, useContext, useEffect} from 'react'

import {ZAFClientContext} from '../providers/ZAFClientContext'
import {Feedback, FeedbackStatus} from '../types'

export function useClientInvoke<T>(
  name: string,
  ...options: any[]
): {data: T | null; error: object | null; feedback: Feedback | null} {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<any | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const client = useContext(ZAFClientContext)

  const invokeFunc = async () => {
    setFeedback({status: FeedbackStatus.loading})
    try {
      if (!client) {
        throw new Error('You forgot to use ZAFClientContext')
      }
      const result = await client.invoke<{errors: object}>(name, ...options)
      setData(result[name])
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
    invokeFunc()
  }, [])

  return {data, error, feedback}
}

export default useClientInvoke
