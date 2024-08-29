'use client'

import { useState } from 'react'

import { Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import { useGetSemesters } from '@/service/data/semester'
import { Semester } from '@/types/activity'

import { ActivityDialog } from './ActivityDialog'
import { DeleteSemesterDialog } from './DeleteSemesterDialog'
import { SemesterSkeleton } from './SemesterSkeleton'

export const SemesterList = () => {
  const { semesters, status } = useGetSemesters()

  const [selectedSemester, setSelectedSemester] = useState<Semester>()
  const [activityDialogOpen, setActivityDialogOpen] = useState(false)
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
            <Button
              onClick={() => {
                setActivityDialogOpen(true)
                setSelectedSemester(semester)
              }}
              className="h-fit bg-transparent p-0 hover:bg-transparent"
            >
              {semester.semesterName}
            </Button>
            <Cross2Icon
              onClick={() => {
                setDeleteDialogOpen(true)
                setSelectedSemester(semester)
              }}
              className="hover:cursor-pointer hover:text-destructive"
            />
          </div>
        </div>
      ))}

      <ActivityDialog
        open={activityDialogOpen}
        setOpen={setActivityDialogOpen}
        semester={selectedSemester}
      />
      <DeleteSemesterDialog
        open={deleteDialogOpen}
        setOpen={setDeleteDialogOpen}
        semester={selectedSemester}
      />
    </div>
  )
}
