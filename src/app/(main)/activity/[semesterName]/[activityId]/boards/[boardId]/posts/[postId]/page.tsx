import { ActivityPostSection } from './_components/ActivityPostSection'

type PostPageParams = {
  params: {
    postId: string
  }
}

const PostPage = ({ params }: PostPageParams) => {
  return (
    <div className="pt-10">
      <ActivityPostSection postId={Number(params.postId)} />
    </div>
  )
}

export default PostPage
