import { useSuspenseQuery } from '@tanstack/react-query'

import { getUsers } from '@/service/server/user'

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
