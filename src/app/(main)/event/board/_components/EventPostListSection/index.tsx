'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

import { PaginationButtons } from '@/components/PaginationButtons'
import { PostTable } from '@/components/Table/PostTable'
import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { useGetPostsPaging } from '@/service/data/post'
import { getPostsPaging } from '@/service/server/post'

export const EventPostListSection = () => {
  const postType = 'EVENT'

  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const page =
    Number(params.get('page')) > 0 ? Number(params.get('page')) - 1 : 0

  const { data, status, isPlaceholderData } = useGetPostsPaging({
    postType,
    page,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.nextPageToken) {
      queryClient.prefetchQuery({
        queryKey: ['posts', postType, page],
        queryFn: () => getPostsPaging({ postType, page }),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

  if (status === 'pending')
    return <div className="flex w-full justify-center">loading...</div>

  if (!data) {
    return <div>게시글이 없습니다.</div>
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
