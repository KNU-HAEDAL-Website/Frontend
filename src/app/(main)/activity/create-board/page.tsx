'use client'

import { useActivityStore } from '~activity/_store/activity'
import { useSemesterStore } from '~activity/_store/semester'

import { CreateBoardDetail } from './_components/CreateBoardDetail'
import { CreateBoardForm } from './_components/CreateBoardForm'
import { CreateBoardHero } from './_components/CreateBoardHero'

const CreateBoardPage = () => {
  const currentSemester = useSemesterStore((state) => state.currentSemester)
  const currentActivity = useActivityStore((state) => state.currentActivity)

  if (!currentActivity || !currentSemester) return <div>에러 처리</div>

  return (
    <div className="w-full px-8 pt-10 md:px-20">
      <CreateBoardHero />
      <CreateBoardDetail
        semesterName={currentSemester.semesterName}
        activityName={currentActivity.activityName}
      />
      <CreateBoardForm />
    </div>
  )
}

export default CreateBoardPage
