'use client'

import { ReactNode } from 'react'

import { useRouter } from 'next/navigation'

import MainErrorFallback from '@/components/MainErrorFallback'
import ErrorBoundary from '@/service/components/error-boundary'

const CreateEvnetPostLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <ErrorBoundary
      onReset={() => router.refresh()}
      FallbackComponent={MainErrorFallback}
    >
      {children}
    </ErrorBoundary>
  )
}

export default CreateEvnetPostLayout
