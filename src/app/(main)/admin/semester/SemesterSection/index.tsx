import { AdminLayout } from '~admin/_components/AdminLayout'

import { AddSemesterDialog } from './AddSemesterDialog'
import { SemesterList } from './SemesterList'

export const SemesterSection = () => {
  return (
    <AdminLayout title="학기 관리">
      <div className="flex flex-row gap-2">
        <div className="h-9 w-9">
          <AddSemesterDialog />
        </div>
        <div className="scroll flex flex-row gap-1 overflow-x-auto scrollbar-hide">
          <SemesterList />
        </div>
      </div>
    </AdminLayout>
  )
}
