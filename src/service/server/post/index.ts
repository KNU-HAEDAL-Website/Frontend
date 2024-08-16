import { formatDateDistanceFromToday } from '@/lib/date-distance'
import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'
import { PagaingRaw, Paging } from '@/service/types/paging'
import { Post } from '@/types/post'

type PostsPagingRequestParams = {
  postType: 'NOTICE' | 'EVENT'
  page?: number
  size?: number
}

interface PostsPaingResponseRaw extends PagaingRaw {
  content: Post[]
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

  const posts = data.content.map((post) => {
    const formatCreateDate = formatDateDistanceFromToday(
      new Date(post.postCreateDate),
    )

    if (!formatCreateDate) return post

    return {
      ...post,
      postCreateDate: formatCreateDate,
    }
  })

  return {
    posts,
    nextPageToken:
      data.pageable.pageNumber !== data.totalPages
        ? (data.pageable.pageNumber + 1).toString()
        : undefined,
    pageInfo: {
      totalPages: data.totalPages,
      totalElements: data.totalElements,
      pageSize: data.pageable.pageSize,
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
