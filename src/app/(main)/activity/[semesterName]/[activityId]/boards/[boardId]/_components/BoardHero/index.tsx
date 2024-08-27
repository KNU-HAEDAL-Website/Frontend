import { useQuery } from '@tanstack/react-query'

import { Separator } from '@/components/ui/separator'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { boardDetailQuery } from '@/service/data/boards'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

import { BoardDetail } from './BoardDetail'
import { BoardHeroSkeleton } from './BoardHeroSkeleton'

type BoardHeroProps = {
  activityId: number
  boardId: number
}

export const BoardHero = ({ boardId, activityId }: BoardHeroProps) => {
  const { data: boardDetail, status } = useQuery(
    boardDetailQuery(activityId, boardId),
  )

  if (status === 'pending') return <BoardHeroSkeleton />
  if (!boardDetail) throw new Error(DATA_ERROR_MESSAGES.BOARD_DETAIL_NOT_FOUND)

  return (
    <div className="flex flex-col">
      <Separator variant="dark" />
      <ActivityBreadcrumb
        navLinks={[]}
        pageName={`${boardDetail.boardName} 게시판`}
      />
      <BoardDetail board={boardDetail} />
      <Separator variant="dark" />
    </div>
  )
}
