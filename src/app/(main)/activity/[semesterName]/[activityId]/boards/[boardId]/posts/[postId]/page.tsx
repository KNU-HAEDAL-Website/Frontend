import { Suspense } from 'react'

import { ActivityPostHero } from './_components/ActivityPostHero'
import { ActivityPostSection } from './_components/ActivityPostSection'

type PostPageParams = {
  params: {
    activityId: string
    boardId: string
    postId: string
  }
}

const PostPage = ({ params }: PostPageParams) => {
  return (
    <div className="pt-10">
      <Suspense fallback={<div>loading...</div>}>
        <ActivityPostHero
          activityId={Number(params.activityId)}
          boardId={Number(params.boardId)}
        />
        <ActivityPostSection postId={Number(params.postId)} />
      </Suspense>
    </div>
  )
}

export default PostPage
