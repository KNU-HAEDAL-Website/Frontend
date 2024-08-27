import { NavLink, PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Separator } from '@/components/ui/separator'

export const NoticePostHero = () => {
  return (
    <div>
      <Separator variant="dark" />
      <PageBreadcrumb navLinks={NoticePostPageNavLinks} />
      <Separator variant="dark" />
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
