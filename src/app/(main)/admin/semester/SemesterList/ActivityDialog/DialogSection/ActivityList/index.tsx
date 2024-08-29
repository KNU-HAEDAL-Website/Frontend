import { useEffect } from 'react'

import { Cross2Icon } from '@radix-ui/react-icons'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next/navigation'

import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { activitiesQuery } from '@/service/data/activity'
import { DeleteAcivityAction } from '@/service/server/activity/delete-activity'
import { Activity } from '@/types/activity'

type ActivityListProps = {
  semesterId: number
  activities?: Activity[]
}

export const ActivityList = ({ semesterId, activities }: ActivityListProps) => {
  const { execute: deleteActivity, result } = useAction(DeleteAcivityAction)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (result.data?.isSuccess) {
      toast({
        title: result.data.message,
        duration: 2000,
      })

      const { queryKey } = activitiesQuery(semesterId)
      queryClient.invalidateQueries({ queryKey })

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
  }, [result, toast, semesterId, router])

  if (!activities || !activities.length)
    return <div className="text-muted-foreground">활동이 없습니다.</div>

  return (
    <div className="flex flex-wrap gap-2">
      {activities?.map((activity) => (
        <div key={activity.activityId}>
          <div className="flex items-center gap-1 rounded-full bg-input px-4 py-1.5 text-sm">
            <div>{activity.activityName}</div>
            <Cross2Icon
              onClick={() =>
                deleteActivity({ semesterId, activityId: activity.activityId })
              }
              className="h-4 w-4 hover:cursor-pointer hover:text-primary/60"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
