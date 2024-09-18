'use client'

import dynamic from 'next/dynamic'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import { Spinner } from '@/components/Spinner'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetPost } from '@/service/data/post'

import { EventPostDetail } from './EventPostDetail'

type EventPostSectionProps = {
  postId: number
}

const PostContent = dynamic(() => import('@/components/PostView/PostContent'), {
  ssr: false,
  loading: () => <Skeleton className="h-60 w-full bg-slate-50" />,
})

export const EventPostSection = ({ postId }: EventPostSectionProps) => {
  const { data: post, status } = useGetPost({ postId })

  if (status === 'pending')
    return (
      <div className="flex justify-center pt-10">
        <Spinner />
      </div>
    )

  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <EventPostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
