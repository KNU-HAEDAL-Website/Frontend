import { FieldValues, UseFormReturn } from 'react-hook-form'

import { ImageInput } from '@/components/ImageInput'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Seperator } from '@/components/ui/seperator'

import { PostFormField } from './PostFormField'
import { ActivityDateFieldDialog } from './PostFormField/ActivityDateFieldDialog'
import { PostContentFieldEditor } from './PostFormField/PostContentFieldEditor'

type CreatePostFormProps<T extends FieldValues> = {
  form: UseFormReturn<T>
  onSubmit: (values: T) => void
  isExecuting: boolean
}

export const CreatePostForm = <T extends FieldValues>({
  form,
  onSubmit,
  isExecuting,
}: CreatePostFormProps<T>) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <PostFormField name="postTitle" label="게시글 제목">
          {(field) => <Input {...field} />}
        </PostFormField>
        <ActivityDateFieldDialog />
        <Seperator />
        <div>게시글 내용 작성하기</div>
        <PostContentFieldEditor />
        <Seperator />
        <PostFormField name="imageFile" label="게시글 대표 사진">
          {(field) => <ImageInput field={field} />}
        </PostFormField>
        <div className="flex justify-end">
          <Button type="submit" disabled={isExecuting}>
            게시글 업로드
          </Button>
        </div>
      </form>
    </Form>
  )
}
