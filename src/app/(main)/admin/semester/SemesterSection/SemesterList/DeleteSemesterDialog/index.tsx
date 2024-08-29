import { Dispatch, SetStateAction, useEffect } from 'react'

import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { semesterQuery } from '@/service/data/semester'
import { DeleteSemesterAction } from '@/service/server/semester/delete-semester'
import { Semester } from '@/types/activity'

type DeleteSemesterDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  semester?: Semester
}

export const DeleteSemesterDialog = ({
  open,
  setOpen,
  semester,
}: DeleteSemesterDialogProps) => {
  const {
    execute: deleteSemester,
    result,
    isExecuting,
  } = useAction(DeleteSemesterAction)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (result.data?.isSuccess) {
      toast({
        title: result.data.message,
        duration: 2000,
      })

      const { queryKey } = semesterQuery()

      queryClient.invalidateQueries({ queryKey })

      setOpen(false)

      return
    }

    if (result.data?.action === 'login') {
      toast({
        title: result.data?.message,
        action: (
          <ToastAction
            onClick={() => router.push('/auth/login')}
            altText="로그인하기"
          >
            로그인하기
          </ToastAction>
        ),
      })
      return
    }

    if (result.data?.message) {
      toast({
        title: result.data.message,
      })
    }
  }, [result, toast, router, setOpen])

  if (!semester) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-md flex gap-2">
            정말 {semester.semesterName} 학기를 삭제하시겠어요?
          </DialogTitle>
          <DialogDescription className="text-start">
            삭제하기 버튼 선택 시, 해당 학기의 모든 활동 정보는 삭제되며
            복구되지 않습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button onClick={() => setOpen(false)} variant="secondary">
            취소하기
          </Button>
          <Button
            variant="destructive"
            onClick={() => deleteSemester({ semesterId: semester.semesterId })}
            disabled={isExecuting}
          >
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
