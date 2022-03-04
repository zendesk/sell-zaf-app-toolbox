import * as React from 'react'
import {mount, ReactWrapper} from 'enzyme'

import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client, ClientInvokeOptions} from '../types'
import flushPromises from '../test/flushPromises'
import useFormattedCurrency from './useFormattedCurrency'
import {act} from "react-dom/test-utils";

const amount = 10000
const currency = 'EUR'

const Dummy = ({currencyParam}: {currencyParam?: string}) => {
  const formattedDate = useFormattedCurrency(amount, currencyParam)
  return <div>{formattedDate}</div>
}

const findDivTextInTree = (tree: ReactWrapper) => {
  return tree
    .find(Dummy)
    .find('div')
    .text()
}

const initTree = (client: Client, currencyParam?: string) =>
  mount(
    <ZAFClientContextProvider value={client}>
      <Dummy currencyParam={currencyParam} />
    </ZAFClientContextProvider>,
  )

describe('useFormattedCurrency', () => {
  test('should call client.invoke with proper params', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{formatCurrency: string; error: null}>((res) =>
            // res({data: '10 000 €', errors: null}),
            res({formatCurrency: '10 000 $', error: null}),
          ),
      ),
    }

    const tree = initTree(client)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatCurrency,
      amount,
      undefined,
    )

    let divText = findDivTextInTree(tree)
    expect(divText).toEqual('')

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    divText = findDivTextInTree(tree)
    expect(divText).toEqual('10 000 $')

    tree.unmount()
  })

  test('should handle error and return empty string if currency is not present', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{errors: {}}>((_, reject) =>
            reject({
              errors: {['formatCurrency']: 'Error'},
            }),
          ),
      ),
    }

    const tree = initTree(client)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatCurrency,
      amount,
      undefined,
    )

    let divText = findDivTextInTree(tree)
    expect(divText).toEqual('')

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    divText = findDivTextInTree(tree)
    expect(divText).toEqual('10000')

    tree.unmount()
  })

  test('should handle error and return date with default format and currency if present', async () => {
    // @ts-ignore
    const client: Client = {
      // @ts-ignore
      invoke: jest.fn(
        () =>
          new Promise<{errors: {}}>((_, reject) =>
            reject({
              errors: {['formatCurrency']: 'Error'},
            }),
          ),
      ),
    }

    const tree = initTree(client, currency)

    expect(client.invoke).toHaveBeenCalledWith(
      ClientInvokeOptions.formatCurrency,
      amount,
      currency,
    )

    let divText = findDivTextInTree(tree)
    expect(divText).toEqual('')

    await act(async () => {
      await flushPromises()
    })

    tree.update()

    divText = findDivTextInTree(tree)
    expect(divText).toEqual(`EUR 10000`)

    tree.unmount()
  })
})
