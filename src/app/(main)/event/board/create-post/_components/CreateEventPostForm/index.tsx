'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { usePathname, useRouter } from 'next/navigation'

import { CreatePostForm } from '@/components/CreatePostForm'
import { useToast } from '@/components/ui/use-toast'
import { CreatePost, CreatePostSchema } from '@/schema/post'
import { createEventPostAction } from '@/service/server/post/create-post'

export const CreateEventPostForm = () => {
  const { toast } = useToast()
  const router = useRouter()
  const pathName = usePathname()

  const basePath = pathName.split('/').slice(0, -1).join('/')

  const {
    execute: createPost,
    result,
    isExecuting,
  } = useAction(createEventPostAction)

  const form = useForm<CreatePost>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      postTitle: '',
      postContent: '',
      imageFile: new File([], ''),
      activityDate: {
        start: undefined,
        end: undefined,
      },
    },
  })

  useEffect(() => {
    if (result.data?.isSuccess) {
      toast({
        title: result.data.message,
        duration: 3000,
      })
      router.push(basePath)
      return
    }

    if (result.data?.message) {
      toast({
        title: result.data.message,
        duration: 3000,
      })
    }
  }, [result, basePath, router, toast])

  return (
    <CreatePostForm<CreatePost>
      form={form}
      onSubmit={(values) => createPost(values)}
      isExecuting={isExecuting}
    />
  )
}
