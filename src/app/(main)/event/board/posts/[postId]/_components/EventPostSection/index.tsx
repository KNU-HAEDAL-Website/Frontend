'use client'

import dynamic from 'next/dynamic'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import { PostDetail } from '@/components/PostView/PostDetail'
import { useGetPost } from '@/service/data/post'

type EventPostSectionProps = {
  postId: number
}

const PostContent = dynamic(() => import('@/components/PostView/PostContent'), {
  ssr: false,
  loading: () => <div>loading...</div>,
})

export const EventPostSection = ({ postId }: EventPostSectionProps) => {
  const { data: post } = useGetPost({ postId })

  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <PostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
