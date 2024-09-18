import { AxiosError } from 'axios'
import { z } from 'zod'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API } from '@/service/config'

const DeletePostServerSchema = z.object({
  postId: z.number(),
})

export const deletePostAction = actionClient
  .schema(DeletePostServerSchema)
  .action(async ({ parsedInput: { postId } }) => {
    try {
      const response = await AUTHORIZATION_API.delete(`/posts/${postId}`)

      return { isSuccess: true, message: response.data.message }
    } catch (error) {
      if (error instanceof AxiosError) {
        const response = error.response

        if (response?.status === 404) {
          return { message: response.data.message, action: 'login' }
        }
      }
      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })

const DeleteActivityPostServerSchema = DeletePostServerSchema.extend({
  boardId: z.number(),
})

export const deleteActivityPostAction = actionClient
  .schema(DeleteActivityPostServerSchema)
  .action(async ({ parsedInput: { boardId, postId } }) => {
    try {
      const response = await AUTHORIZATION_API.delete(
        `/boards/${boardId}/posts/${postId}`,
      )

      return { isSuccess: true, message: response.data.message }
    } catch (error) {
      if (error instanceof AxiosError) {
        const response = error.response

        if (response?.status === 404) {
          return { message: response.data.message, action: 'login' }
        }
      }
      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })
