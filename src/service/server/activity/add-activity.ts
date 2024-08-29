import { AxiosError } from 'axios'
import { flattenValidationErrors } from 'next-safe-action'
import { z } from 'zod'

import {
  ACCESS_ERROR_MESSAGE,
  API_ERROR_MESSAGES,
} from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API } from '@/service/config'

const AddActivitySchema = z.object({
  semesterId: z.number(),
  activityName: z.string().min(1, { message: '활동명을 입력해주세요.' }),
})

export const AddActivityAction = actionClient
  .schema(AddActivitySchema, {
    handleValidationErrorsShape: (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { semesterId, activityName } }) => {
    try {
      const response = await AUTHORIZATION_API.post(
        `/admin/semesters/${semesterId}/activities`,
        {
          activityName,
        },
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
