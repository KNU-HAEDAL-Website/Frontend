import { queryOptions, useQuery, useSuspenseQuery } from '@tanstack/react-query'

import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { getActivities } from '@/service/server/activity'

const activitiesQuery = (semesterId: number) =>
  queryOptions({
    queryKey: ['activities', semesterId],
    queryFn: async () => getActivities({ semesterId }),
    retry: 0,
  })

export const useGetActivities = (semesterId: number) => {
  return useSuspenseQuery(activitiesQuery(semesterId))
}

export const useCurrentActivity = (semesterId: number, activityId: number) => {
  const { queryKey } = activitiesQuery(semesterId)
  const activities = queryClient.getQueryData(queryKey)

  const currentActivity = activities?.find(
    (activity) => activity.activityId === activityId,
  )

  if (!currentActivity) {
    throw new Error(DATA_ERROR_MESSAGES.ACTIVITY_NOT_FOUND)
  }

  return currentActivity
}
