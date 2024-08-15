import { ReactNode } from 'react'

import ErrorHandlingWrapper from '@/service/components/error-boundary/ErrorHandlingWrapper'

import ActivityErrorFallback from './_components/ActivityErrorFallback'

const ActivityLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorHandlingWrapper
      fallbackComponent={ActivityErrorFallback}
      suspenseFallback={<div>loading...</div>}
    >
      {children}
    </ErrorHandlingWrapper>
  )
}

export default ActivityLayout
