import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { PostSlider } from '@/types/post'

type EventCarouselProps = {
  posts: PostSlider[]
}

export function EventCarousel({ posts }: EventCarouselProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      className="w-full max-w-52 xs:max-w-sm sm:max-w-xl"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.postId}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-video flex-col p-0">
                  <div className="flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      alt={post.postTitle}
                      src={post.postImageUrl}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-slate-100/90 p-2 text-xs font-semibold sm:text-sm lg:p-4 lg:text-base">
                    {post.postTitle}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex w-full justify-end pr-4">
        <Link href="/event/board">
          <Button variant="link" className="h-fit p-0 text-primary/60">
            더보기
          </Button>
        </Link>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
