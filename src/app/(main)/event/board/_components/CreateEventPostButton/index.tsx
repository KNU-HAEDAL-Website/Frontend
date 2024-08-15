'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

export const CreateEventPostButton = () => {
  const pathName = usePathname()

  return (
    <Link href={`${pathName}/create-post`}>
      <Button>게시글 작성하기</Button>
    </Link>
  )
}
