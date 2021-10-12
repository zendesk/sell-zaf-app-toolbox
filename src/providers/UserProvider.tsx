import React, {createContext, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'
import {UserContext} from '../types'

const UserContext = createContext<UserContext>({} as UserContext)

const UserProvider: React.FC = ({children}) => {
  let {data} = useClientGet<UserContext>('currentUser')

  console.log('userProvider', data);

  if (!data) {
    data = {} as UserContext
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

const useCurrentUser = (): UserContext => {
  return useContext(UserContext)
}

export {UserProvider, useCurrentUser}
