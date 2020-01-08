import {useContext, useEffect} from 'react'

import {ZAFClientContext} from '../providers/ZAFClientContext'

/** Resizes iframe height whenever argument changes */
export const useClientHeight = (height: number): void => {
  const client = useContext(ZAFClientContext)
  if (!client) {
    throw new Error('You forgot to use ZAFClientContext')
  }

  useEffect(() => {
    client.invoke('resize', {height})
  }, [height])
}

export default useClientHeight
