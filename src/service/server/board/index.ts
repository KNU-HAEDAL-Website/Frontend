import { AUTHORIZATION_API, BACKEND_API } from '@/service/config'
import { PagaingRaw, Paging } from '@/service/types/paging'
import { Board } from '@/types/activity'

type BoardsPagingRequestParams = {
  activityId: number
  page?: number
  size?: number
}

interface BoardsPagingResponseRaw extends PagaingRaw {
  content: Board[]
}

export interface BoardsResponse extends Paging {
  boards: Board[]
}

export const getBoardsPaging = async (
  params: BoardsPagingRequestParams,
): Promise<BoardsResponse> => {
  const response = await BACKEND_API.get<BoardsPagingResponseRaw>(
    getBoardsPath(params),
  )

  const { data } = response

  return {
    boards: data.content,
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

const getBoardsPath = ({
  activityId,
  page,
  size,
}: BoardsPagingRequestParams) => {
  const params = new URLSearchParams()

  if (page) params.append('page', page.toString())
  if (size) params.append('size', size.toString())

  return `/activities/${activityId}/boards?${params.toString()}`
}

type generatePresignedUrlResposne = {
  preSignedUrl: string
  imageUrl: string
}

export const generatePresignedUrl = async () => {
  const response = await AUTHORIZATION_API.get<generatePresignedUrlResposne>(
    '/boards/generate-presigned-url',
  )

  return response.data
}

type BoardDetailRequestParams = {
  activityId: number
  boardId: number
}

export const getBoardDetail = async ({
  activityId,
  boardId,
}: BoardDetailRequestParams) => {
  const response = await BACKEND_API.get<Board>(
    `/activities/${activityId}/boards/${boardId}`,
  )

  return response.data
}
