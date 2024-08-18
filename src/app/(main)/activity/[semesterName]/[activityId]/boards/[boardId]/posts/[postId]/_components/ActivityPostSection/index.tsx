'use client'

import { PostContent } from '@/components/PostView/PostContent'
import { PostDetail } from '@/components/PostView/PostDetail'
import { useGetPost } from '@/service/data/post'

type ActivityPostSectionProps = {
  postId: number
}

export const ActivityPostSection = ({ postId }: ActivityPostSectionProps) => {
  const { data: post, status } = useGetPost({ postId })

  if (status === 'pending') return <div>loading</div>
  if (!post) return <div>게시글 정보가 없습니다.</div>

  return (
    <div>
      <PostDetail post={post} />
      <PostContent content={post?.postContent} />
    </div>
  )
}
