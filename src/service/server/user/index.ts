import { AxiosError } from 'axios'

import { ACCESS_ERROR_MESSAGE } from '@/constant/errorMessage'
import { AUTHORIZATION_API } from '@/service/config'
import { ActiveUser, User } from '@/types/user'

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

type AdminUsersParams = {
  isActive: boolean
}

type AdminUsersResponse = {
  users: ActiveUser[]
}

export const getAdminUsers = async ({ isActive }: AdminUsersParams) => {
  try {
    const response = await AUTHORIZATION_API.get<AdminUsersResponse>(
      getAdminUsersPath({ isActive }),
    )

    return response.data.users
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(ACCESS_ERROR_MESSAGE.UNAUTHORIZED_ERROR)
    }
  }
}

const getAdminUsersPath = ({ isActive }: AdminUsersParams) => {
  const params = new URLSearchParams()

  params.append('active', isActive.toString())

  return `/admin/users?${params.toString()}`
}
