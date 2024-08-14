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
    <div className="gap-10">
      <CreatePostHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <CreatePostForm />
    </div>
  )
}

export default CreatePostPage
