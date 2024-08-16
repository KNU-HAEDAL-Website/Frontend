'use client'

import { useEffect } from 'react'

import { usePathname, useRouter } from 'next/navigation'

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
  const router = useRouter()

  const semesterName = getSemesterNameFromPath(pathName)
  const currentSemester = useCurrentSemester(semesterName)

  useGetActivities(Number(currentSemester.semesterId))

  useEffect(() => {
    if (error?.message === DATA_ERROR_MESSAGES.ACTIVITY_NOT_FOUND) {
      resetErrorBoundary()
    }
  }, [error])

  return (
    <div className="flex flex-col items-center gap-6 pt-40">
      <div>{error?.message} </div>
      <div className="flex gap-2">
        <Button variant="secondary" onClick={() => router.back()}>
          뒤로가기
        </Button>
        <Button onClick={() => router.push('/auth/login')}>로그인</Button>
      </div>
    </div>
  )
}

export default ActivityErrorFallback

function getSemesterNameFromPath(url: string) {
  const parts = url.split('/')
  const activityIndex = parts.indexOf('activity')

  return parts[activityIndex + 1]
}
