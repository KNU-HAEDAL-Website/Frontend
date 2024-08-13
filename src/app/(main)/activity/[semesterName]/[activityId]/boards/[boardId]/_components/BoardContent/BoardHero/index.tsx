import { Seperator } from '@/components/ui/seperator'
import { Board } from '@/types/activity'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

import { BoardDetail } from './BoardDetail'

type BoardHeroProps = {
  board: Board
}

export const BoardHero = ({ board }: BoardHeroProps) => {
  return (
    <div className="flex flex-col">
      <Seperator variant="dark" />
      <ActivityBreadcrumb
        navLinks={[]}
        pageName={`${board.boardName} 게시판`}
      />
      <BoardDetail board={board} />
      <Seperator variant="dark" />
    </div>
  )
}

const navLinks = [
  {
    index: 0,
    link: '/activity',
    name: 'activity',
  },
]
