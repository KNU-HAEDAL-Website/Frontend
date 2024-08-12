import { NameLabel } from '@/components/NameLabel'
import { Board } from '@/types/activity'

type BoardDetailProps = {
  board: Board
}

export const BoardDetail = ({ board }: BoardDetailProps) => {
  return (
    <div className="flex flex-col gap-1 pl-1 text-primary">
      <div className="text-2xl font-semibold">{board.boardName}</div>
      <div className="flex flex-wrap gap-2">
        {board.participants?.map((user) => (
          <NameLabel key={user.participantId} name={user.userName} />
        ))}
      </div>
      <div className="py-3 text-primary/70">{board.boardIntro}</div>
    </div>
  )
}
