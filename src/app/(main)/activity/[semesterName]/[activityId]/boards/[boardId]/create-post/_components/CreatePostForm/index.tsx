'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Seperator } from '@/components/ui/seperator'
import { useToast } from '@/components/ui/use-toast'
import { CreatePost, CreatePostSchema } from '@/schema/post'
import { createActivityPostAction } from '@/service/server/post/create-post'

import { ActivityFormField } from '~activity/_components/ActivityFormField'
import { ActivityImageInput } from '~activity/_components/ActivityImageInput'

import { ActivityDateFieldDialog } from './ActivityDateFieldDialog'
import { PostContentFieldEditor } from './PostContentFieldEditor'

type CreatePostFormProps = {
  boardId: number
}

export const CreatePostForm = ({ boardId }: CreatePostFormProps) => {
  const { toast } = useToast()
  const router = useRouter()
  const pathName = usePathname()

  const basePath = pathName.split('/').slice(0, -1).join('/')

  const {
    execute: createPost,
    result,
    isExecuting,
  } = useAction(createActivityPostAction)

  const form = useForm<CreatePost>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      boardId,
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
    }
  }, [result])

  const onSubmit = (values: CreatePost) => {
    createPost(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <ActivityFormField name="postTitle" label="게시글 제목">
          {(field) => <Input {...field} />}
        </ActivityFormField>
        <ActivityDateFieldDialog />
        <Seperator />
        <div>게시글 내용 작성하기</div>
        <PostContentFieldEditor />
        <Seperator />
        <ActivityFormField name="imageFile" label="게시글 대표 사진">
          {(field) => <ActivityImageInput field={field} />}
        </ActivityFormField>
        <div className="flex justify-end">
          <Button type="submit" disabled={isExecuting}>
            게시글 업로드
          </Button>
        </div>
      </form>
    </Form>
  )
}
