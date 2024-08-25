import { format } from 'date-fns'

import { Seperator } from '@/components/ui/seperator'
import { PostView } from '@/types/post'

type PostDetailProps = {
  post: PostView
}

export const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div className="flex flex-col gap-3 py-4 text-primary">
      <div className="pt-4 text-4xl font-semibold">{post.postTitle}</div>
      <div className="flex flex-col items-start gap-1 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{post.userName}</div>
          <div>·</div>
          <div className="text-primary/60">
            {format(new Date(post.postCreateDate), 'yyyy-MM-dd')}
          </div>
          <div className="text-primary/60">조회 {post.postViews}</div>
        </div>
        <div className="flex">
          <div>활동일 {post.postActivityStartDate}</div>
          {post.postActivityEndDate && <div>~{post.postActivityEndDate}</div>}
        </div>
      </div>
      <Seperator />
    </div>
  )
}

export const NoticePostDetail = ({ post }: PostDetailProps) => {
  return (
    <div className="flex flex-col gap-3 py-4 text-primary">
      <div className="py-4 text-2xl font-semibold">{post.postTitle}</div>
      <div className="flex items-center justify-between gap-2 text-sm">
        <div className="font-semibold">{post.userName}</div>
        <div className="flex gap-2">
          <div className="text-primary/60">
            {format(new Date(post.postCreateDate), 'yyyy-MM-dd')}
          </div>
          <div className="text-primary/60">조회 {post.postViews}</div>
        </div>
      </div>
      <Seperator />
    </div>
  )
}
