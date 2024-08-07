import Image from 'next/image'

import { NameLabel } from '@/components/NameLabel'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

type ActivityBoardsProps = {
  activityId: number
}

export const ActivityBoards = ({ activityId }: ActivityBoardsProps) => {
  return (
    <div className="grid w-screen grid-cols-1 place-items-center gap-10 px-12 sm:grid-cols-2 sm:px-20 md:max-w-screen-lg md:grid-cols-1">
      {testData.map((board) => (
        <Card
          key={board.boardId}
          className="flex w-full cursor-pointer flex-col rounded-none border-none md:flex-row"
        >
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
          <div className="flex flex-col">
            <div className="flex flex-row gap-4 px-6 py-2 sm:flex-col sm:items-start sm:gap-2 lg:flex-row lg:gap-4">
              <CardTitle className="text-md md:text-lg">
                {board.boardName}
              </CardTitle>
              <div className="flex items-center gap-1">
                <NameLabel name={board.participants[0].userName + ' +6'} />
              </div>
            </div>
            <CardContent className="text-xs text-primary/70 md:text-sm">
              {board.boardIntro}
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}

const testData = [
  {
    boardId: 0,
    boardName: '게시판 테스트',
    boardIntro: '안녕하세요~',
    boardImageUrl: 'https://picsum.photos/300',
    participants: [
      {
        participantId: 0,
        userId: 0,
        userName: '김아진',
      },
    ],
    activityId: 0,
  },
  {
    boardId: 1,
    boardName: '웹 아장아장',
    boardIntro: '안녕하세요~',
    boardImageUrl: 'https://picsum.photos/300',
    participants: [
      {
        participantId: 1,
        userId: 1,
        userName: '조대성',
      },
    ],
    activityId: 0,
  },
]
