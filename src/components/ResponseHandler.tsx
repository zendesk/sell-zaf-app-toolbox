import {useMemo} from 'react'
import memoizeOne from 'memoize-one'

import {FeedbackStatus, Response} from '../types'

type StatusCheck = (response: Response<any>) => boolean

export const isLoading: StatusCheck = (response) => {
  const {feedback} = response
  return feedback ? feedback.status === FeedbackStatus.loading : true
}

export const hasError: StatusCheck = (response) => {
  const {feedback} = response
  return feedback ? feedback.status === FeedbackStatus.error : false
}

export const isEmpty: StatusCheck = (response) => {
  const {data} = response
  return (
    [null, undefined].includes(data) ||
    (typeof data === 'object' && Object.keys(data).length === 0)
  )
}

export function createCheckResponse<T>(responseArray: Array<Response<T>>) {
  return (check: StatusCheck, customCheck?: StatusCheck): boolean => {
    const checkFunc = customCheck ? customCheck : check
    return responseArray.some(checkFunc)
  }
}

const mapResponses = memoizeOne((responseArray: Array<Response<any>>): any[] =>
  responseArray.map((el) => el.data),
)

interface Props<T> {
  children: (data: T[]) => JSX.Element | null
  response?: Response<T>
  responses?: Array<Response<T>>

  loadingView?: JSX.Element | null
  emptyView?: JSX.Element | null
  errorView?: JSX.Element | null

  isEmpty?: StatusCheck
  isLoading?: StatusCheck
  hasError?: StatusCheck
}

export function ResponseHandler({
  children,
  response,
  responses,

  loadingView = null,
  emptyView = null,
  errorView = null,

  isEmpty: customIsEmpty,
  isLoading: customIsLoading,
  hasError: customHasError,
}: Props<any>) {
  const responseArray = useMemo(() => {
    const result = !!response ? [response] : responses
    return result || []
  }, [response, responses])

  const checkResponse = createCheckResponse<any>(responseArray)

  if (checkResponse(isLoading, customIsLoading)) {
    return loadingView
  }

  if (checkResponse(hasError, customHasError)) {
    return errorView
  }

  if (checkResponse(isEmpty, customIsEmpty)) {
    return emptyView
  }

  const data = mapResponses(responseArray)
  return children(data)
}

export default ResponseHandler
