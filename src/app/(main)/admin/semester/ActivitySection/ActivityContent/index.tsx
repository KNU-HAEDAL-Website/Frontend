import { ActivitySkeleton } from '@/app/(main)/activity/[semesterName]/_components/ActivitySkeleton'

import { useGetActivities } from '@/service/data/activity'
import { Semester } from '@/types/activity'

import { ActivityList } from './ActivityList'
import { AddActivityForm } from './AddActivityForm'

type ActivityContentProps = {
  semester: Semester
}

export const ActivityContent = ({ semester }: ActivityContentProps) => {
  const { data: activities, status } = useGetActivities(semester.semesterId)

  if (status === 'pending') return <ActivitySkeleton />

  return (
    <div className="flex flex-col gap-4 px-4">
      <AddActivityForm semesterId={semester.semesterId} />
      <ActivityList semesterId={semester.semesterId} activities={activities} />
    </div>
  )
}
