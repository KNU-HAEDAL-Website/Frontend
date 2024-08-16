import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { useGetActivityPostsPaging } from '@/service/data/post'
import { getActivityPostsPaging } from '@/service/server/post'

type ActivityPostSectionProps = {
  boardId: number
}

export const ActivityPostSection = ({ boardId }: ActivityPostSectionProps) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const page =
    Number(params.get('page')) > 0 ? Number(params.get('page')) - 1 : 0

  const { data, status, isPlaceholderData } = useGetActivityPostsPaging({
    boardId,
    page,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.nextPageToken) {
      queryClient.prefetchQuery({
        queryKey: ['posts', boardId, page],
        queryFn: () => getActivityPostsPaging({ boardId, page }),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

  if (status === 'pending')
    return <div className="flex w-full justify-center">loading...</div>

  if (!data) {
    return <div>게시글이 없습니다.</div>
  }

  return (
    <div>
      {data.posts.map((post) => (
        <div>{post.postTitle}</div>
      ))}
    </div>
  )
}
