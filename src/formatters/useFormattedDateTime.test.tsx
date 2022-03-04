import * as React from 'react'
import {mount, ReactWrapper} from 'enzyme'

import useFormattedDateTime from './useFormattedDateTime'
import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client, ClientInvokeOptions} from '../types'
import flushPromises from '../test/flushPromises'
import {act} from "react-dom/test-utils";

const date = new Date('2019-07-22 09:30:56')

const formatDefault = (datetime: Date) =>
  `${datetime.toLocaleDateString()} ${datetime.toLocaleTimeString()}`

const Dummy = () => {
  const formattedDateTime = useFormattedDateTime(date)
  return <div>{formattedDateTime}</div>
}

const findDivTextInTree = (tree: ReactWrapper) => {
  return tree
    .find(Dummy)
    .find('div')
    .text()
}

const initTree = (client: Client) =>
  mount(
    <ZAFClientContextProvider value={client}>
      <Dummy />
    </ZAFClientContextProvider>,
  )

describe('useFormattedDateTime', () => {
  test('should return formatted date time in local timezone', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{formatDateAndTime: string | null; errors: object}>(
            (res) => res({formatDateAndTime: '22/07/2019 09:30', errors: {}}),
          ),
      ),
    }

    const tree = initTree(client)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatDateAndTime,
      date,
      'account',
    )

    let divText = findDivTextInTree(tree)
    expect(divText).toEqual('')

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    divText = findDivTextInTree(tree)
    expect(divText).toEqual('22/07/2019 09:30')

    tree.unmount()
  })

  test('should handle error and return date with default format', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{errors: {}}>((_, reject) =>
            reject({
              errors: {['formatDateAndTime']: 'Error'},
            }),
          ),
      ),
    }

    const tree = initTree(client)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatDateAndTime,
      date,
      'account',
    )

    let divText = findDivTextInTree(tree)
    expect(divText).toEqual('')

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    divText = findDivTextInTree(tree)
    expect(divText).toEqual(formatDefault(date))

    tree.unmount()
  })
})
