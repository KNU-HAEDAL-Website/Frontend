'use client'

import { useState } from 'react'

import { Cross2Icon } from '@radix-ui/react-icons'

import { useGetSemesters } from '@/service/data/semester'
import { Semester } from '@/types/activity'

import { DeleteSemesterDialog } from './DeleteSemesterDialog'
import { SemesterSkeleton } from './SemesterSkeleton'

export const SemesterList = () => {
  const { semesters, status } = useGetSemesters()

  const [selectedSemester, setSelectedSemester] = useState<Semester>()
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  if (status === 'pending') return <SemesterSkeleton />
  return (
    <div className="flex gap-2">
      {semesters.map((semester) => (
        <div
          key={semester.semesterId}
          className="flex items-center rounded-full"
        >
          <div className="flex h-9 items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow transition-colors hover:bg-primary/90">
            <div className="h-fit bg-transparent p-0 hover:cursor-default hover:bg-transparent">
              {semester.semesterName}
            </div>
            <Cross2Icon
              onClick={() => {
                setDeleteDialogOpen(true)
                setSelectedSemester(semester)
              }}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      ))}

      <DeleteSemesterDialog
        open={deleteDialogOpen}
        setOpen={setDeleteDialogOpen}
        semester={selectedSemester}
      />
    </div>
  )
}
