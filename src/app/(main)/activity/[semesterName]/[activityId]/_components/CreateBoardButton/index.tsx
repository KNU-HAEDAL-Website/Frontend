import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

export const CreateBoardButton = () => {
  const pathName = usePathname()

  return (
    <div className="mb-20 flex w-full justify-end">
      <Link href={`${pathName}/create-board`}>
        <Button className="max-w-fit">게시판 생성하기</Button>
      </Link>
    </div>
  )
}
