'use client'

import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'

import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { activitiesQuery } from '@/service/data/activity'
import { useCurrentSemester } from '@/service/data/semester'

import { SemesterSection } from './[activityId]/_components/SemesterSection'
import { ActivitySkeleton } from './_components/ActivitySkeleton'
import { SemesterSkeleton } from './_components/SemesterSkeleton'

type RedirectActivityParams = {
  params: { semesterName: string }
}

const RedirectActivity = ({ params }: RedirectActivityParams) => {
  const pathName = usePathname()
  const router = useRouter()

  const currentSemester = useCurrentSemester(params.semesterName)
  const { data: activities, status } = useQuery(
    activitiesQuery(currentSemester.semesterId),
  )

  useEffect(() => {
    if (activities && activities.length > 0) {
      const firstActivity = activities[0].activityId
      router.push(`${pathName}/${firstActivity}`)
    }
  }, [activities, pathName, router])

  if (status === 'pending') return <SemesterSkeleton />

  if (!activities) throw new Error(DATA_ERROR_MESSAGES.ACTIVITY_NOT_FOUND)

  if (activities.length === 0)
    return (
      <div className="flex flex-col items-center gap-2">
        <SemesterSection semesterName={params.semesterName} />
        <div>활동이 없습니다.</div>
      </div>
    )

  return (
    <div className="flex flex-col items-center gap-2">
      <SemesterSection semesterName={params.semesterName} />
      <ActivitySkeleton />
    </div>
  )
}

export default RedirectActivity
