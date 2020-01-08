import * as React from 'react'
import {mount} from 'enzyme'

import useClientRequest from './useClientRequest'
import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import flushPromises from '../test/flushPromises'
import {Client, FeedbackStatus} from '../types'

const Dummy = (prop: any) => <div />

const Wrapper = () => {
  const options = {}
  const cacheKey = 'myKey'
  const {data, error, feedback} = useClientRequest(
    '/fake-url',
    options,
    [],
    cacheKey,
  )
  return <Dummy data={data} error={error} feedback={feedback} />
}

const WrapperWithDeps = (props: any) => {
  const options = {}
  const {data, error, feedback} = useClientRequest(
    '/fake-url',
    options,
    props.deps,
  )
  return <Dummy data={data} error={error} feedback={feedback} />
}

describe('useClientRequest', () => {
  test('should handle error', async () => {
    const errorMessage = 'Request error'
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      request: jest.fn(() => {
        throw Error(errorMessage)
      }),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <Wrapper />
      </ZAFClientContextProvider>,
    )

    const dummy = tree.find(Dummy).first()
    const props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error.message).toEqual(errorMessage)
    expect(props.feedback).toEqual({status: FeedbackStatus.error})

    expect(client.request).toHaveBeenCalledWith({url: '/fake-url'})
    expect(client.request).toHaveBeenCalledTimes(1)

    tree.unmount()
  })

  test('should call client.request with proper params only once if cache key the same', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      request: jest.fn(() => new Promise((res) => res({id: 123}))),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <div>
          <Wrapper />
          <Wrapper />
        </div>
      </ZAFClientContextProvider>,
    )

    let dummy = tree.find(Dummy).first()
    let props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.loading})

    let dummy2 = tree.find(Dummy).last()
    let props2 = dummy2.props()
    expect(props2).toEqual(props)

    await flushPromises()
    tree.update()

    dummy = tree.find(Dummy).first()
    props = dummy.props()
    expect(props.data).toEqual({id: 123})
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.success})

    dummy2 = tree.find(Dummy).last()
    props2 = dummy2.props()
    expect(props2).toEqual(props)

    expect(client.request).toHaveBeenCalledWith({url: '/fake-url'})
    expect(client.request).toHaveBeenCalledTimes(1)

    tree.unmount()
  })

  test('shouldn\t call client.request with falsy dependencies', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      request: jest.fn(),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <WrapperWithDeps deps={[undefined]} />
      </ZAFClientContextProvider>,
    )

    await flushPromises()
    tree.update()

    const dummy = tree.find(Dummy).first()
    const props = dummy.props()
    expect(props.data).toEqual(null)
    expect(client.request).not.toHaveBeenCalled()

    tree.unmount()
  })

  test('should call client.request when all dependencies change to truthy', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      request: jest.fn(() => new Promise((res) => res({id: 123}))),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <WrapperWithDeps deps={[undefined]} />
      </ZAFClientContextProvider>,
    )

    await flushPromises()
    tree.update()

    expect(client.request).not.toHaveBeenCalled()

    tree.setProps({children: <WrapperWithDeps deps={[true]} />})

    await flushPromises()
    tree.update()

    const dummy = tree.find(Dummy).first()
    const props = dummy.props()

    expect(props.data).toEqual({id: 123})
    expect(client.request).toHaveBeenCalledWith({url: '/fake-url'})

    tree.unmount()
  })
})
