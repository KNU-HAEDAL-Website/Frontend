import { useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useMyInfoStore } from '@/store/myInfo'

export const CreateBoardButton = () => {
  const pathName = usePathname()
  const router = useRouter()

  const { role } = useMyInfoStore((state) => state.getMyInfo())
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setDisabled(!(role === '해구르르' || role === '팀장'))
  }, [role])

  return (
    <div className="mb-20 flex w-full justify-end">
      <Button
        className="max-w-fit"
        onClick={() => router.push(`${pathName}/create-board`)}
        disabled={disabled}
      >
        게시판 생성하기
      </Button>
    </div>
  )
}
