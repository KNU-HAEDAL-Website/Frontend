import { useQuery } from '@tanstack/react-query'

import { getActiveUser } from '@/service/server/user'

export const useGetActiveUsers = () => {
  const {
    data: activeUsers,
    status,
    error,
  } = useQuery({
    queryKey: ['users', 'active'],
    queryFn: async () => getActiveUser(),
  })

  return { activeUsers, status, error }
}
