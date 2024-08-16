import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getPostsPaging } from '@/service/server/post'

type PostsParams = {
  postType: 'EVENT' | 'NOTICE'
  page: number
  size?: number
}

export const useGetPostsPaging = ({
  postType,
  page,
  size = 10,
}: PostsParams) => {
  return useQuery({
    queryKey: ['posts', postType, page],
    queryFn: () => getPostsPaging({ postType, page, size }),
    placeholderData: keepPreviousData,
  })
}
