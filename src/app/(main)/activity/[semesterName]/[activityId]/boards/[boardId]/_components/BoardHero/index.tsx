import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useAction } from 'next-safe-action/hooks'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/use-toast'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { boardDetailQuery } from '@/service/data/boards'
import { deleteBoardAction } from '@/service/server/board/delete-board'
import { useMyInfoStore } from '@/store/myInfo'

import { ActivityBreadcrumb } from '~activity/_components/ActivityBreadcrumb'

import { BoardDetail } from './BoardDetail'
import { BoardHeroSkeleton } from './BoardHeroSkeleton'

type BoardHeroProps = {
  activityId: number
  boardId: number
}

export const BoardHero = ({ boardId, activityId }: BoardHeroProps) => {
  const { role } = useMyInfoStore((state) => state.getMyInfo())
  const { data: boardDetail, status } = useQuery(
    boardDetailQuery(activityId, boardId),
  )

  const {
    execute: deleteBoard,
    result,
    isExecuting,
  } = useAction(deleteBoardAction)
  const router = useRouter()
  const pathName = usePathname()
  const activityPath = pathName.split('/').slice(0, 4).join('/')
  const { toast } = useToast()

  useEffect(() => {
    if (result.data?.isSuccess) {
      toast({
        title: result.data.message,
        duration: 2000,
      })

      queryClient.invalidateQueries({ queryKey: ['boards', activityId] })
      router.push(activityPath)
      return
    }
  }, [result, router, toast, activityPath, activityId])

  if (status === 'pending') return <BoardHeroSkeleton />

  if (!boardDetail) throw new Error(DATA_ERROR_MESSAGES.BOARD_DETAIL_NOT_FOUND)

  return (
    <div className="flex flex-col">
      <Separator variant="dark" />
      <ActivityBreadcrumb
        navLinks={[]}
        pageName={`${boardDetail.boardName} 게시판`}
      />
      <BoardDetail board={boardDetail} />
      {role === '해구르르' && (
        <div className="flex justify-end">
          <Button
            variant="link"
            className="text-primary/60"
            onClick={() => deleteBoard({ boardId, activityId })}
            disabled={isExecuting}
          >
            게시판 삭제하기
          </Button>
        </div>
      )}
      <Separator variant="dark" />
    </div>
  )
}
