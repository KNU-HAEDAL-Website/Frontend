import { CreateEventPostButton } from './_components/CreateEventPostButton'
import { EventBoardHero } from './_components/EventBoardHero'
import { EventPost } from './_components/EventPost'

const EventBoardPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <EventBoardHero />
      <EventPost />
      <div className="flex w-full justify-end">
        <CreateEventPostButton />
      </div>
    </div>
  )
}

export default EventBoardPage
