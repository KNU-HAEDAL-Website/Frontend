'use client'

import { useEffect, useState } from 'react'

import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { useGetBoardsPaging } from '@/service/data/boards'
import { getBoardsPaging } from '@/service/server/board'

import { BoardList } from './BoardList/indext'
import { BoardPaginationButton } from './BoardPaginationButton'

type BoardSectionProps = {
  activityId: number
}

export const BoardSection = ({ activityId }: BoardSectionProps) => {
  const [page, setPage] = useState(0)

  const { data, status, isPlaceholderData } = useGetBoardsPaging({
    activityId: activityId,
    page,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.nextPageToken) {
      queryClient.prefetchQuery({
        queryKey: ['boards', activityId, page + 1],
        queryFn: () =>
          getBoardsPaging({
            activityId: activityId,
            page: page + 1,
          }),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

  if (status === 'pending') return <div>loading...</div>
  if (!data?.boards?.length) return <div>게시판이 없습니다.</div>

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <BoardList boards={data.boards} />
      <BoardPaginationButton
        boardData={data}
        currentPage={page}
        setCurrentPage={setPage}
      />
    </div>
  )
}
