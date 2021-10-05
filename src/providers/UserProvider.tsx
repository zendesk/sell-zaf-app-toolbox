import React, {createContext, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'

interface UserContextData {
  id: number
  name: string
  email: string
  role: string
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: React.FC = ({children}) => {
  let {data} = useClientGet<UserContextData>('currentUser')

  if (!data) {
    data = {} as UserContextData
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

const useCurrentUser = (): UserContextData => {
  return useContext(UserContext)
}

export {UserProvider, useCurrentUser}
