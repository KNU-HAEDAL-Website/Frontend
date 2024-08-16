import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { getPostsPaging, getPostsSlider } from '@/service/server/post'

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

type PostsSliderParams = {
  page?: number
  size?: number
}

export const useGetPostsSlider = ({
  page = 0,
  size = 5,
}: PostsSliderParams) => {
  return useQuery({
    queryKey: ['posts', 'slider'],
    queryFn: () => getPostsSlider({ page, size }),
  })
}
