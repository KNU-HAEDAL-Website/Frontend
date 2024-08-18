import { keepPreviousData, queryOptions, useQuery } from '@tanstack/react-query'

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

export const boardDetailQuery = (activityId: number, boardId: number) =>
  queryOptions({
    queryKey: ['board', activityId, boardId],
    queryFn: async () => getBoardDetail({ activityId, boardId }),
    staleTime: 1000 * 60,
  })
