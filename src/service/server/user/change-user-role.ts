import { AxiosError } from 'axios'
import { z } from 'zod'

import {
  ACCESS_ERROR_MESSAGE,
  API_ERROR_MESSAGES,
} from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API } from '@/service/config'

const UserRoleSchema = z.object({
  userId: z.string(),
  role: z.enum(['해구르르', '팀장', '일반']),
})

export const changeUserRoleAction = actionClient
  .schema(UserRoleSchema)
  .action(async ({ parsedInput: { userId, role } }) => {
    try {
      const response = await AUTHORIZATION_API.patch(
        `/admin/users/${userId}/role`,
        { role },
      )

      return { isSuccess: true, message: response.data.message }
    } catch (error) {
      if (error instanceof AxiosError) {
        const response = error.response

        if (response?.status === 403) {
          return { message: ACCESS_ERROR_MESSAGE.TOKEN_ERROR, action: 'login' }
        }

        if (response?.status === 404) {
          return { message: response.data.message }
        }
      }
      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })
