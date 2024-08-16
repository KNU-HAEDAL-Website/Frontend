import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

type CreatePostButtonProps = {
  boardId: number
}

export const CreatePostButton = ({ boardId }: CreatePostButtonProps) => {
  const pathName = usePathname()

  return (
    <div className="mb-20 flex justify-end">
      <Link href={`${pathName}/create-post`}>
        <Button className="max-w-fit">게시글 생성하기</Button>
      </Link>
    </div>
  )
}