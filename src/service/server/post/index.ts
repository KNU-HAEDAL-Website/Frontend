import { AUTHORIZATION_API } from '@/service/config'

type generatePresignedUrlResposne = {
  preSignedUrl: string
  imageUrl: string
}

export const generatePresignedUrl = async () => {
  const response = await AUTHORIZATION_API.get<generatePresignedUrlResposne>(
    '/posts/generate-presigned-url',
  )

  return response.data
}
