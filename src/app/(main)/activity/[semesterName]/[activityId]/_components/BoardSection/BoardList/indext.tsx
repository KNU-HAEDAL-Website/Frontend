import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NameLabel } from '@/components/NameLabel'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Board } from '@/types/activity'

type BoardListProps = {
  boards: Board[]
}

export const BoardList = ({ boards }: BoardListProps) => {
  const pathName = usePathname()

  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-1">
      {boards.map((board) => (
        <Link
          key={board.boardId}
          href={`${pathName}/boards/${board.boardId}`}
          className="w-full"
        >
          <Card className="flex w-full flex-col rounded-none border-none md:flex-row">
            <div className="flex aspect-video h-auto w-full items-center justify-center overflow-hidden md:max-w-96">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
                src={board.boardImageUrl}
                alt={board.boardName}
              />
            </div>
            <div className="flex min-w-fit flex-col md:min-w-80">
              <div className="flex flex-row gap-4 px-6 py-2 sm:flex-col sm:items-start sm:gap-2 lg:flex-row lg:gap-4">
                <CardTitle className="text-md md:text-lg">
                  {board.boardName}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-1">
                  {board.participants.map((participant) => (
                    <NameLabel
                      className="min-w-fit"
                      key={participant.userId}
                      name={participant.userName}
                    />
                  ))}
                </div>
              </div>
              <CardContent className="text-xs text-primary/70 md:text-sm">
                {board.boardIntro}
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
