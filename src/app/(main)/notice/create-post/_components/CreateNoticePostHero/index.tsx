import { NavLink, PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Separator } from '@/components/ui/separator'

export const CreateNoticePostHero = () => {
  return (
    <div>
      <Separator variant="dark" />
      <PageBreadcrumb
        navLinks={CreateNoticePostPageNavLinks}
        pageName="공지사항 생성하기"
      />
      <Separator variant="dark" />
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
