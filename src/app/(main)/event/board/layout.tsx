import { ReactNode } from 'react'

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

import { getPostsPaging } from '@/service/server/post'

const EventLayout = async ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()

  const postType = 'EVENT'
  const page = 0

  await queryClient.prefetchQuery({
    queryKey: ['posts', postType, page],
    queryFn: () => getPostsPaging({ postType, page }),
  })

  return (
    <div className="w-full max-w-screen-xl px-12 pb-20 pt-10 sm:px-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </div>
  )
}

export default EventLayout
