'use client'

import { ACCESS_ERROR_MESSAGE } from '@/constant/errorMessage'
import { useMyInfoStore } from '@/store/myInfo'
import { Role } from '@/types/user'

import { CreateActivityPostForm } from './_components/CreateActivityPostForm'
import { CreateActivityPostHero } from './_components/CreateActivityPostHero'

type CreatePostPageParams = {
  params: {
    activityId: string
    boardId: string
  }
}

const CreateActivityPostPage = ({ params }: CreatePostPageParams) => {
  const { role } = useMyInfoStore((state) => state.getMyInfo())

  if (!role?.includes(role as Role))
    throw new Error(ACCESS_ERROR_MESSAGE.UNAUTHORIZED_ERROR)

  return (
    <div className="flex flex-col gap-6 py-10">
      <CreateActivityPostHero
        activityId={Number(params.activityId)}
        boardId={Number(params.boardId)}
      />
      <CreateActivityPostForm boardId={Number(params.boardId)} />
    </div>
  )
}

export default CreateActivityPostPage
