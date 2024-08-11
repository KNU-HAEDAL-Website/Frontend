'use client'

import { useActivityStore } from '~activity/_store/activity'

import { BoardContent } from './_components/BoardContent'

type BoardPageParams = {
  params: { boardId: string }
}

const BoardPage = ({ params }: BoardPageParams) => {
  const currentActivity = useActivityStore((state) => state.currentActivity)

  if (!currentActivity) return <div>에러 처리</div>

  return (
    <BoardContent
      boardId={Number(params.boardId)}
      activityId={currentActivity.activityId}
    />
  )
}

export default BoardPage
