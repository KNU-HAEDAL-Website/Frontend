import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export const BoardNavigationButton = () => {
  const router = useRouter()

  return (
    <div className="flex justify-end">
      <Button onClick={router.back} variant="link">
        <div>게시판으로 이동하기</div>
        <ArrowRightIcon />
      </Button>
    </div>
  )
}
