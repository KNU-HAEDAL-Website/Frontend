import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'

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

export const useBoardDetail = ({ activityId, boardId }: BoardDetailParams) => {
  return useQuery({
    queryKey: ['board', activityId, boardId],
    queryFn: () => getBoardDetail({ activityId, boardId }),
  })
}
