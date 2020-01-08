import useClientInvoke from '../hooks/useClientInvoke'
import {ClientResponse, ClientInvokeOptions} from '../types'

export function useAccountDateTimeFormat(
  date: Date | string | number,
): ClientResponse {
  return useClientInvoke(
    ClientInvokeOptions.formatDateAndTime,
    date,
    ClientInvokeOptions.accountTimezone,
  )
}

export default useAccountDateTimeFormat
