'use client'

import { usePathname } from 'next/navigation'

import { NavLink } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'
import { useCurrentBoardDetail } from '@/service/data/boards'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

type CreatePostHeroProps = {
  activityId: number
  boardId: number
}

export const CreatePostHero = ({
  activityId,
  boardId,
}: CreatePostHeroProps) => {
  const pathName = usePathname()

  const boardPath = pathName.split('/').slice(0, -1).join('/')
  const currentBoard = useCurrentBoardDetail({ activityId, boardId })

  const navLinks: NavLink[] = [
    {
      link: `${boardPath}`,
      name: `${currentBoard.boardName} 게시판`,
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
