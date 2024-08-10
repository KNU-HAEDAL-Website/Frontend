import { z } from 'zod'

import { API_ERROR_MESSAGES } from '@/constant/errorMessage'
import { actionClient } from '@/lib/safe-action'
import { BACKEND_API } from '@/service/config'

import { generatePresignedUrl } from './index'

const PostImageUrlSchema = z.object({
  imageFile: z.instanceof(File),
})

export const postImageUrlAction = actionClient
  .schema(PostImageUrlSchema)
  .action(async ({ parsedInput: { imageFile } }) => {
    try {
      const { preSignedUrl, imageUrl } = await generatePresignedUrl()

      await BACKEND_API.put(preSignedUrl, imageFile, {
        headers: {
          'Content-Type': imageFile.type,
        },
      })

      return { imageUrl }
    } catch (error) {
      return { message: API_ERROR_MESSAGES.UNKNOWN_ERROR }
    }
  })
