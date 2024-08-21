import { useSearchParams } from 'next/navigation'

import { PaginationButtons } from '@/components/PaginationButtons'
import { PostTable } from '@/components/Table/PostTable'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { useGetActivityPostsPaging } from '@/service/data/post'

type ActivityPostListSectionProps = {
  boardId: number
}

export const ActivityPostListSection = ({
  boardId,
}: ActivityPostListSectionProps) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const page =
    Number(params.get('page')) > 0 ? Number(params.get('page')) - 1 : 0

  const { data, status } = useGetActivityPostsPaging({
    boardId,
    page,
  })

  if (status === 'pending')
    return <div className="flex w-full justify-center">loading...</div>

  if (!data) {
    throw new Error(DATA_ERROR_MESSAGES.POST_NOT_FOUND)
  }

  if (!data.posts.length) {
    return (
      <div className="flex flex-col items-center gap-6">
        <PostTable
          posts={data.posts}
          pageNumber={page}
          pageSize={data.pageInfo.pageSize}
        />
        <div>게시글이 없습니다.</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <PostTable
        posts={data.posts}
        pageNumber={page}
        pageSize={data.pageInfo.pageSize}
      />
      <PaginationButtons data={data} />
    </div>
  )
}
