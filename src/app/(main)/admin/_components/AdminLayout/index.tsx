import { ReactNode } from 'react'

import { Label } from '@/components/ui/label'

interface AdminLayoutProps {
  title: string
  children: ReactNode
}

export const AdminLayout = ({ title, children }: AdminLayoutProps) => {
  return (
    <div className="flex w-full flex-col gap-2 px-20 pt-6">
      <Label className="text-xl font-semibold">{title}</Label>
      <div className="w-full">{children}</div>
    </div>
  )
}
