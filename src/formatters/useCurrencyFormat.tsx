import useClientInvoke from '../hooks/useClientInvoke'
import {ClientResponse, ClientInvokeOptions} from '../types'

export function useCurrencyFormat(
  amount: number | string,
  currency?: string,
): ClientResponse {
  return useClientInvoke(ClientInvokeOptions.formatCurrency, amount, currency)
}

export default useCurrencyFormat
