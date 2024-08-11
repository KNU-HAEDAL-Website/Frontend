import Link from 'next/link'

import { Button } from '@/components/ui/button'

type CreatePostButtonProps = {
  boardId: number
}

export const CreatePostButton = ({ boardId }: CreatePostButtonProps) => {
  return (
    <div className="mb-20 flex justify-end">
      <Link href={`/activity/boards/${boardId}/create-post`}>
        <Button className="max-w-fit">게시글 생성하기</Button>
      </Link>
    </div>
  )
}
