'use client'

import dynamic from 'next/dynamic'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import { PostDetail } from '@/components/PostView/PostDetail'
import { useGetPost } from '@/service/data/post'

const PostContent = dynamic(() => import('@/components/PostView/PostContent'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})

type ActivityPostSectionProps = {
  postId: number
}

export const ActivityPostSection = ({ postId }: ActivityPostSectionProps) => {
  const { data: post, status } = useGetPost({ postId })

  if (status === 'pending') return <div>loading...</div>

  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <PostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
