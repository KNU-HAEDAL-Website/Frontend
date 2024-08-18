'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import { Seperator } from '@/components/ui/seperator'
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

  const { data } = useSuspenseQuery(boardDetailQuery(activityId, boardId))

  if (!data) return <div>loading</div>

  const navLinks = [
    {
      link: `${basePath}`,
      name: `${data.boardName} 게시판`,
    },
  ]

  return (
    <div className="flex flex-col">
      <Seperator variant="dark" />
      <ActivityBreadcrumb navLinks={navLinks} />
      <Seperator variant="dark" />
    </div>
  )
}
