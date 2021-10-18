import React, {createContext, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'
import {Ticket} from '../types'

const TicketContext = createContext<Ticket>({} as Ticket)

const TicketProvider: React.FC = ({children}) => {
  let {data} = useClientGet<Ticket>('ticket')

  if (!data) {
    data = {} as Ticket
  }

  return (
    <TicketContext.Provider value={data}>{children}</TicketContext.Provider>
  )
}

const useTicketInfo = (): Ticket => {
  return useContext(TicketContext)
}

export {TicketProvider, useTicketInfo}
