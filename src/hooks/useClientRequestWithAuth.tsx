import {Response} from '../types'
import useClientRequest, {Options} from './useClientRequest'

/* parameter of type 'oauth' has to be added to manifest.json
  {
    "name" : "access_token",
    "type": "oauth"
  }
*/
export function useClientRequestWithAuth<T extends {}>(
  url: string,
  options: Options<T> = {skip: false},
  dependencies?: any[],
  cacheKey?: string,
): Response<T> {
  const response = useClientRequest<T>(
    url,
    {
      secure: true,
      dataType: 'json',
      contentType: 'application/json',
      headers: {authorization: 'Bearer {{setting.access_token}}'},
      ...options,
    },
    dependencies,
    cacheKey,
  )
  return response
}

export default useClientRequestWithAuth
