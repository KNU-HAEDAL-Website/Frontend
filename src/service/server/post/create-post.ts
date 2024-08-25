import { kstFormat } from '@toss/date'
import { AxiosError } from 'axios'
import { z } from 'zod'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'

import { generatePresignedUrl } from './index'

type CreatePostRequest = {
  postTitle: string
  postContent: string
  postImageUrl?: string
  postActivityStartDate?: string
  postActivityEndDate?: string
  postType: 'ACTIVITY' | 'NOTICE' | 'EVENT'
}

const CreatePostServerSchema = z.object({
  postTitle: z.string(),
  postContent: z.string(),
  imageFile: z.instanceof(File),
  activityDate: z.object({
    start: z.date().optional(),
    end: z.date().optional(),
  }),
})

const CreateActivityPostServerSchema = CreatePostServerSchema.extend({
  boardId: z.number(),
})

export const createActivityPostAction = actionClient
  .schema(CreateActivityPostServerSchema)
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

        const createActivityPostRequest: CreatePostRequest = {
          postTitle,
          postContent,
          postImageUrl: imageUrl,
          postActivityStartDate: kstFormat(activityDate.start, 'yyyy-MM-dd'),
          postActivityEndDate:
            activityDate.end && kstFormat(activityDate.end, 'yyyy-MM-dd'),
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

export const createEventPostAction = actionClient
  .schema(CreatePostServerSchema)
  .action(
    async ({
      parsedInput: { postTitle, postContent, imageFile, activityDate },
    }) => {
      try {
        const { preSignedUrl, imageUrl } = await generatePresignedUrl()

        await BACKEND_API.put(preSignedUrl, imageFile, {
          headers: {
            'Content-Type': imageFile.type,
          },
        })

        if (!activityDate.start) throw new Error('날짜 입력 에러')

        const createEventPostRequest: CreatePostRequest = {
          postTitle,
          postContent,
          postImageUrl: imageUrl,
          postActivityStartDate: kstFormat(activityDate.start, 'yyyy-MM-dd'),
          postActivityEndDate:
            activityDate.end && kstFormat(activityDate.end, 'yyyy-MM-dd'),
          postType: 'EVENT',
        }

        const response = await AUTHORIZATION_API.post(
          `/posts`,
          createEventPostRequest,
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

const CreateNoticePostServerSchema = z.object({
  postTitle: z.string(),
  postContent: z.string(),
})

export const createNoticePostAction = actionClient
  .schema(CreateNoticePostServerSchema)
  .action(async ({ parsedInput: { postTitle, postContent } }) => {
    try {
      const createNoticePostRequest: CreatePostRequest = {
        postTitle,
        postContent,
        postType: 'NOTICE',
      }

      const response = await AUTHORIZATION_API.post(
        `/posts`,
        createNoticePostRequest,
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
