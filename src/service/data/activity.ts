import { queryOptions, useQuery } from '@tanstack/react-query'

import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { getActivities } from '@/service/server/activity'

const activitiesQuery = (semesterId: number) =>
  queryOptions({
    queryKey: ['activities', semesterId],
    queryFn: async () => getActivities({ semesterId }),
  })

export const useGetActivities = (semesterId: number) => {
  return useQuery(activitiesQuery(semesterId))
}

export const useCurrentActivity = (semesterId: number, activityId: number) => {
  const { queryKey } = activitiesQuery(semesterId)
  const activities = queryClient.getQueryData(queryKey)

  const currentActivity = activities?.find(
    (activity) => activity.activityId === activityId,
  )

  return currentActivity
}
