import { CreateNoticePostButton } from './_components/CreateNoticePostButton'
import { NoticeBoardHero } from './_components/NoticeBoardHero'
import { NoticePostListSection } from './_components/NoticePostListSection'

const NoticeBoardPage = () => {
  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-10 px-12 pb-20 pt-10 sm:px-20">
      <NoticeBoardHero />
      <NoticePostListSection />
      <div className="flex w-full justify-end">
        <CreateNoticePostButton />
      </div>
    </div>
  )
}

export default NoticeBoardPage
