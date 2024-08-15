import { EventCarousel } from './_components/EventCarousel'

const EventPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-20 sm:max-w-screen-xl">
      <EventCarousel />
    </div>
  )
}

export default EventPage
