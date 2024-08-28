'use client'

import { useState } from 'react'

import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
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
          <Button className="flex gap-2 rounded-full">
            <div>{semester.semesterName}</div>
            <Cross2Icon
              onClick={() => {
                setDeleteDialogOpen(true)
                setSelectedSemester(semester)
              }}
              className="hover:text-destructive"
            />
          </Button>
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
