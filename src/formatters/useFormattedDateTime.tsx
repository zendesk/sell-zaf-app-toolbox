import {useAccountDateTimeFormat} from './useAccountDateTimeFormat'

const formatDateTimeToDefault = (date: Date) => {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}

export const useFormattedDateTime = (date: Date | string | number): string => {
  const {data, error} = useAccountDateTimeFormat(date)
  let formattedDateTime = data

  if (error) {
    formattedDateTime = formatDateTimeToDefault(
      date instanceof Date ? date : new Date(date),
    )
  }

  return formattedDateTime || ''
}

export default useFormattedDateTime
