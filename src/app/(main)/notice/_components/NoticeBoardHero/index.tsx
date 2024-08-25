import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'

export const NoticeBoardHero = () => {
  return (
    <div className="flex w-full flex-col">
      <Seperator variant="dark" />
      <PageBreadcrumb navLinks={[]} pageName="공지사항 게시판" />
      <Seperator variant="dark" />
    </div>
  )
}
