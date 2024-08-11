'use client'

import { useEffect, useState } from 'react'

import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { useGetBoardsPaging } from '@/service/data/boards'
import { getBoardsPaging } from '@/service/server/board'

import { useActivityStore } from '~activity/_store/activity'

import { BoardList } from './BoardList/indext'
import { BoardPaginationButton } from './BoardPaginationButton'

export const BoardSection = () => {
  const currentActivity = useActivityStore((state) => state.currentActivity)

  if (!currentActivity) return <div>에러 처리하기</div>

  const [page, setPage] = useState(0)

  const { data, status, isPlaceholderData } = useGetBoardsPaging({
    activityId: currentActivity.activityId,
    page,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.nextPageToken) {
      queryClient.prefetchQuery({
        queryKey: ['boards', currentActivity, page + 1],
        queryFn: () =>
          getBoardsPaging({
            activityId: currentActivity.activityId,
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
