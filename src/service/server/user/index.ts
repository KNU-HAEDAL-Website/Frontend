import { AUTHORIZATION_API } from '@/service/config'
import { ActiveUser } from '@/types/user'

export const getActiveUser = async () => {
  const response = await AUTHORIZATION_API.get<ActiveUser[]>(
    '/admin/users/active',
  )

  return response.data
}
