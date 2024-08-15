import { keepPreviousData, queryOptions, useQuery } from '@tanstack/react-query'

import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { getBoardDetail, getBoardsPaging } from '@/service/server/board'

type BoardsParams = {
  activityId: number
  page: number
  size?: number
}

export const useGetBoardsPaging = ({
  activityId,
  page,
  size = 6,
}: BoardsParams) => {
  const { data, status, error, isPlaceholderData } = useQuery({
    queryKey: ['boards', activityId, page],
    queryFn: () => getBoardsPaging({ activityId, page, size }),
    placeholderData: keepPreviousData,
  })

  return { data, status, error, isPlaceholderData }
}

type BoardDetailParams = {
  activityId: number
  boardId: number
}

export const boardDetailQuery = (activityId: number, boardId: number) =>
  queryOptions({
    queryKey: ['board', activityId, boardId],
    queryFn: async () => getBoardDetail({ activityId, boardId }),
    staleTime: 1000 * 60,
  })

export const useBoardDetail = ({ activityId, boardId }: BoardDetailParams) => {
  return useQuery(boardDetailQuery(activityId, boardId))
}

export const useCurrentBoardDetail = ({
  activityId,
  boardId,
}: BoardDetailParams) => {
  const { queryKey } = boardDetailQuery(activityId, boardId)

  const boardDetail = queryClient.getQueryData(queryKey)

  if (!boardDetail) {
    throw new Error(DATA_ERROR_MESSAGES.BOARD_DETAIL_NOT_FOUND)
  }

  return boardDetail
}
