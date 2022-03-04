import * as React from 'react'
import {mount, ReactWrapper} from 'enzyme'

import useFormattedDate from './useFormattedDate'
import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client, ClientInvokeOptions} from '../types'
import flushPromises from '../test/flushPromises'
import {act} from "react-dom/test-utils";

const date = new Date('2019-07-22')

const Dummy = () => {
  const formattedDate = useFormattedDate(date)
  return <div>{formattedDate}</div>
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

describe('useFormattedDate', () => {
  test('should call client.invoke with proper params', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{formatDate: string | null; errors: object}>((res) =>
            res({formatDate: '22/07/2019', errors: {}}),
          ),
      ),
    }

    const tree = initTree(client)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatDate,
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
    expect(divText).toEqual('22/07/2019')

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
              errors: {['formatDate']: 'Error'},
            }),
          ),
      ),
    }

    const tree = initTree(client)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatDate,
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
    expect(divText).toEqual(date.toLocaleDateString())

    tree.unmount()
  })
})
