'use client'

import { useGetPostsSlider } from '@/service/data/post'

import { CardSkeleton } from './CardSkeleton'
import { EventCarousel } from './EventCarousel'

export const EventSliderSection = () => {
  const { data, status } = useGetPostsSlider({})

  if (status === 'pending') return <CardSkeleton />
  if (!data?.posts.length) return <div>게시글이 없습니다.</div>

  return <EventCarousel posts={data.posts} />
}
