import { Seperator } from '@/components/ui/seperator'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

export const CreateBoardHero = () => {
  return (
    <div>
      <Seperator className="bg-primary/40" />
      <ActivityBreadcrumb navLinks={[]} pageName="게시판 생성하기" />
      <Seperator className="bg-primary/40" />
    </div>
  )
}
