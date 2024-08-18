'use client'

import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import { NavLink } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { boardDetailQuery } from '@/service/data/boards'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

type CreateActivityPostHeroProps = {
  activityId: number
  boardId: number
}

export const CreateActivityPostHero = ({
  activityId,
  boardId,
}: CreateActivityPostHeroProps) => {
  const pathName = usePathname()

  const boardPath = pathName.split('/').slice(0, -1).join('/')
  const { data: boardDetail } = useQuery(boardDetailQuery(activityId, boardId))

  if (!boardDetail) throw new Error(DATA_ERROR_MESSAGES.BOARD_DETAIL_NOT_FOUND)

  const navLinks: NavLink[] = [
    {
      link: `${boardPath}`,
      name: `${boardDetail.boardName} 게시판`,
    },
  ]

  return (
    <div>
      <Seperator variant="dark" />
      <ActivityBreadcrumb navLinks={navLinks} pageName="게시글 생성하기" />
      <Seperator variant="dark" />
    </div>
  )
}
