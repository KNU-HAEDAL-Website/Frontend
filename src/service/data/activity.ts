'use client'

import { queryOptions, skipToken, useQuery } from '@tanstack/react-query'

import { getActivities } from '@/service/server/activity'

export const activitiesQuery = (semesterId?: number) =>
  queryOptions({
    queryKey: ['activities', semesterId],
    queryFn: semesterId ? () => getActivities({ semesterId }) : skipToken,
  })

export const useGetActivities = (semesterId?: number) => {
  return useQuery(activitiesQuery(semesterId))
}

// export const useCurrentActivity = (semesterId: number, activityId: number) => {
//   const { data: activities, status } = useGetActivities(semesterId)

//   if (status === 'pending') return undefined

//   const currentActivity = activities?.find(
//     (activity) => activity.activityId === activityId,
//   )

//   if (!currentActivity) {
//     throw new Error(DATA_ERROR_MESSAGES.ACTIVITY_NOT_FOUND)
//   }

//   return currentActivity
// }
