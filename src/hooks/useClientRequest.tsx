import {useContext, useEffect, useState} from 'react'

import {Feedback, FeedbackStatus, Response} from '../types'
import {ZAFClientContext} from '../providers/ZAFClientContext'

interface Options<T> {
  [key: string]: any

  transformResponse?: (response: T, currentData: T | null) => T
}

const cache: {[key: string]: any} = {}

export function useClientRequest<T>(
  url: string,
  options: Options<T>,
  dependencies?: any[],
  cacheKey?: string,
): Response<T> {
  const [data, setData] = useState<T | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [error, setError] = useState<object | null>(null)

  const client = useContext(ZAFClientContext)

  const performRequest = async () => {
    setFeedback({status: FeedbackStatus.loading})
    try {
      if (!client) {
        throw new Error('You forgot to use ZAFClientContext')
      }
      if (dependencies && dependencies.some((item: any) => !item)) {
        return
      }

      let clientRequest: Promise<T>

      if (cacheKey && cache[cacheKey]) {
        clientRequest = cache[cacheKey]
      } else {
        clientRequest = client.request<any, T>({
          url,
          ...options,
        })
        if (cacheKey) cache[cacheKey] = clientRequest
      }

      const response = await clientRequest
      setData(
        options.transformResponse
          ? options.transformResponse(response, data)
          : response,
      )
      setFeedback({status: FeedbackStatus.success})
    } catch (e) {
      if (cacheKey) delete cache[cacheKey]
      setError(e)
      setFeedback({status: FeedbackStatus.error})
    }
  }

  const deps = dependencies ? dependencies : []

  useEffect(() => {
    performRequest()
  }, [url, cacheKey, ...deps])

  return {
    data,
    feedback,
    error,
  }
}

export default useClientRequest
