import {useAccountDateFormat} from './useAccountDateFormat'

const formatDateToDefault = (date: Date) => {
  return date.toLocaleDateString()
}

export const useFormattedDate = (date: Date | string | number): string => {
  const {data, error} = useAccountDateFormat(date)
  let formattedDate = data

  if (error) {
    formattedDate = formatDateToDefault(
      date instanceof Date ? date : new Date(date),
    )
  }

  return formattedDate || ''
}

export default useFormattedDate
