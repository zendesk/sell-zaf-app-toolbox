import React, {createContext, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'
import {TicketContext} from '../types'

const TicketContext = createContext<TicketContext>({} as TicketContext)

const TicketProvider: React.FC = ({children}) => {
  let {data} = useClientGet<TicketContext>('ticket')

  if (!data) {
    data = {} as TicketContext
  }

  return (
    <TicketContext.Provider value={data}>{children}</TicketContext.Provider>
  )
}

const useTicketInfo = (): TicketContext => {
  return useContext(TicketContext)
}

export {TicketProvider, useTicketInfo}
