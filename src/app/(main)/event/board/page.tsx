import { CreateEventPostButton } from './_components/CreateEventPostButton'
import { EventBoardHero } from './_components/EventBoardHero'
import { EventPostSection } from './_components/EventPostSection'

const EventBoardPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <EventBoardHero />
      <EventPostSection />
      <div className="flex w-full justify-end">
        <CreateEventPostButton />
      </div>
    </div>
  )
}

export default EventBoardPage
