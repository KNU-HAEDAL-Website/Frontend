'use client'

import { useCurrentActivity, useGetActivities } from '@/service/data/activity'

import { ActivityList } from './ActivityList'

type ActivitySectionProps = {
  semesterId: number
  activityId: number
}

export const ActivitySection = ({
  semesterId,
  activityId,
}: ActivitySectionProps) => {
  const { data: activities, status } = useGetActivities(semesterId)
  const currentActivity = useCurrentActivity(semesterId, activityId)

  if (status === 'pending') return <div>loading...</div>
  if (!activities?.length) return <div>활동이 없습니다.</div>

  return (
    <ActivityList activities={activities} currentActivity={currentActivity} />
  )
}