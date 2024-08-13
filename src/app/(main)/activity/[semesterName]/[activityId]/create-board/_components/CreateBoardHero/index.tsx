import { Seperator } from '@/components/ui/seperator'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

export const CreateBoardHero = () => {
  return (
    <div>
      <Seperator variant="dark" />
      <ActivityBreadcrumb navLinks={[]} pageName="게시판 생성하기" />
      <Seperator variant="dark" />
    </div>
  )
}
