'use client'

import { useEffect, useState } from 'react'

import { queryClient } from '@/service/components/ReactQueryClientProvider'
import { useGetPostsPaging } from '@/service/data/post'
import { getPostsPaging } from '@/service/server/post'

export const EventPost = () => {
  const postType = 'EVENT'
  const [page, setPage] = useState(0)

  const { data, status, isPlaceholderData } = useGetPostsPaging({
    postType,
    page,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.nextPageToken) {
      queryClient.prefetchQuery({
        queryKey: ['posts', postType, page],
        queryFn: () => getPostsPaging({ postType, page: page + 1 }),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

  if (status === 'pending')
    return <div className="flex w-full justify-center">loading...</div>
  if (!data?.posts?.length)
    return <div className="flex w-full justify-center">게시글이 없습니다.</div>

  return (
    <div>
      {data.posts.map((post) => (
        <div key={post.postId}>{post.postTitle}</div>
      ))}
    </div>
  )
}
