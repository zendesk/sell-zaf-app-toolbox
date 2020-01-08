import {Response} from '../types'
import useClientRequest from './useClientRequest'

export function useClientRequestWithAuth<T extends {}>(
  url: string,
  options: object = {},
  dependencies?: any[],
  cacheKey?: string,
): Response<T> {
  const response = useClientRequest<T>(
    url,
    {
      oauth: true,
      dataType: 'json',
      contentType: 'application/json',
      headers: {authorization: 'Bearer {{oauth.access_token}}'},
      ...options,
    },
    dependencies,
    cacheKey,
  )
  return response
}

export default useClientRequestWithAuth
