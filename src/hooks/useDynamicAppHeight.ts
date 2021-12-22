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
export const useDynamicAppHeight = (
  maxHeight: number | undefined,
): LegacyRef<any> => {
  const [appRef, {height}] = useMeasure()

  const defineHeight = maxHeight && height > maxHeight ? maxHeight : height

  useClientHeight(defineHeight)

  return appRef
}

export default useDynamicAppHeight
