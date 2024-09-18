'use client'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import PostContent from '@/components/PostView/PostContent'
import { Spinner } from '@/components/Spinner'
import { useGetPost } from '@/service/data/post'

import { ActivityPostDetail } from './ActivityPostDetail'

type ActivityPostSectionProps = {
  boardId: number
  postId: number
}

export const ActivityPostSection = ({
  boardId,
  postId,
}: ActivityPostSectionProps) => {
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
      <ActivityPostDetail boardId={boardId} post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
