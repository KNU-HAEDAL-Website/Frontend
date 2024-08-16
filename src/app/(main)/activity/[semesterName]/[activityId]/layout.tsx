import { ReactNode } from 'react'

import ErrorHandlingWrapper from '@/service/components/error-boundary/ErrorHandlingWrapper'

import ActivityErrorFallback from './_components/ActivityErrorFallback'
import { SemesterSection } from './_components/SemesterSection'

type ActivityPageParams = {
  semesterName: string
}

type ActivityLayoutProps = {
  params: ActivityPageParams
  children: ReactNode
}

const ActivityLayout = ({ params, children }: ActivityLayoutProps) => {
  return (
    <ErrorHandlingWrapper
      fallbackComponent={ActivityErrorFallback}
      suspenseFallback={
        <div className="flex flex-col items-center gap-2">
          <SemesterSection semesterName={params.semesterName} />
        </div>
      }
    >
      {children}
    </ErrorHandlingWrapper>
  )
}

export default ActivityLayout
