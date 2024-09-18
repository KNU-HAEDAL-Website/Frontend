'use client'

import { BoardNavigationButton } from '@/components/PostView/BoardNavigationButton'
import PostContent from '@/components/PostView/PostContent'
import { Spinner } from '@/components/Spinner'
import { useGetPost } from '@/service/data/post'

import { NoticePostDetail } from './NoticePostDetail'

type NoticePostSectionProps = {
  postId: number
}

export const NoticePostSection = ({ postId }: NoticePostSectionProps) => {
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
      <NoticePostDetail post={post} />
      <PostContent content={post.postContent} />
      <BoardNavigationButton />
    </div>
  )
}
