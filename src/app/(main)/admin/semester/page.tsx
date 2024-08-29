import { Separator } from '@/components/ui/separator'

import { ActivitySection } from './ActivitySection'
import { SemesterSection } from './SemesterSection'

const AdminSemesterPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <SemesterSection />
      <div className="px-6">
        <Separator className="mb-4 mt-10" />
      </div>
      <ActivitySection />
    </div>
  )
}

export default AdminSemesterPage
