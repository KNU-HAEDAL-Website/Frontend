'use client'

import { useCurrentSemester } from '@/service/data/semester'

import { SemesterSkeleton } from '../_components/SemesterSkeleton'
import { ActivitySection } from './_components/ActivitySection'
import { BoardSection } from './_components/BoardSection'
import { CreateBoardButton } from './_components/CreateBoardButton'
import { SemesterSection } from './_components/SemesterSection'

type ActivityPageParams = {
  params: {
    semesterName: string
    activityId: string
  }
}

const ActivityPage = ({ params }: ActivityPageParams) => {
  const semester = useCurrentSemester(params.semesterName)

  if (!semester) return <SemesterSkeleton />

  return (
    <div className="flex flex-col items-center gap-2">
      <SemesterSection semesterName={params.semesterName} />
      <div className="flex w-full flex-col items-center gap-6">
        <ActivitySection
          semesterId={semester.semesterId}
          activityId={Number(params.activityId)}
        />
        <BoardSection activityId={Number(params.activityId)} />
        <CreateBoardButton />
      </div>
    </div>
  )
}

export default ActivityPage
