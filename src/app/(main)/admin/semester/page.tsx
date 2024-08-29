import { Separator } from '@/components/ui/separator'

import { ActivitySection } from './ActivitySection'
import { SemesterSection } from './SemesterSection'

const AdminSemesterPage = () => {
  return (
    <div className="w-full">
      <SemesterSection />
      <div className="px-20">
        <Separator className="mb-4 mt-10" />
      </div>
      <ActivitySection />
    </div>
  )
}

export default AdminSemesterPage
