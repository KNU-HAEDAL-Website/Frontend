'use client'

import { useBoardDetail } from '@/service/data/boards'

import { BoardHero } from './BoardHero'

type BoardPageProps = {
  boardId: number
  activityId: number
}

export const BoardContent = ({ boardId, activityId }: BoardPageProps) => {
  const { data: boardDetail, status } = useBoardDetail({
    activityId,
    boardId,
  })

  if (status === 'pending') return <div>loading...</div>
  if (!boardDetail) return <div>게시판 정보가 없습니다.</div>

  return (
    <div className="w-full px-8 pt-10 md:px-20">
      <BoardHero board={boardDetail} />
    </div>
  )
}
