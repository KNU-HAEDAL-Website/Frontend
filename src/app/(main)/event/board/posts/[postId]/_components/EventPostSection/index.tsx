'use client'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import PostContent from '@/components/PostView/PostContent'
import { Spinner } from '@/components/Spinner'
import { useGetPost } from '@/service/data/post'

import { EventPostDetail } from './EventPostDetail'

type EventPostSectionProps = {
  postId: number
}

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
