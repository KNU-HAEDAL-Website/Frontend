import { ReactNode } from 'react'

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

import { boardDetailQuery } from '@/service/data/boards'

type CreateBoardLayoutParams = {
  activityId: string
  boardId: string
}

type CreateBoardLayoutProps = {
  children: ReactNode
  params: CreateBoardLayoutParams
}

const CreateBoardLayout = async ({
  children,
  params,
}: CreateBoardLayoutProps) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    boardDetailQuery(Number(params.activityId), Number(params.boardId)),
  )

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}

export default CreateBoardLayout
