import { Separator } from '@/components/ui/separator'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

export const CreateBoardHero = () => {
  return (
    <div>
      <Separator variant="dark" />
      <ActivityBreadcrumb navLinks={[]} pageName="게시판 생성하기" />
      <Separator variant="dark" />
    </div>
  )
}
