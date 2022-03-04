import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {mount, ReactWrapper} from 'enzyme'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {CallbackRequestResponse, Client, FeedbackStatus} from '../types'
import useCallbackClientRequest from './useCallbackClientRequest'

describe('useCallbackClientRequest', () => {
  let result: CallbackRequestResponse<any>
  const Wrapper = ({
    options = {},
    deps = [],
    cacheKey,
  }: {
    options?: any
    deps?: any[]
    cacheKey?: string
  }) => {
    result = useCallbackClientRequest('/fake-url', options, deps, cacheKey)
    return null
  }

  it('should not execute upon rendering', async () => {
    // @ts-ignore
    const client: Client = {
      request: jest.fn(),
    }
    let tree: ReactWrapper

    act(() => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper />
        </ZAFClientContextProvider>,
      )
    })

    expect(client.request).not.toHaveBeenCalled()
    expect(result.data).toBeNull()
    expect(result.feedback).toBeNull()
    expect(result.error).toBeNull()

    act(() => {
      tree.unmount()
    })
  })

  it('should send options on client.request', async () => {
    // @ts-ignore
    const client: Client = {
      request: jest.fn(),
    }
    let tree: ReactWrapper

    await act(async () => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper options={{type: 'POST', data: {id: 123}}} />
        </ZAFClientContextProvider>,
      )

      await result.performRequest()
    })

    expect(client.request).toHaveBeenCalledWith(
      expect.objectContaining({
        url: '/fake-url',
        type: 'POST',
        data: {id: 123},
      }),
    )
    expect(result.data).not.toBeNull()
    expect(result.feedback).toEqual({status: FeedbackStatus.success})
    expect(result.error).toBeNull()

    act(() => {
      tree.unmount()
    })
  })

  it('should handle error', async () => {
    // @ts-ignore
    const client: Client = {
      request: jest.fn(() => {
        throw Error()
      }),
    }
    let tree: ReactWrapper

    act(() => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper />
        </ZAFClientContextProvider>,
      )

      result.performRequest()
    })

    expect(client.request).toHaveBeenCalled()
    expect(result.data).toBeNull()
    expect(result.error).not.toBeNull()
    expect(result.feedback).toEqual({status: FeedbackStatus.error})

    act(() => {
      tree.unmount()
    })
  })

  it('should throw an error if used outside ZAFClientContext', async () => {
    let tree: ReactWrapper

    act(() => {
      tree = mount(<Wrapper />)

      result.performRequest()
    })

    expect(result.error).not.toBeNull()
    expect(result.feedback).toEqual({status: FeedbackStatus.error})
    expect(result.data).toBeNull()

    act(() => {
      tree.unmount()
    })
  })

  it("shouldn't call client.request when execute callback function with falsy dependencies", async () => {
    // @ts-ignore
    const client: Client = {
      request: jest.fn(),
    }
    let tree: ReactWrapper

    act(() => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper deps={[undefined]} />
        </ZAFClientContextProvider>,
      )

      result.performRequest()
    })

    expect(result.data).toEqual(null)
    expect(client.request).not.toHaveBeenCalled()

    act(() => {
      tree.unmount()
    })
  })

  it('should call client.request when execute callback function with dependency true', async () => {
    // @ts-ignore
    const client: Client = {
      request: jest.fn(),
    }
    let tree: ReactWrapper

    await act(async () => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper deps={[true]} />
        </ZAFClientContextProvider>,
      )

      await result.performRequest()
    })

    expect(client.request).toHaveBeenCalled()

    act(() => {
      tree.unmount()
    })
  })
})
