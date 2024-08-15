import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function EventCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      className="xs:max-w-sm w-full max-w-52 sm:max-w-xl xl:max-w-screen-xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video flex-col p-0">
                  <div className="flex w-full flex-1 items-center justify-center">
                    게시글 이미지
                  </div>
                  <div className="flex flex-col gap-2 bg-slate-100 p-4">
                    <div className="font-semibold">게시글 제목</div>
                    <div className="text-sm">게시글 내용</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex w-full justify-end pr-4">
        <Button variant="link" className="h-fit p-0 text-primary/60">
          더보기
        </Button>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
