import { CreateActivityPostForm } from './_components/CreateActivityPostForm'
import { CreateActivityPostHero } from './_components/CreateActivityPostHero'

type CreatePostPageParams = {
  params: {
    activityId: string
    boardId: string
  }
}

const CreateActivityPostPage = ({ params }: CreatePostPageParams) => {
  return (
    <div className="flex flex-col gap-6 py-10">
      <CreateActivityPostHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <CreateActivityPostForm boardId={Number(params.boardId)} />
    </div>
  )
}

export default CreateActivityPostPage
