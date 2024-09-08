import { Spinner } from '@/components/Spinner'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export const CreateBoardSkeleton = () => {
  return (
    <div className="w-full pt-10">
      <div>
        <Separator variant="dark" />
        <Skeleton className="my-4 h-5 w-full" />
        <Separator variant="dark" />
      </div>
      <div className="flex w-full justify-center pt-6">
        <Spinner />
      </div>
    </div>
  )
}
