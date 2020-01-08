import useClientInvoke from '../hooks/useClientInvoke'
import {ClientResponse, ClientInvokeOptions} from '../types'

export function useLocalDateTimeFormat(
  date: Date | string | number,
): ClientResponse {
  return useClientInvoke(ClientInvokeOptions.formatDateAndTime, date)
}

export default useLocalDateTimeFormat
