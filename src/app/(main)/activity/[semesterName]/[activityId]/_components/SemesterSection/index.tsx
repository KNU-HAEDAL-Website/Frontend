'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { useCurrentSemester, useGetSemesters } from '@/service/data/semester'
import { Semester } from '@/types/activity'

import { SemesterSkeleton } from '../../../_components/SemesterSkeleton'
import { SemesterButton } from './SemesterButton'

type SemesterSectionProps = {
  semesterName: string
}

export const SemesterSection = ({ semesterName }: SemesterSectionProps) => {
  const { semesters } = useGetSemesters()
  const currentSemester = useCurrentSemester(semesterName)

  if (!currentSemester) return <SemesterSkeleton />

  const previousIndex = Math.max((currentSemester.index ?? 0) - 1, 0)
  const nextIndex = Math.min(
    (currentSemester.index ?? semesters.length - 1) + 1,
    semesters.length - 1,
  )

  const visibleSemesters = getVisibleSemesterList(semesters, currentSemester)

  return (
    <Pagination className="pt-3">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/activity/${semesters[previousIndex].semesterName}`}
            disabled={currentSemester?.index === 0}
          />
        </PaginationItem>
        <PaginationItem>
          {visibleSemesters?.map((semester) => (
            <SemesterButton
              key={semester.semesterId}
              semester={semester}
              currentSemester={currentSemester}
            />
          ))}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`/activity/${semesters[nextIndex].semesterName}`}
            disabled={currentSemester?.index === semesters.length - 1}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const getVisibleSemesterList = (
  semesters: Semester[],
  currentSemester?: Semester,
) => {
  const currentIndex = currentSemester?.index ?? semesters.length - 1

  const endIndex = Math.min(semesters.length - 1, currentIndex + 1)
  const startIndex = Math.max(0, endIndex - 2)

  return semesters.slice(startIndex, startIndex + 3)
}
