import { AxiosError } from 'axios'
import { z } from 'zod'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'

import { generatePresignedUrl } from '.'

const CreateBoardServerSchema = z.object({
  activityId: z.number(),
  boardName: z.string(),
  boardIntro: z.string(),
  imageFile: z.instanceof(File),
  participants: z.string().array(),
})

export const createBoardAction = actionClient
  .schema(CreateBoardServerSchema)
  .action(
    async ({
      parsedInput: {
        activityId,
        boardName,
        boardIntro,
        imageFile,
        participants,
      },
    }) => {
      try {
        const { preSignedUrl, imageUrl } = await generatePresignedUrl()

        await BACKEND_API.put(preSignedUrl, imageFile, {
          headers: {
            'Content-Type': imageFile.type,
          },
        })

        const response = await AUTHORIZATION_API.post(
          `/activities/${activityId}/boards`,
          { boardName, boardIntro, boardImageUrl: imageUrl, participants },
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
    },
  )
