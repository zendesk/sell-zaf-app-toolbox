import {useCurrencyFormat} from './useCurrencyFormat'

export const useFormattedCurrency = (
  amount: number | string,
  currency?: string,
): string => {
  const {data: formattedCurrency, error} = useCurrencyFormat(amount, currency)
  if (error) {
    return currency ? `${currency} ${amount}` : `${amount}`
  }
  return formattedCurrency || ''
}

export default useFormattedCurrency
