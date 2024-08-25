import { NavLink, PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'

export const NoticePostHero = () => {
  return (
    <div>
      <Seperator variant="dark" />
      <PageBreadcrumb navLinks={NoticePostPageNavLinks} />
      <Seperator variant="dark" />
    </div>
  )
}

const NoticePostPageNavLinks: NavLink[] = [
  {
    index: 0,
    link: '/notice',
    name: '공지사항 게시판',
  },
]
