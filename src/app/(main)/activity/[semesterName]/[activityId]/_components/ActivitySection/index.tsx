'use client'

import { useGetActivities } from '@/service/data/activity'

import { ActivitySkeleton } from '../../../_components/ActivitySkeleton'
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

  if (status === 'pending') return <ActivitySkeleton />
  if (!activities?.length) return <div>활동이 없습니다.</div>

  return <ActivityList activities={activities} currentActivityId={activityId} />
}
