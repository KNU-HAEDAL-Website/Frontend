import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'
import { PagaingRaw, Paging } from '@/service/types/paging'
import { Post, PostRaw } from '@/types/post'

type PostsPagingRequestParams = {
  postType: 'NOTICE' | 'EVENT'
  page?: number
  size?: number
}

interface PostsPaingResponseRaw extends PagaingRaw {
  content: PostRaw[]
}

export interface PostsResponse extends Paging {
  posts: Post[]
}

export const getPostsPaging = async (
  params: PostsPagingRequestParams,
): Promise<PostsResponse> => {
  const response = await BACKEND_API.get<PostsPaingResponseRaw>(
    getPostsPath(params),
  )

  const { data } = response

  const posts = data.content.map((post) => ({
    ...post,
    postActivityStartDate: new Date(post.postActivityStartDate),
    postActivityEndDate: new Date(post.postActivityEndDate),
    postCreateDate: new Date(post.postCreateDate),
  }))

  return {
    posts,
    nextPageToken:
      data.pageable.pageNumber !== data.totalPages
        ? (data.pageable.pageNumber + 1).toString()
        : undefined,
    pageInfo: {
      totalPages: data.totalPages,
      totalElements: data.totalElements,
    },
  }
}

const getPostsPath = ({ postType, page, size }: PostsPagingRequestParams) => {
  const params = new URLSearchParams()

  params.append('postType', postType)
  if (page) params.append('page', page.toString())
  if (size) params.append('size', size.toString())

  return `/posts?${params.toString()}`
}

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
