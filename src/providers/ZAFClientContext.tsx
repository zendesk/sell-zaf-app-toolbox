import React, {useContext} from 'react'

import {Client} from '../types'

// ZAF_CLIENT has to be provided by context provider
const ZAF_CLIENT: Client | undefined = undefined
export const ZAFClientContext = React.createContext<Client | undefined>(
  ZAF_CLIENT,
)

export const useZAFClient = (): Client | undefined => {
  return useContext(ZAFClientContext)
}

export const ZAFClientContextProvider = ZAFClientContext.Provider
