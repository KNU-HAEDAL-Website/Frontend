import { NoticePostHero } from './_components/NotciePostHero'
import { NoticePostSection } from './_components/NoticePostSection'

type NoticePostPageParams = {
  params: {
    postId: string
  }
}

const NoticePostPage = ({ params }: NoticePostPageParams) => {
  return (
    <div>
      <NoticePostHero />
      <NoticePostSection postId={Number(params.postId)} />
    </div>
  )
}

export default NoticePostPage
