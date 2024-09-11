import { Suspense } from 'react'

import { CreateEventPostButton } from './_components/CreateEventPostButton'
import { EventBoardHero } from './_components/EventBoardHero'
import { EventPostListSection } from './_components/EventPostListSection'

const EventBoardPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <EventBoardHero />
      <Suspense>
        <EventPostListSection />
      </Suspense>
      <div className="flex w-full justify-end">
        <CreateEventPostButton />
      </div>
    </div>
  )
}

export default EventBoardPage
