import { Card, CardContent } from '@/components/ui/card'

export const CardSkeleton = () => {
  return (
    <div className="flex justify-center pb-7">
      <Card className="w-full max-w-52 overflow-hidden xs:max-w-sm sm:max-w-xl">
        <CardContent className="flex aspect-video flex-col p-0">
          <div className="w-screen flex-1 animate-pulse bg-slate-50"></div>
          <div className="h-20 w-full bg-slate-100 p-4"></div>
        </CardContent>
      </Card>
    </div>
  )
}
