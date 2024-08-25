import { EventHero } from './_components/EventHero'
import { EventSliderSection } from './_components/EventSliderSection'

const EventPage = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center gap-10 pb-20">
      <EventHero />
      <div className="flex w-full items-center justify-center gap-2 px-20">
        <EventSliderSection />
      </div>
    </div>
  )
}

export default EventPage
