import { ReactNode, Suspense } from 'react'

const NoticeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-screen-xl px-12 pb-20 pt-10 sm:px-20">
      <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
    </div>
  )
}

export default NoticeLayout
