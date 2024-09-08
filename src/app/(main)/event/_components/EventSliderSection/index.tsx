'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useGetPostsSlider } from '@/service/data/post'

import { CardSkeleton } from './CardSkeleton'
import { EventCarousel } from './EventCarousel'

export const EventSliderSection = () => {
  const { data, status } = useGetPostsSlider({})

  if (status === 'pending' || !data?.posts.length)
    return (
      <div>
        <CardSkeleton />
        <div className="flex w-full justify-end pr-4">
          <Link href="/event/board">
            <Button variant="link" className="h-fit p-0 text-primary/60">
              더보기
            </Button>
          </Link>
        </div>
      </div>
    )

  return <EventCarousel posts={data.posts} />
}
