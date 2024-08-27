import { useQuery, useSuspenseQuery } from '@tanstack/react-query'

import { getAdminUsers, getUsers } from '@/service/server/user'

export const useGetUsers = () => {
  const {
    data: users,
    status,
    error,
  } = useSuspenseQuery({
    queryKey: ['users', 'active'],
    queryFn: async () => getUsers(),
  })

  return { users, status, error }
}

export const useGetActiveUsers = () => {
  return useQuery({
    queryKey: ['admin', 'users', 'active'],
    queryFn: async () => getAdminUsers({ isActive: true }),
  })
}
