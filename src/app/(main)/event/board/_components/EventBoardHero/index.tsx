import { NavLink, PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'

import { EventBoardDetail } from './EventBoardDetail'

export const EventBoardHero = () => {
  return (
    <div className="flex w-full flex-col">
      <Seperator variant="dark" />
      <PageBreadcrumb navLinks={EventPageNavLinks} pageName="행사 게시판" />
      <EventBoardDetail />
      <Seperator variant="dark" />
    </div>
  )
}

const EventPageNavLinks: NavLink[] = [
  {
    index: 0,
    link: '/event',
    name: '행사 갤러리',
  },
]
