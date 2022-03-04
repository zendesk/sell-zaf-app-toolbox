import * as React from 'react'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client, FeedbackStatus, Context} from '../types'
import useSellContactEmail from './useSellContactEmail'
import flushPromises from '../test/flushPromises'

const appContext: Context = {
  product: 'sell',
  location: 'person_card',
  instanceGuid: '12-323-4232-122fsfwe',
  account: {
    domain: 'my-sell-subdomain',
    currency: 'USD',
    timezone: 'America/New_York',
    numberFormat: 'us',
    timeFormat: 'hh:mm A',
    dateFormat: 'MM/DD/YYYY',
    decimalSeparator: '.',
  },
  currentUser: {
    id: 12345,
    name: 'John Doe',
    email: 'jdoe@z3nmail.com',
    status: 'active',
    invited: null,
    confirmed: true,
    role: 'admin',
    roles: [],
    createdAt: '2020-11-13T12:35:28Z',
    updatedAt: '2020-11-25T08:14:08Z',
    deletedAt: null,
    phone: null,
    timezone: 'America/New_York',
    reportsTo: null,
    group: null,
    locale: 'en-US',
  },
}

describe('useSellContactEmail', () => {
  const testEmail = 'test@email.com'
  const Dummy = (prop: any) => <div />
  const Wrapper = () => {
    const {data, error, feedback} = useSellContactEmail()
    return <Dummy data={data} error={error} feedback={feedback} />
  }
  const initTree = (client: Client) =>
    mount(
      <ZAFClientContextProvider value={client}>
        <Wrapper />
      </ZAFClientContextProvider>,
    )

  test('should call client.get with location from client context', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      get: jest.fn(
        () =>
          new Promise<{'contact.email': string; errors: {}}>((res) =>
            res({'contact.email': testEmail, errors: {}}),
          ),
      ),
      context: jest.fn(() => new Promise((res) => res(appContext))),
      on: jest.fn,
    }

    const tree = initTree(client)

    expect(client.context).toHaveBeenCalledWith()

    await act(async () => {
      await flushPromises()
    })

    expect(client.get).toHaveBeenCalledWith('contact.email')

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
    expect(props.data).toEqual(testEmail)
    expect(props.error).toEqual(null)
    expect(props.feedback).toEqual({status: FeedbackStatus.success})

    tree.unmount()
  })

  test('should call client.get and receive an error', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      get: jest.fn(
        () =>
          new Promise<{errors: {}}>((_, reject) =>
            reject({
              errors: {['non.existing.path']: 'Path does not exist'},
            }),
          ),
      ),
      context: jest.fn(() => new Promise((res) => res(appContext))),
    }

    const tree = initTree(client)

    expect(client.context).toHaveBeenCalledWith()

    await act(async () => {
      await flushPromises()
    })

    expect(client.get).toHaveBeenCalledWith('contact.email')

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
