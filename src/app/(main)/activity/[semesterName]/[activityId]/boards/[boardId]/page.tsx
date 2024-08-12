'use client'

import { BoardContent } from './_components/BoardContent'

type BoardPageParams = {
  params: {
    activityId: string
    boardId: string
  }
}

const BoardPage = ({ params }: BoardPageParams) => {
  return (
    <BoardContent
      boardId={Number(params.boardId)}
      activityId={Number(params.activityId)}
    />
  )
}

export default BoardPage
