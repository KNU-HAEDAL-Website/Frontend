import { AdminLayout } from '~admin/_components/AdminLayout'

import { AddSemesterDialog } from './AddSemesterDialog'

const AdminSemesterPage = () => {
  return (
    <AdminLayout title="학기 관리">
      <div className="flex flex-row gap-2">
        <AddSemesterDialog />
        <div className="flex flex-row gap-1 overflow-x-auto">학기 목록</div>
      </div>
    </AdminLayout>
  )
}

export default AdminSemesterPage
