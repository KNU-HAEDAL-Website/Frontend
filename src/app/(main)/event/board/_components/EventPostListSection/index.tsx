'use client'

import { useSearchParams } from 'next/navigation'

import { PaginationButtons } from '@/components/PaginationButtons'
import { PostTable } from '@/components/PostTable'
import { Spinner } from '@/components/Spinner'
import { DATA_ERROR_MESSAGES } from '@/constant/errorMessage'
import { useGetPostsPaging } from '@/service/data/post'

export const EventPostListSection = () => {
  const postType = 'EVENT'

  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const page =
    Number(params.get('page')) > 0 ? Number(params.get('page')) - 1 : 0

  const { data, status } = useGetPostsPaging({
    postType,
    page,
  })

  if (status === 'pending')
    return (
      <div className="flex w-full justify-center">
        <Spinner />
      </div>
    )

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
