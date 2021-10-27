import {LegacyRef} from 'react'
import useMeasure from 'react-use/lib/useMeasure'

import useClientHeight from './useClientHeight'

/**
 * Hook to dynamically the app height based on the size of a component.
 *
 * Use the return value as a ref on the component you want to base the app
 * height on.
 *
 * @returns {function}
 */
export const useDynamicAppHeight = (): LegacyRef<any> => {
  const [appRef, {height}] = useMeasure()

  useClientHeight(height)

  return appRef
}

export default useDynamicAppHeight
