import useClientInvoke from '../hooks/useClientInvoke'
import {Response, ClientInvokeOptions} from '../types'

export function useAccountDateFormat(
  date: Date | string | number,
): Response<string> {
  return useClientInvoke(
    ClientInvokeOptions.formatDate,
    date,
    ClientInvokeOptions.accountTimezone,
  )
}

export default useAccountDateFormat
