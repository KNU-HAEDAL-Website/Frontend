'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Seperator } from '@/components/ui/seperator'
import { CreatePost, CreatePostSchema } from '@/schema/post'

import { ActivityFormField } from '~activity/_components/ActivityFormField'
import { ActivityImageInput } from '~activity/_components/ActivityImageInput'

import { ActivityDateFieldDialog } from './ActivityDateFieldDialog'

export const CreatePostForm = () => {
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

  const onSubmit = (form: CreatePost) => {
    console.log(form)
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
        <Seperator />
        <ActivityFormField name="imageFile" label="게시글 대표 사진">
          {(field) => <ActivityImageInput field={field} />}
        </ActivityFormField>
        <div className="flex justify-end">
          <Button type="submit">게시글 업로드</Button>
        </div>
      </form>
    </Form>
  )
}
