import { CreateEventPostButton } from './_components/CreateEventPostButton'
import { EventBoardHero } from './_components/EventBoardHero'

const EventBoardPage = () => {
  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-10 px-12 pb-20 pt-10 sm:px-20">
      <EventBoardHero />
      <div className="flex w-full justify-end">
        <CreateEventPostButton />
      </div>
    </div>
  )
}

export default EventBoardPage
