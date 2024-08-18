'use client'

import { useQuery } from '@tanstack/react-query'

import { boardDetailQuery } from '@/service/data/boards'

import { ActivityPostListSection } from './_components/ActivityPostListSection'
import { BoardHero } from './_components/BoardHero'
import { CreatePostButton } from './_components/CreatePostButton'

type BoardPageParams = {
  params: {
    activityId: string
    boardId: string
  }
}

const BoardPage = ({ params }: BoardPageParams) => {
  const { data: boardDetail } = useQuery(
    boardDetailQuery(Number(params.activityId), Number(params.boardId)),
  )

  if (!boardDetail) return <div>게시판 정보가 없습니다.</div>

  return (
    <div className="flex w-full flex-col gap-10 pt-10">
      <BoardHero board={boardDetail} />
      <ActivityPostListSection boardId={Number(params.boardId)} />
      <CreatePostButton boardId={Number(params.boardId)} />
    </div>
  )
}

export default BoardPage
