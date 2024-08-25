import { CreateNoticePostForm } from './_components/CreateNoticePostForm'
import { CreateNoticePostHero } from './_components/CreateNoticePostHero'

const CreateNoticePost = () => {
  return (
    <div className="flex flex-col gap-6">
      <CreateNoticePostHero />
      <CreateNoticePostForm />
    </div>
  )
}

export default CreateNoticePost
