import useClientInvoke from '../hooks/useClientInvoke'
import {ClientResponse, ClientInvokeOptions} from '../types'

export function useLocalDateFormat(
  date: Date | string | number,
): ClientResponse {
  return useClientInvoke(ClientInvokeOptions.formatDate, date)
}

export default useLocalDateFormat
