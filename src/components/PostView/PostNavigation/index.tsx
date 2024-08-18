'use client'

import { cn } from '@/lib/utils'

import {
  MobileNextPostNavigationButton,
  MobilePreviousPostNavigationButton,
} from './MobilePostNavigationButton'
import {
  NextPostNavigationButton,
  PreviousPostNavigationButton,
} from './PostNavigationButton'

type PostNavigationContent = {
  postId: number
  postTitle: string
}

type PostNavigationProps = {
  previous?: PostNavigationContent
  next?: PostNavigationContent
}

export const PostNavigation = ({ previous, next }: PostNavigationProps) => {
  return (
    <div className="w-full">
      <DefaultPostNavigation previous={previous} next={next} />
      <MobilePostNavigation
        previousId={previous?.postId}
        nextId={next?.postId}
      />
    </div>
  )
}

const DefaultPostNavigation = ({ previous, next }: PostNavigationProps) => {
  return (
    <div
      className={cn(
        'hidden justify-between md:flex',
        !previous && 'justify-end',
      )}
    >
      {previous && (
        <PreviousPostNavigationButton
          postId={previous.postId}
          postTitle={previous.postTitle}
        />
      )}
      {next && (
        <NextPostNavigationButton
          postId={next.postId}
          postTitle={next.postTitle}
        />
      )}
    </div>
  )
}

type MobilePostNavigationProps = {
  previousId?: number
  nextId?: number
}

const MobilePostNavigation = ({
  previousId,
  nextId,
}: MobilePostNavigationProps) => {
  return (
    <div className="flex justify-center gap-10 md:hidden">
      <MobilePreviousPostNavigationButton postId={previousId} />
      <MobileNextPostNavigationButton postId={nextId} />
    </div>
  )
}
