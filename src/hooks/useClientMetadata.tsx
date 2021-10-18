import {useEffect, useState} from 'react'

import {
  ClientMetadataResponse,
  Feedback,
  FeedbackStatus,
  Metadata,
} from '../types'
import useCounter from './useCounter'
import {useZAFClient} from '../providers/ZAFClientContext'

interface Options {
  skip?: boolean
}

export function useClientMetadata<T>(
  dependencies: any[] = [],
  options: Options = {skip: false},
): ClientMetadataResponse<T> {
  const client = useZAFClient()
  const [data, setData] = useState<Metadata<T> | null>(null)
  const [error, setError] = useState<any | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const {counter, increment: refetch} = useCounter()

  const getData = async () => {
    setFeedback({status: FeedbackStatus.loading})
    try {
      if (!client) {
        throw new Error('You forgot to use ZAFClientContext')
      }
      const result = await client.metadata<T>()
      setData(result)
      setFeedback({status: FeedbackStatus.success})
    } catch (e) {
      setError(e)
      setFeedback({status: FeedbackStatus.error})
    }
  }
  useEffect(() => {
    if (!options.skip) {
      getData()
    }
  }, [counter, ...dependencies])

  return {data, error, feedback, refetch}
}

export default useClientMetadata
