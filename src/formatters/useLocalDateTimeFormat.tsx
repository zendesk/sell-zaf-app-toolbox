import useClientInvoke from '../hooks/useClientInvoke'
import {Response, ClientInvokeOptions} from '../types'

export function useLocalDateTimeFormat(
  date: Date | string | number,
): Response<string> {
  return useClientInvoke(ClientInvokeOptions.formatDateAndTime, date)
}

export default useLocalDateTimeFormat
