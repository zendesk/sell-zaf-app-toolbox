import * as React from 'react'
import {mount} from 'enzyme'

import {FeedbackStatus, Response} from '../types'
import ResponseHandler, {
  hasError,
  isLoading,
  isEmpty,
  createCheckResponse,
} from './ResponseHandler'

const mockData = {
  mock: 'data',
}

const mockResponse: Response<{}> = {
  data: mockData,
  error: {},
  feedback: {
    status: FeedbackStatus.success,
    error: null,
  },
}

const setFeedbackStatus = (status: FeedbackStatus): Response<{}> => ({
  ...mockResponse,
  feedback: {...mockResponse.feedback, status},
})

describe('ResponseHandler', () => {
  const Loading = () => <div>Loading Test</div>
  const Error = () => <div>Error Test</div>
  const Content = ({children, ...rest}: {children?: any; id?: string}) => (
    <div {...rest}>{children ? children : 'Content'}</div>
  )
  const Empty = () => <div>Empty Test</div>

  test('should render loading screen when response has loading status', () => {
    const response = setFeedbackStatus(FeedbackStatus.loading)

    const component = mount(
      <ResponseHandler
        response={response}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(true)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should render error screen when response has error status', () => {
    const response = setFeedbackStatus(FeedbackStatus.error)

    const component = mount(
      <ResponseHandler
        response={response}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(true)
  })

  test('should render content screen when response has success status', () => {
    const response = setFeedbackStatus(FeedbackStatus.success)

    const component = mount(
      <ResponseHandler
        response={response}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Content).exists()).toBe(true)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should render loading screen when one of responses has loading status', () => {
    const responses = [FeedbackStatus.loading, FeedbackStatus.success].map(
      (status) => setFeedbackStatus(status),
    )

    const component = mount(
      <ResponseHandler
        responses={responses}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(true)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should render error screen when one of responses has error status', () => {
    const responses = [FeedbackStatus.error, FeedbackStatus.success].map(
      (status) => setFeedbackStatus(status),
    )

    const component = mount(
      <ResponseHandler
        responses={responses}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(true)
  })

  test('should render empty state when response is empty', () => {
    const response = {...mockResponse, data: null}
    const component = mount(
      <ResponseHandler
        response={response}
        errorView={<Error />}
        loadingView={<Loading />}
        emptyView={<Empty />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Empty).exists()).toBe(true)
    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should render empty state when one of responses is empty', () => {
    const responses = [mockResponse, {...mockResponse, data: null}]
    const component = mount(
      <ResponseHandler
        responses={responses}
        errorView={<Error />}
        loadingView={<Loading />}
        emptyView={<Empty />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Empty).exists()).toBe(true)
    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should render empty state when custom check returns true', () => {
    const customDataStructure = {is: {it: {empty: true}}}
    const responses = [
      mockResponse,
      {...mockResponse, data: customDataStructure},
    ]
    const customIsEmpty = (
      response: Response<typeof customDataStructure>,
    ): boolean => {
      return !!(
        response &&
        response.data &&
        response.data.is &&
        response.data.is.it &&
        response.data.is.it.empty
      )
    }
    const component = mount(
      <ResponseHandler
        responses={responses}
        isEmpty={customIsEmpty}
        errorView={<Error />}
        loadingView={<Loading />}
        emptyView={<Empty />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Empty).exists()).toBe(true)
    expect(component.find(Content).exists()).toBe(false)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should render content screen when all responses have success status', () => {
    const responses = [FeedbackStatus.success, FeedbackStatus.success].map(
      (status) => setFeedbackStatus(status),
    )

    const component = mount(
      <ResponseHandler
        responses={responses}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {() => <Content />}
      </ResponseHandler>,
    )

    expect(component.find(Content).exists()).toBe(true)
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should pass response data as first argument of children function', () => {
    const response = {
      data: {some: 'mock', data: 'for testing'},
      feedback: {status: FeedbackStatus.success},
      error: null,
    }
    const component = mount(
      <ResponseHandler
        response={response}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {([data]) => <Content>{JSON.stringify(data)}</Content>}
      </ResponseHandler>,
    )

    expect(component.find(Content).text()).toBe(JSON.stringify(response.data))
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should pass data from responses as an array in first argument', () => {
    const response = {
      ...mockResponse,
      data: {some: 'mock', data: 'for testing'},
    }

    const anotherResponse = {
      ...mockResponse,
      data: {some: 'testing', data: 'forTesting'},
    }

    const responses = [response, anotherResponse]

    const component = mount(
      <ResponseHandler
        responses={responses}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {([data1, data2]) => (
          <>
            <Content id="content1">{JSON.stringify(data1)}</Content>
            <Content id="content2">{JSON.stringify(data2)}</Content>
          </>
        )}
      </ResponseHandler>,
    )

    expect(
      component
        .find('#content1')
        .find('div')
        .text(),
    ).toBe(JSON.stringify(response.data))
    expect(
      component
        .find('#content2')
        .find('div')
        .text(),
    ).toBe(JSON.stringify(anotherResponse.data))
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })

  test('should support different data types in response', () => {
    const response = {
      ...mockResponse,
      data: {some: 'mock', data: 'for testing'},
    }

    const anotherResponse = {
      ...mockResponse,
      data: 'mcok',
    }

    const responses = [response, anotherResponse]

    const component = mount(
      <ResponseHandler
        responses={responses}
        errorView={<Error />}
        loadingView={<Loading />}
      >
        {([data1, data2]) => (
          <>
            <Content id="content1">{JSON.stringify(data1)}</Content>
            <Content id="content2">{JSON.stringify(data2)}</Content>
          </>
        )}
      </ResponseHandler>,
    )

    expect(
      component
        .find('#content1')
        .find('div')
        .text(),
    ).toBe(JSON.stringify(response.data))
    expect(
      component
        .find('#content2')
        .find('div')
        .text(),
    ).toBe(JSON.stringify(anotherResponse.data))
    expect(component.find(Loading).exists()).toBe(false)
    expect(component.find(Error).exists()).toBe(false)
  })
})

describe('isLoading', () => {
  test('should return true if feedback is null', () => {
    const response = {...mockResponse, feedback: null}
    expect(isLoading(response)).toBe(true)
  })

  test('should return true if response has status loading', () => {
    const response = setFeedbackStatus(FeedbackStatus.loading)
    expect(isLoading(response)).toBe(true)
  })

  test('should return false if response has error or success status', () => {
    const [successResponse, errorResponse] = [
      FeedbackStatus.success,
      FeedbackStatus.error,
    ].map((status) => setFeedbackStatus(status))

    expect(isLoading(successResponse)).toBe(false)
    expect(isLoading(errorResponse)).toBe(false)
  })
})

describe('hasError', () => {
  test('should return false if feedback is null', () => {
    const response = {...mockResponse, feedback: null}
    expect(hasError(response)).toBe(false)
  })

  test('should return true if response has error feedback status', () => {
    const response = setFeedbackStatus(FeedbackStatus.error)
    expect(hasError(response)).toBe(true)
  })

  test('should return false if response status has success or loading status', () => {
    const [successResponse, loadingResponse] = [
      FeedbackStatus.success,
      FeedbackStatus.loading,
    ].map((status) => setFeedbackStatus(status))

    expect(hasError(successResponse)).toBe(false)
    expect(hasError(loadingResponse)).toBe(false)
  })
})

describe('isEmpty', () => {
  test('should return true if data is null, undefined or empty object', () => {
    expect(isEmpty({...mockResponse, data: null})).toBe(true)
    expect(isEmpty({...mockResponse, data: undefined})).toBe(true)
    expect(isEmpty({...mockResponse, data: {}})).toBe(true)
  })

  test('should return false if data not null nor undefined', () => {
    expect(isEmpty({...mockResponse, data: 0})).toBe(false)
    expect(isEmpty({...mockResponse, data: ''})).toBe(false)
    expect(isEmpty({...mockResponse, data: 'truthy'})).toBe(false)
    expect(
      isEmpty({
        ...mockResponse,
        data: {object: 'like this', will: 'return false'},
      }),
    ).toBe(false)
  })
})

describe('checkResponse', () => {
  const generateResponse = (
    data: number,
    error = null,
    feedback = null,
  ): Response<number> => ({
    data,
    error,
    feedback,
  })
  const mockResponses: Array<Response<number>> = Array.from({length: 5}).map(
    (_, index: number) => generateResponse(index),
  )
  const checkResponse = createCheckResponse(mockResponses)

  test('check function should be called for each response until condition is met', () => {
    const mockCheck = jest.fn(() => false)
    expect(checkResponse(mockCheck)).toBe(false)
    expect(mockCheck.mock.calls.length).toBe(5)

    const anotherMockCheck = jest.fn(({data}) => data === 2)
    expect(checkResponse(anotherMockCheck)).toBe(true)
    expect(anotherMockCheck.mock.calls.length).toBe(3)
  })

  test('should call customCheck if it is present and skip default check', () => {
    const mockCheck = jest.fn(() => false)
    const mockCustomCheck = jest.fn(() => false)

    expect(checkResponse(mockCheck, mockCustomCheck)).toBe(false)
    expect(mockCheck.mock.calls.length).toBe(0)
    expect(mockCustomCheck.mock.calls.length).toBe(5)

    const anotherCheck = jest.fn(() => false)
    const anotherCustomCheck = jest.fn(({data}) => data === 2)
    expect(checkResponse(anotherCheck, anotherCustomCheck)).toBe(true)
    expect(anotherCheck.mock.calls.length).toBe(0)
    expect(anotherCustomCheck.mock.calls.length).toBe(3)

    const check = jest.fn(() => true)
    const customCheck = jest.fn(({data}) => data === 2)
    expect(checkResponse(check, customCheck)).toBe(true)
    expect(check.mock.calls.length).toBe(0)
    expect(customCheck.mock.calls.length).toBe(3)
  })
})
