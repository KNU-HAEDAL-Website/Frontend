import { CreateNoticePostButton } from './_components/CreateNoticePostButton'
import { NoticeBoardHero } from './_components/NoticeBoardHero'
import { NoticePostListSection } from './_components/NoticePostListSection'

const NoticeBoardPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <NoticeBoardHero />
      <NoticePostListSection />
      <div className="flex w-full justify-end">
        <CreateNoticePostButton />
      </div>
    </div>
  )
}

export default NoticeBoardPage
