import { CreateEventPostForm } from './_components/CreateEventPostForm'
import { CreateEventPostHero } from './_components/CreateEventPostHero'

const CreateEventPost = () => {
  return (
    <div className="flex flex-col gap-6">
      <CreateEventPostHero />
      <CreateEventPostForm />
    </div>
  )
}

export default CreateEventPost
