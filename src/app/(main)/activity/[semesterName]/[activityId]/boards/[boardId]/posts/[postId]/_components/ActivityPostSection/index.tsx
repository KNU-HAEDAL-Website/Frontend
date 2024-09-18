'use client'

import dynamic from 'next/dynamic'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import { useGetPost } from '@/service/data/post'

import { ActivityPostDetail } from './ActivityPostDetail'

const PostContent = dynamic(() => import('@/components/PostView/PostContent'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})

type ActivityPostSectionProps = {
  boardId: number
  postId: number
}

export const ActivityPostSection = ({
  boardId,
  postId,
}: ActivityPostSectionProps) => {
  const { data: post, status } = useGetPost({ postId })

  if (status === 'pending') return <div>loading...</div>

  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <ActivityPostDetail boardId={boardId} post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
