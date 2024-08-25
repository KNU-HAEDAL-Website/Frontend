import { NavLink, PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'

export const CreateNoticePostHero = () => {
  return (
    <div>
      <Seperator variant="dark" />
      <PageBreadcrumb
        navLinks={CreateNoticePostPageNavLinks}
        pageName="공지사항 생성하기"
      />
      <Seperator variant="dark" />
    </div>
  )
}

const CreateNoticePostPageNavLinks: NavLink[] = [
  {
    index: 0,
    link: '/notice',
    name: '공지사항 게시판',
  },
]
