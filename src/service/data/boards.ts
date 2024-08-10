import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'

import { getBoardsPaging } from '@/service/server/board'

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
