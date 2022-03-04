import * as React from 'react'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import useClientInvoke from './useClientInvoke'
import flushPromises from '../test/flushPromises'
import {Client, FeedbackStatus} from '../types'

const Dummy = (prop: any) => <div />

describe('useClientInvoke', () => {
  test('should call client.invoke with proper params', async () => {
    const Wrapper = () => {
      const {data, error, feedback} = useClientInvoke(
        'formatDate',
        new Date('2019-07-22'),
      )
      return <Dummy data={data} error={error} feedback={feedback} />
    }

    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{formatDate: string; errors: object}>((res) =>
            res({formatDate: '22/07/2019', errors: {}}),
          ),
      ),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <Wrapper />
      </ZAFClientContextProvider>,
    )

    expect(client.invoke).toHaveBeenCalledWith(
      'formatDate',
      new Date('2019-07-22'),
    )

    let dummy = tree.find(Dummy)
    let props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.loading})

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    dummy = tree.find(Dummy)
    props = dummy.props()
    expect(props.data).toEqual('22/07/2019')
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.success})

    tree.unmount()
  })

  test('handles error', async () => {
    const Wrapper = () => {
      const {data, error, feedback} = useClientInvoke('non.existing.path')
      return <Dummy data={data} error={error} feedback={feedback} />
    }

    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{errors: object}>((_, reject) =>
            reject({
              errors: {['non.existing.path']: 'Path does not exist'},
            }),
          ),
      ),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <Wrapper />
      </ZAFClientContextProvider>,
    )

    expect(client.invoke).toHaveBeenCalledWith('non.existing.path')

    let dummy = tree.find(Dummy)
    let props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.loading})

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    dummy = tree.find(Dummy)
    props = dummy.props()
    expect(props.data).toEqual(null)
    expect(props.error).toEqual({
      errors: {'non.existing.path': 'Path does not exist'},
    })
    expect(props.feedback).toEqual({status: FeedbackStatus.error})

    tree.unmount()
  })
})
