import useClientInvoke from '../hooks/useClientInvoke'
import {Response, ClientInvokeOptions} from '../types'

export function useAccountDateTimeFormat(
  date: Date | string | number,
): Response<string> {
  return useClientInvoke(
    ClientInvokeOptions.formatDateAndTime,
    date,
    ClientInvokeOptions.accountTimezone,
  )
}

export default useAccountDateTimeFormat
