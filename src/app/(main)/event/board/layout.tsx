import { ReactNode } from 'react'

const EventLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-screen-xl px-12 pb-20 pt-10 sm:px-20">
      {children}
    </div>
  )
}

export default EventLayout
