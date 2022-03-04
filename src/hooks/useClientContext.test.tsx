import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {mount, ReactWrapper} from 'enzyme'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client, ClientContextResponse, Context, FeedbackStatus} from '../types'
import useClientContext from './useClientContext'

describe('useClientContext', () => {
  let result: ClientContextResponse
  const Wrapper = ({
    options = {},
    deps = [],
  }: {
    options?: any
    deps?: any[]
    cacheKey?: string
  }) => {
    result = useClientContext(deps, options)
    return null
  }

  it('should call client.context', async () => {
    // @ts-ignore
    const client: Client = {
      context: jest.fn(async () => {
        const context = {location: 'ticket_sidebar'} as Context
        return context
      }),
    }
    let tree: ReactWrapper

    await act(async () => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper />
        </ZAFClientContextProvider>,
      )
    })

    expect(client.context).toBeCalled()
    expect(result.data).toEqual({location: 'ticket_sidebar'})
    expect(result.feedback).toEqual({status: FeedbackStatus.success})

    act(() => {
      tree.unmount()
    })
  })

  it('should throw an error if used outside ZAFClientContext', async () => {
    let tree: ReactWrapper

    act(() => {
      tree = mount(<Wrapper />)
    })

    expect(result.data).toBeNull()
    expect(result.feedback).toEqual({status: FeedbackStatus.error})
    expect(result.error).not.toBeNull()

    act(() => {
      tree.unmount()
    })
  })

  it('should not call client.context if skip is set to true', async () => {
    // @ts-ignore
    const client: Client = {
      context: jest.fn(async () => {
        const context = {location: 'ticket_sidebar'} as Context
        return context
      }),
    }

    let tree: ReactWrapper

    act(() => {
      tree = mount(
        <ZAFClientContextProvider value={client}>
          <Wrapper options={{skip: true}} />
        </ZAFClientContextProvider>,
      )
    })

    expect(client.context).not.toHaveBeenCalled()
    expect(result.data).toBeNull()
    expect(result.feedback).toBeNull()
    expect(result.error).toBeNull()

    act(() => {
      tree.unmount()
    })
  })
})
