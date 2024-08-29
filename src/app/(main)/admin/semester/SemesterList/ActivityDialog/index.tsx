import { Dispatch, SetStateAction } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Semester } from '@/types/activity'

import { ActivityDialogSection } from './DialogSection'

type ActivityDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  semester?: Semester
}

export const ActivityDialog = ({
  open,
  setOpen,
  semester,
}: ActivityDialogProps) => {
  if (!semester) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-md flex gap-2">
            {semester.semesterName} 활동 관리
          </DialogTitle>
          <DialogDescription className="text-start">
            해당 학기의 활동을 추가하거나 삭제할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <ActivityDialogSection semester={semester} />
      </DialogContent>
    </Dialog>
  )
}
