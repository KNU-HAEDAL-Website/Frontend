'use client'

import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { FallbackProps } from '@/service/components/error-boundary'
import { useGetActivities } from '@/service/data/activity'
import { useCurrentSemester } from '@/service/data/semester'

const ActivityErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const pathName = usePathname()

  if (error?.message === DATA_ERROR_MESSAGES.ACTIVITY_NOT_FOUND) {
    const semesterName = getSemesterNameFromPath(pathName)
    const currentSemester = useCurrentSemester(semesterName)
    const { status } = useGetActivities(Number(currentSemester.semesterId))

    if (status === 'pending') return <div>loading...</div>
    resetErrorBoundary()
  }

  return (
    <div className="flex flex-col gap-2">
      <p>{error?.message} </p>
      <Button onClick={() => resetErrorBoundary()}> 다시 시도 </Button>
    </div>
  )
}

export default ActivityErrorFallback

function getSemesterNameFromPath(url: string) {
  const parts = url.split('/')
  const activityIndex = parts.indexOf('activity')

  return parts[activityIndex + 1]
}
