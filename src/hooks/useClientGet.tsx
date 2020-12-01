import {useContext, useEffect, useState} from 'react'

import {ZAFClientContext} from '../providers/ZAFClientContext'
import {Feedback, FeedbackStatus, Response} from '../types'

interface Options {
  skip?: boolean
}

export function useClientGet<T>(
  path: string,
  dependencies: any[] = [],
  options: Options = {skip: false},
): Response<T> {
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
    if (!options.skip) {
      getData()
    }
  }, [path, ...dependencies])

  return {data, error, feedback}
}

export default useClientGet
