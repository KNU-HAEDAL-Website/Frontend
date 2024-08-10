import { useQuery } from '@tanstack/react-query'

import { getUsers } from '@/service/server/user'

export const useGetUsers = () => {
  const {
    data: users,
    status,
    error,
  } = useQuery({
    queryKey: ['users', 'active'],
    queryFn: async () => getUsers(),
  })

  return { users, status, error }
}
