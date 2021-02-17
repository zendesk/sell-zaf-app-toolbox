import useClientInvoke from '../hooks/useClientInvoke'
import {Response, ClientInvokeOptions} from '../types'

export function useCurrencyFormat(
  amount: number | string,
  currency?: string,
): Response<string> {
  return useClientInvoke(ClientInvokeOptions.formatCurrency, amount, currency)
}

export default useCurrencyFormat
