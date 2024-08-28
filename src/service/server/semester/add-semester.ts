import { AxiosError } from 'axios'
import { z } from 'zod'

import {
  ACCESS_ERROR_MESSAGE,
  API_ERROR_MESSAGES,
} from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API } from '@/service/config'

const AddSemesterSchema = z.object({
  semesterName: z.string(),
})

export const AddSemesterAction = actionClient
  .schema(AddSemesterSchema)
  .action(async ({ parsedInput: { semesterName } }) => {
    try {
      const response = await AUTHORIZATION_API.post(`/admin/semesters`, {
        semesterName,
      })

      return { isSuccess: true, message: response.data.message }
    } catch (error) {
      if (error instanceof AxiosError) {
        const response = error.response

        if (response?.status === 403) {
          return { message: ACCESS_ERROR_MESSAGE.TOKEN_ERROR, action: 'login' }
        }

        if (response?.status === 409) {
          return { message: response.data.message }
        }
      }
      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })
