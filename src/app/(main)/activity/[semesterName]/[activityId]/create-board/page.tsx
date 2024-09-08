'use client'

import { useCurrentActivity } from '@/service/data/activity'
import { useCurrentSemester } from '@/service/data/semester'

import { CreateBoardDetail } from './_components/CreateBoardDetail'
import { CreateBoardForm } from './_components/CreateBoardForm'
import { CreateBoardHero } from './_components/CreateBoardHero'
import { CreateBoardSkeleton } from './_components/Skeleton'

type CreateBoardPageParams = {
  params: {
    semesterName: string
    activityId: string
  }
}

const CreateBoardPage = ({ params }: CreateBoardPageParams) => {
  const currentSemester = useCurrentSemester(params.semesterName)
  const currentActivity = useCurrentActivity(
    currentSemester.semesterId,
    Number(params.activityId),
  )

  if (!currentActivity) return <CreateBoardSkeleton />

  return (
    <div className="w-full pt-10">
      <CreateBoardHero />
      <CreateBoardDetail
        semesterName={params.semesterName}
        activityName={currentActivity.activityName}
      />
      <CreateBoardForm activityId={Number(currentActivity.activityId)} />
    </div>
  )
}

export default CreateBoardPage
