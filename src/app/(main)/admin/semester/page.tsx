import { ActivitySection } from './ActivitySection'
import { SemesterSection } from './SemesterSection'

const AdminSemesterPage = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <SemesterSection />
      <ActivitySection />
    </div>
  )
}

export default AdminSemesterPage
