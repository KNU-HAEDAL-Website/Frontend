'use client'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import PostContent from '@/components/PostView/PostContent'
import { NoticePostDetail } from '@/components/PostView/PostDetail'
import { useGetPost } from '@/service/data/post'

type NoticePostSectionProps = {
  postId: number
}

export const NoticePostSection = ({ postId }: NoticePostSectionProps) => {
  const { data: post, status } = useGetPost({ postId })

  if (status === 'pending') return <div>loading...</div>

  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <NoticePostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
