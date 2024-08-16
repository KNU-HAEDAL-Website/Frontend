import { AUTHORIZATION_API } from '@/service/config'
import { Role } from '@/types/user'

type MyInfoResponse = {
  userId: string
  studentNumber: number
  userName: string
  role: Role
  regDate: string
}

export const getMyInfo = async () => {
  const response = await AUTHORIZATION_API.get<MyInfoResponse>('/users/me')

  return response.data
}
