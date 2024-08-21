'use client'

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
  return (
    <div className="flex w-full flex-col gap-10 pt-10">
      <BoardHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <ActivityPostListSection boardId={Number(params.boardId)} />
      <CreatePostButton />
    </div>
  )
}

export default BoardPage
