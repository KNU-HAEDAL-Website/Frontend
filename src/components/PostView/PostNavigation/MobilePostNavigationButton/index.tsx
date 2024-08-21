import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

type MobilePostNavigationButtonProps = {
  postId?: number
}

export const MobilePreviousPostNavigationButton = ({
  postId,
}: MobilePostNavigationButtonProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  return (
    <Button
      variant="secondary"
      onClick={() => router.push(`${basePath}/${postId}`)}
      disabled={!postId}
      className="frounded-full rounded-full p-2"
    >
      <ChevronLeftIcon className="h-6 w-6" />
    </Button>
  )
}

export const MobileNextPostNavigationButton = ({
  postId,
}: MobilePostNavigationButtonProps) => {
  const router = useRouter()
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  return (
    <Button
      variant="secondary"
      onClick={() => router.push(`${basePath}/${postId}`)}
      disabled={!postId}
      className="frounded-full rounded-full p-2"
    >
      <ChevronRightIcon className="h-6 w-6" />
    </Button>
  )
}
