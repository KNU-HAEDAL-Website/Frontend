import { EventCarousel } from './_components/EventCarousel'
import { EventHero } from './_components/EventHero'

const EventPage = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center gap-10 pb-20">
      <EventHero />
      <div className="flex items-center justify-center gap-2 px-20">
        <EventCarousel />
      </div>
    </div>
  )
}

export default EventPage
