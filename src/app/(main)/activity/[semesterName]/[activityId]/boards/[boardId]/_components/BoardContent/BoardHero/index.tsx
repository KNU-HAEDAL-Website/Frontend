import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'
import { Board } from '@/types/activity'

import { BoardDetail } from './BoardDetail'

type BoardHeroProps = {
  board: Board
}

export const BoardHero = ({ board }: BoardHeroProps) => {
  return (
    <div className="flex flex-col">
      <Seperator className="bg-primary/40" />
      <PageBreadcrumb
        navLinks={navLinks}
        pageName={`${board.boardName} 게시판`}
      />
      <BoardDetail board={board} />
      <Seperator className="bg-primary/40" />
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
