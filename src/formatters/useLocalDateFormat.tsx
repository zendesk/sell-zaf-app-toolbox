import useClientInvoke from '../hooks/useClientInvoke'
import {Response, ClientInvokeOptions} from '../types'

export function useLocalDateFormat(
  date: Date | string | number,
): Response<string> {
  return useClientInvoke(ClientInvokeOptions.formatDate, date)
}

export default useLocalDateFormat
