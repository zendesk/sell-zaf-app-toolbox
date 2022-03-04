import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {mount, ReactWrapper} from 'enzyme'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {
  Client,
  ClientMetadataResponse,
  FeedbackStatus,
  Metadata,
} from '../types'
import useClientMetadata from './useClientMetadata'

describe('useClientMetadata', () => {
  let result: ClientMetadataResponse<any>
  const Wrapper = ({
    options = {},
    deps = [],
  }: {
    options?: any
    deps?: any[]
    cacheKey?: string
  }) => {
    result = useClientMetadata(deps, options)
    return null
  }

  it('should call client.metadata', async () => {
    // @ts-ignore
    const client: Client = {
      metadata: jest.fn(async () => {
        const metadata = {name: 'TestMetadata'} as Metadata<any>
        return metadata
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

    expect(client.metadata).toBeCalled()
    expect(result.data).toEqual({name: 'TestMetadata'})
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

    expect(result.error).not.toBeNull()
    expect(result.data).toBeNull()
    expect(result.feedback).toEqual({status: FeedbackStatus.error})

    act(() => {
      tree.unmount()
    })
  })

  it('should not call client.metadata if skip is set to true', async () => {
    // @ts-ignore
    const client: Client = {
      metadata: jest.fn(async () => {
        const context = {name: 'TestMetadata'} as Metadata<any>
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

    expect(result.error).toBeNull()
    expect(client.metadata).not.toHaveBeenCalled()
    expect(result.data).toBeNull()
    expect(result.feedback).toBeNull()

    act(() => {
      tree.unmount()
    })
  })
})
