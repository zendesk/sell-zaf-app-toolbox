import React from 'react'

import useDynamicAppHeight from '../hooks/useDynamicAppHeight'

export const DynamicHeightContainer: React.FC = ({children}) => {
  const appHeightRef = useDynamicAppHeight()

  return (
    <div className="main" ref={appHeightRef}>
      {children}
    </div>
  )
}
