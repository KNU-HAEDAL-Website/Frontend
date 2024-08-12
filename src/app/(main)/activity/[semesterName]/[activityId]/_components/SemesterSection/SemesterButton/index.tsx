import { PaginationLink } from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { Semester } from '@/types/activity'

type SemesterButtonProps = {
  semester: Semester
  currentSemester: Semester
}

export const SemesterButton = ({
  semester,
  currentSemester,
}: SemesterButtonProps) => {
  const isActive = currentSemester?.semesterName === semester.semesterName

  return (
    <PaginationLink
      href={`/activity/${semester.semesterName}`}
      isActive={isActive}
      className={cn(!isActive && 'text-primary/60')}
    >
      {semester.semesterName}
    </PaginationLink>
  )
}
