import React from 'react'

import useDynamicAppHeight from '../hooks/useDynamicAppHeight'

interface DynamicHeightContainerProps {
  maxHeight?: number
}

export const DynamicHeightContainer: React.FC<DynamicHeightContainerProps> = ({
  children,
  maxHeight,
}) => {
  const appHeightRef = useDynamicAppHeight(maxHeight)

  return (
    <div className="dynamicContainer" ref={appHeightRef}>
      {children}
    </div>
  )
}
