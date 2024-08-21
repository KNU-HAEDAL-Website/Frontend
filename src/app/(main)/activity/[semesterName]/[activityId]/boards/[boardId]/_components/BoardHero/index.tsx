import { useQuery } from '@tanstack/react-query'

import { Seperator } from '@/components/ui/seperator'
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
      <Seperator variant="dark" />
      <ActivityBreadcrumb
        navLinks={[]}
        pageName={`${boardDetail.boardName} 게시판`}
      />
      <BoardDetail board={boardDetail} />
      <Seperator variant="dark" />
    </div>
  )
}
