import { AxiosError } from 'axios'
import { z } from 'zod'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API } from '@/service/config'

const DeleteBoardServerSchema = z.object({
  activityId: z.number(),
  boardId: z.number(),
})

export const deleteBoardAction = actionClient
  .schema(DeleteBoardServerSchema)
  .action(async ({ parsedInput: { activityId, boardId } }) => {
    try {
      const response = await AUTHORIZATION_API.delete(
        `/activities/${activityId}/boards/${boardId}`,
      )

      return { isSuccess: true, message: response.data.message }
    } catch (error) {
      if (error instanceof AxiosError) {
        const response = error.response

        if (response?.status === 404) {
          return { message: response.data.message }
        }
      }
      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })
