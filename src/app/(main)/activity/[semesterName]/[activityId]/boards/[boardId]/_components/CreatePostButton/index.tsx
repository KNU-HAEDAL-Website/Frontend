'use client'

import { useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useMyInfoStore } from '@/store/myInfo'
import { Role } from '@/types/user'

export const CreatePostButton = () => {
  const pathName = usePathname()
  const router = useRouter()

  const { role } = useMyInfoStore((state) => state.getMyInfo())
  const [isAble, setisAble] = useState(false)

  useEffect(() => {
    setisAble(role?.includes(role as Role) ?? false)
  }, [role])

  return (
    <div className="mb-20 flex justify-end">
      <Button
        onClick={() => router.push(`${pathName}/create-post`)}
        disabled={!isAble}
        className="max-w-fit"
      >
        게시글 생성하기
      </Button>
    </div>
  )
}
