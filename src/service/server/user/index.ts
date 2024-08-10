import { AUTHORIZATION_API } from '@/service/config'
import { User } from '@/types/user'

export const getUsers = async () => {
  const response = await AUTHORIZATION_API.get<User[]>('/private/users')

  return response.data
}
