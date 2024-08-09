'use client'

import { useGetBoardsPaging } from '@/service/data/boards'

import { useActivityStore } from '~activity/_store/activity'

import { BoardList } from './BoardList/indext'

export const BoardSection = () => {
  const currentActivity = useActivityStore((state) => state.currentActivity)
  if (!currentActivity) return <div>에러 처리하기</div>

  const { boards, status } = useGetBoardsPaging({
    activityId: currentActivity.activityId,
  })

  if (status === 'pending') return <div>loading...</div>
  if (!boards?.length) return <div>게시판이 없습니다.</div>

  return <BoardList boards={boards} />
}
