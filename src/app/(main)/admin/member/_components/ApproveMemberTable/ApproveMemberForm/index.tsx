import { useEffect } from 'react'

import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import {
  approveMemberAction,
  rejectMemberAction,
} from '@/service/server/user/approve-member'

type ApproveMemberFormProps = {
  userId: string
}

export const ApproveMemberForm = ({ userId }: ApproveMemberFormProps) => {
  const {
    execute: approveMember,
    result: resultApprove,
    isExecuting: isExecutingApprove,
  } = useAction(approveMemberAction)

  const {
    execute: rejectMember,
    result: resultReject,
    isExecuting: isExecutingReject,
  } = useAction(rejectMemberAction)

  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const result = resultApprove.data ?? resultReject.data

    if (result?.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] })

      toast({
        title: result.message,
        duration: 1000,
      })

      return
    }

    if (result?.action === 'login') {
      toast({
        title: result.message,
        duration: 2000,
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

    if (result) {
      toast({
        title: result.message,
        duration: 2000,
      })
    }
  }, [resultApprove, resultReject, toast, router])

  return (
    <div className="flex gap-3">
      <Button
        onClick={() => approveMember({ userId })}
        disabled={isExecutingApprove || isExecutingReject}
        className="h-fit w-14 py-1.5"
      >
        수락
      </Button>
      <Button
        variant="secondary"
        onClick={() => rejectMember({ userId })}
        disabled={isExecutingApprove || isExecutingReject}
        className="h-fit w-14 py-1.5 hover:bg-primary/5"
      >
        거절
      </Button>
    </div>
  )
}
