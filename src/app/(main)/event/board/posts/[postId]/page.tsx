'use client'

import { Suspense } from 'react'

import { EventPostHero } from './_components/EventPostHero'
import { EventPostSection } from './_components/EventPostSection'

type EventPostPageParams = {
  params: {
    postId: string
  }
}

const EventPostPage = ({ params }: EventPostPageParams) => {
  return (
    <div>
      <EventPostHero />
      <Suspense fallback={<div>loading...</div>}>
        <EventPostSection postId={Number(params.postId)} />
      </Suspense>
    </div>
  )
}

export default EventPostPage
