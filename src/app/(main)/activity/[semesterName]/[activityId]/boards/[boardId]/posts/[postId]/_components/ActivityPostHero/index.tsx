'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import { Separator } from '@/components/ui/separator'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { boardDetailQuery } from '@/service/data/boards'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

type ActivityPostHeroProps = {
  activityId: number
  boardId: number
}

export const ActivityPostHero = ({
  activityId,
  boardId,
}: ActivityPostHeroProps) => {
  const pathName = usePathname()
  const basePath = pathName.split('/').slice(0, -2).join('/')

  const { data: boardDetail } = useSuspenseQuery(
    boardDetailQuery(activityId, boardId),
  )

  if (!boardDetail) throw new Error(DATA_ERROR_MESSAGES.BOARD_DETAIL_NOT_FOUND)

  const navLinks = [
    {
      link: `${basePath}`,
      name: `${boardDetail.boardName} 게시판`,
    },
  ]

  return (
    <div className="flex flex-col">
      <Separator variant="dark" />
      <ActivityBreadcrumb navLinks={navLinks} />
      <Separator variant="dark" />
    </div>
  )
}
