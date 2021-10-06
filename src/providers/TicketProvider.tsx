import React, {createContext, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'
import {TicketContextData} from '../types'

const TicketContext = createContext<TicketContextData>({} as TicketContextData)

const TicketProvider: React.FC = ({children}) => {
  let {data} = useClientGet<TicketContextData>('ticket')

  if (!data) {
    data = {} as TicketContextData
  }

  return (
    <TicketContext.Provider value={data}>{children}</TicketContext.Provider>
  )
}

const useTicketInfo = (): TicketContextData => {
  return useContext(TicketContext)
}

export {TicketProvider, useTicketInfo}
