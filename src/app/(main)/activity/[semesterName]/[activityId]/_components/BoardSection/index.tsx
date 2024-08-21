'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { PaginationButtons } from '@/components/PaginationButtons'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { useGetBoardsPaging } from '@/service/data/boards'
import { getBoardsPaging } from '@/service/server/board'

import { BoardList } from './BoardList/indext'
import { BoardSkeleton } from './BoardSkeleton'

type BoardSectionProps = {
  activityId: number
}

export const BoardSection = ({ activityId }: BoardSectionProps) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const page =
    Number(params.get('page')) > 0 ? Number(params.get('page')) - 1 : 0

  const { data, status, isPlaceholderData } = useGetBoardsPaging({
    activityId: activityId,
    page,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.nextPageToken) {
      queryClient.prefetchQuery({
        queryKey: ['boards', activityId, page],
        queryFn: () => getBoardsPaging({ activityId, page }),
      })
    }
  }, [data, isPlaceholderData, page, activityId])

  if (status === 'pending') return <BoardSkeleton />
  if (!data?.boards?.length) return <div>게시판이 없습니다.</div>

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <BoardList boards={data.boards} />
      <PaginationButtons data={data} />
    </div>
  )
}
