import { BoardHero } from './_components/BoardHero'

type BoardPageParams = {
  params: { boardId: string }
}

const BoardPage = ({ params }: BoardPageParams) => {
  return (
    <div className="w-full px-8 pt-10 md:px-20">
      <BoardHero board={testBoardData} />
    </div>
  )
}

export default BoardPage

const testBoardData = {
  boardId: 4,
  boardName: '테스트',
  boardIntro: '이 게시판에 대한 소개글2',
  boardImageUrl:
    'https://haedal-image-storage.s3.ap-northeast-2.amazonaws.com/boards/ed0fbe73-8e0f-4172-b643-7a630bc69f78?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240811T061236Z&X-Amz-SignedHeaders=host&X-Amz-Credential=AKIA3FLDZIFWQ55PBZOY%2F20240811%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Expires=600&X-Amz-Signature=102220f2c2167b70a4dc52b7c1a788e11fc5eff5c811ea6b769b0bef0c71d2ca',
  participants: [
    {
      participantId: 8,
      userId: 'admin11',
      userName: '쪼대성',
    },
    {
      participantId: 9,
      userId: 'admin123',
      userName: '킴아진',
    },
    {
      participantId: 10,
      userId: 'admin1234',
      userName: '조대성',
    },
  ],
  activityId: 1,
}
