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
import { usePostEditorStore } from '~create-post/_store/post-editor'

import { ActivityDateFieldDialog } from './ActivityDateFieldDialog'
import { PostContentFieldEditor } from './PostContentFieldEditor'

export const CreatePostForm = () => {
  const getPostContent = usePostEditorStore((state) => state.getPostContent)
  const clearPostContent = usePostEditorStore((state) => state.clearPostContent)
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

  const onSubmit = (values: CreatePost) => {
    console.log(values)
  }

  const onClick = () => {
    const storedContent = getPostContent()
    form.setValue('postContent', JSON.stringify(storedContent))
    clearPostContent()

    form.handleSubmit(onSubmit)()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => e.preventDefault()}
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
          <Button type="submit" onClick={onClick}>
            게시글 업로드
          </Button>
        </div>
      </form>
    </Form>
  )
}
