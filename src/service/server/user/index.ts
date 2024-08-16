import { AxiosError } from 'axios'

import { ACCESS_ERROR_MESSAGE } from '@/constant/errorMessage'
import { AUTHORIZATION_API } from '@/service/config'
import { User } from '@/types/user'

export const getUsers = async () => {
  try {
    const response = await AUTHORIZATION_API.get<User[]>('/private/users')

    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(ACCESS_ERROR_MESSAGE.UNAUTHORIZED_ERROR)
    }
  }
}
