import useClientInvoke from '../hooks/useClientInvoke'
import {ClientResponse, ClientInvokeOptions} from '../types'

export function useAccountDateFormat(
  date: Date | string | number,
): ClientResponse {
  return useClientInvoke(
    ClientInvokeOptions.formatDate,
    date,
    ClientInvokeOptions.accountTimezone,
  )
}

export default useAccountDateFormat
