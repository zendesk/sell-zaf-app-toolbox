import React, {createContext, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'
import {User} from '../types'

const UserContext = createContext<User>({} as User)

const UserProvider: React.FC = ({children}) => {
  let {data} = useClientGet<User>('currentUser')

  if (!data) {
    data = {} as User
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

const useCurrentUser = (): User => {
  return useContext(UserContext)
}

export {UserContext, UserProvider, useCurrentUser}
