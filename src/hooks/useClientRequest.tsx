import {useContext, useEffect, useState} from 'react'

import {Feedback, FeedbackStatus, Response} from '../types'
import {ZAFClientContext} from '../providers/ZAFClientContext'
import useCounter from './useCounter'

export interface Options<T> {
  [key: string]: any

  transformResponse?: (response: T, currentData: T | null) => T
  skip?: boolean
}

const cache: {[key: string]: any} = {}

export function useClientRequest<T>(
  url: string,
  options: Options<T> = {skip: false},
  dependencies?: any[],
  cacheKey?: string,
): Response<T> {
  const client = useContext(ZAFClientContext)
  const [data, setData] = useState<T | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [error, setError] = useState<object | null>(null)
  const {counter, increment: refetch} = useCounter()

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
      const {transformResponse, skip, ...requestOptions} = options

      if (cacheKey && cache[cacheKey]) {
        clientRequest = cache[cacheKey]
      } else {
        clientRequest = client.request<any, T>({
          url,
          ...requestOptions,
        })
        if (cacheKey) cache[cacheKey] = clientRequest
      }

      const response = await clientRequest
      setData(transformResponse ? transformResponse(response, data) : response)
      setFeedback({status: FeedbackStatus.success})
    } catch (e) {
      if (cacheKey) delete cache[cacheKey]
      // prevents by keeping data from previous request
      // which sometimes caused that ResponseHandler acted unexpectedly
      setData(null)
      setError(e)
      setFeedback({status: FeedbackStatus.error})
    }
  }

  const deps = dependencies ? dependencies : []

  useEffect(() => {
    if (!options.skip) {
      performRequest()
    }
  }, [url, counter, cacheKey, ...deps])

  return {
    data,
    feedback,
    error,
    refetch,
  }
}

export default useClientRequest
