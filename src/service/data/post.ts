import { keepPreviousData, useQuery } from '@tanstack/react-query'

import {
  getActivityPostsPaging,
  getPost,
  getPostsPaging,
  getPostsSlider,
} from '@/service/server/post'

type ActivityPostParams = {
  boardId: number
  page: number
  size?: number
}

export const useGetActivityPostsPaging = ({
  boardId,
  page,
  size = 10,
}: ActivityPostParams) => {
  return useQuery({
    queryKey: ['posts', boardId, page],
    queryFn: () => getActivityPostsPaging({ boardId, page, size }),
    placeholderData: keepPreviousData,
  })
}

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

type PostParams = {
  postId: number
}

export const useGetPost = ({ postId }: PostParams) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost({ postId }),
  })
}
