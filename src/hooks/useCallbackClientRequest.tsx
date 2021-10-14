import {useState} from 'react'

import {CallbackRequestResponse, Feedback, FeedbackStatus} from '../types'
import {useZAFClient} from '../providers/ZAFClientContext'

export interface Options<T> {
  [key: string]: any

  transformResponse?: (response: T, currentData: T | null) => T
  skip?: boolean
}

const cache: {[key: string]: any} = {}

export function useCallbackClientRequest<T>(
  url: string,
  options: Options<T> = {skip: false},
  dependencies?: any[],
  cacheKey?: string,
): CallbackRequestResponse<T> {
  const client = useZAFClient()
  const [data, setData] = useState<T | null>(null)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [error, setError] = useState<object | null>(null)

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
        const clientOptions = {
          url,
          ...requestOptions,
          headers: {Authorization: 'Bearer {{setting.access_token}}'},
          secure: true,
        }

        clientRequest = client.request<any, T>(clientOptions)
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

  return {
    performRequest,
    data,
    feedback,
    error,
  }
}

export default useCallbackClientRequest
