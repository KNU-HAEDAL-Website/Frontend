import { ReactNode } from 'react'

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'

import { getSemesters } from '@/service/server/semester'

const ActivityLayout = async ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['semesters'],
    queryFn: getSemesters,
  })

  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-2 px-12 sm:px-20">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </div>
  )
}

export default ActivityLayout
