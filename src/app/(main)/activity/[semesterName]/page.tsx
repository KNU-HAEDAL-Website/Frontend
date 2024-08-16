'use client'

import { useEffect } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { useGetActivities } from '@/service/data/activity'
import { useCurrentSemester } from '@/service/data/semester'

import { SemesterSection } from './[activityId]/_components/SemesterSection'
import { ActivitySkeleton } from './_components/ActivitySkeleton'

type RedirectActivityParams = {
  params: { semesterName: string }
}

const RedirectActivity = ({ params }: RedirectActivityParams) => {
  const pathName = usePathname()
  const router = useRouter()

  const currentSemester = useCurrentSemester(params.semesterName)
  const { data: activities } = useGetActivities(currentSemester.semesterId)

  if (activities && activities.length > 0) {
    const firstActivity = activities[0].activityId

    router.push(`${pathName}/${firstActivity}`)
    return (
      <div className="flex flex-col items-center gap-2">
        <SemesterSection semesterName={params.semesterName} />
        <ActivitySkeleton />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <SemesterSection semesterName={params.semesterName} />
      <div>활동이 없습니다.</div>
    </div>
  )
}

export default RedirectActivity
