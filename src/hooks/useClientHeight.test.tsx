import * as React from 'react'
import {mount} from 'enzyme'

import useClientHeight from './useClientHeight'
import {ZAFClientContextProvider} from '../providers/ZAFClientContext'
import {Client} from '../types'

describe('useClientHeight', () => {
  test('should call client.invoke with proper params', () => {
    const Dummy = () => {
      useClientHeight(300)
      return <div />
    }

    // @ts-ignore
    const client: Client = {
      invoke: jest.fn(),
    }

    const tree = mount(
      <ZAFClientContextProvider value={client}>
        <Dummy />
      </ZAFClientContextProvider>,
    )

    expect(client.invoke).toHaveBeenCalledWith('resize', {height: 300})

    tree.unmount()
  })

  test('should call client.invoke with argument changes', () => {
    const Dummy = ({height}: {height: number}) => {
      useClientHeight(height)
      return <div />
    }

    // @ts-ignore
    const client: Client = {
      invoke: jest.fn(),
    }

    const Tree = ({height}: {height: number}) => (
      <ZAFClientContextProvider value={client}>
        <Dummy height={height} />
      </ZAFClientContextProvider>
    )

    const tree = mount(<Tree height={300} />)

    expect(client.invoke).toHaveBeenNthCalledWith(1, 'resize', {height: 300})
    tree.setProps({height: 200})
    expect(client.invoke).toHaveBeenNthCalledWith(2, 'resize', {height: 200})

    tree.unmount()
  })
})
