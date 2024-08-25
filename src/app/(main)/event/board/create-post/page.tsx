'use client'

import { ACCESS_ERROR_MESSAGE } from '@/constant/errorMessage'
import { useMyInfoStore } from '@/store/myInfo'

import { CreateEventPostForm } from './_components/CreateEventPostForm'
import { CreateEventPostHero } from './_components/CreateEventPostHero'

const CreateEventPost = () => {
  const { role } = useMyInfoStore((state) => state.getMyInfo())

  if (role !== '해구르르')
    throw new Error(ACCESS_ERROR_MESSAGE.UNAUTHORIZED_ERROR)

  return (
    <div className="flex flex-col gap-6">
      <CreateEventPostHero />
      <CreateEventPostForm />
    </div>
  )
}

export default CreateEventPost
