import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { Seperator } from '@/components/ui/seperator'

export const CreateBoardHero = () => {
  return (
    <div>
      <Seperator className="bg-primary/40" />
      <PageBreadcrumb navLinks={navLinks} pageName="게시판 생성하기" />
      <Seperator className="bg-primary/40" />
    </div>
  )
}

const navLinks = [
  {
    index: 0,
    link: '/activity',
    name: 'activity',
  },
]
