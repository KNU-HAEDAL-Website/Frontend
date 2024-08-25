import { NavLink, PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'

export const EventPostHero = () => {
  return (
    <div>
      <Seperator variant="dark" />
      <PageBreadcrumb navLinks={EventPageNavLinks} />
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
  {
    index: 1,
    link: '/event/board',
    name: '행사 게시판',
  },
]
