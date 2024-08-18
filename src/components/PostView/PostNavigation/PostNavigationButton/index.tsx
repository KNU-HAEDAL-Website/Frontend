import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type PostNavigationButtonProps = {
  postId: number
  postTitle: string
}

export const PreviousPostNavigationButton = ({
  postId,
  postTitle,
}: PostNavigationButtonProps) => {
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  return (
    <Link
      href={`${basePath}/${postId}`}
      className="flex w-56 items-center gap-4 rounded-md bg-secondary py-3 pl-4 text-primary/90 hover:cursor-pointer hover:bg-secondary/70 hover:text-primary"
    >
      <ChevronLeftIcon className="h-5 w-5" />
      <div className="flex flex-col">
        <div className="text-sm">이전 게시글</div>
        <div className="font-semibold">{postTitle}</div>
      </div>
    </Link>
  )
}

export const NextPostNavigationButton = ({
  postId,
  postTitle,
}: PostNavigationButtonProps) => {
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -1).join('/')

  return (
    <Link
      href={`${basePath}/${postId}`}
      className="flex w-56 items-center justify-end gap-4 rounded-md bg-secondary py-3 pr-4 text-primary/90 hover:cursor-pointer hover:bg-secondary/70 hover:text-primary"
    >
      <div className="flex flex-col items-end">
        <div className="text-sm">다음 게시글</div>
        <div className="font-semibold">{postTitle}</div>
      </div>
      <ChevronRightIcon className="h-5 w-5" />
    </Link>
  )
}
