import { kstFormat } from '@toss/date'
import { AxiosError } from 'axios'
import { z } from 'zod'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'

import { generatePresignedUrl } from './index'

const CreatePostServerSchema = z.object({
  boardId: z.number(),
  postTitle: z.string(),
  postContent: z.string(),
  imageFile: z.instanceof(File),
  activityDate: z.object({
    start: z.date().optional(),
    end: z.date().optional(),
  }),
})

type CreatePostRequest = {
  postTitle: string
  postContent: string
  postImageUrl: string
  postActivityStartDate?: string
  postActivityEndDate?: string
  postType: 'ACTIVITY' | 'NOTICE' | 'EVENT'
}

export const createActivityPostAction = actionClient
  .schema(CreatePostServerSchema)
  .action(
    async ({
      parsedInput: { boardId, postTitle, postContent, imageFile, activityDate },
    }) => {
      try {
        const { preSignedUrl, imageUrl } = await generatePresignedUrl()

        await BACKEND_API.put(preSignedUrl, imageFile, {
          headers: {
            'Content-Type': imageFile.type,
          },
        })

        if (!activityDate.start) throw new Error('날짜 입력 에러')

        const tempDateFormat = kstFormat(activityDate.start, 'yyyy-MM-dd') // date input 수정 전까지 임시 날짜 사용

        const createActivityPostRequest: CreatePostRequest = {
          postTitle,
          postContent,
          postImageUrl: imageUrl,
          postActivityStartDate: tempDateFormat,
          postActivityEndDate: tempDateFormat,
          postType: 'ACTIVITY',
        }

        const response = await AUTHORIZATION_API.post(
          `/boards/${boardId}/posts`,
          createActivityPostRequest,
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
