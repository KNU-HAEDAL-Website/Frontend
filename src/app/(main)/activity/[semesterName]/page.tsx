'use client'

import { useRouter } from 'next/navigation'

import { useCurrentSemester, useGetSemesters } from '@/service/data/semester'

import { RedirectActivity } from './[activityId]/_components/RedirectActivity'
import { SemesterSection } from './[activityId]/_components/SemesterSection'
import { SemesterSkeleton } from './_components/SemesterSkeleton'

type RedirectActivityParams = {
  params: { semesterName: string }
}

const RedirectSemester = ({ params }: RedirectActivityParams) => {
  const router = useRouter()
  const { semesters, status } = useGetSemesters()
  const currentSemester = useCurrentSemester(params.semesterName)

  if (status === 'pending') return <SemesterSkeleton />

  if (params.semesterName === 'init') {
    const lastSemester = semesters[semesters.length - 1].semesterName

    router.push(`/activity/${lastSemester}`)
    return
  }

  if (!currentSemester) return <div>학기가 없습니다.</div>

  return (
    <div className="flex flex-col items-center gap-2">
      <SemesterSection semesterName={params.semesterName} />
      <RedirectActivity semester={currentSemester} />
    </div>
  )
}

export default RedirectSemester
