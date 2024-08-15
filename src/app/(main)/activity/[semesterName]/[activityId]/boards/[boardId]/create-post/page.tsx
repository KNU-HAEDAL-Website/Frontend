import { CreatePostForm } from './_components/CreatePostForm'
import { CreatePostHero } from './_components/CreatePostHero'

type CreatePostPageParams = {
  params: {
    activityId: string
    boardId: string
  }
}

const CreatePostPage = ({ params }: CreatePostPageParams) => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <CreatePostHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <CreatePostForm boardId={Number(params.boardId)} />
    </div>
  )
}

export default CreatePostPage
