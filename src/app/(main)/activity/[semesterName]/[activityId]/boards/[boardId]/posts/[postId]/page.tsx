'use client'

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
      <ActivityPostHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <ActivityPostSection
        boardId={Number(params.boardId)}
        postId={Number(params.postId)}
      />
    </div>
  )
}

export default PostPage
