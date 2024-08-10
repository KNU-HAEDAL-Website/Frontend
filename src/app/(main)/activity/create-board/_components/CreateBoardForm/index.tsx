'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { CreateBoard, CreateBoardSchema } from '@/schema/board'

import { CreateBoardFileField, CreateBoardInputField } from './CreateBoardField'
import { SelectMemberField } from './SelectMemberField'

export const CreateBoardForm = () => {
  const form = useForm<CreateBoard>({
    resolver: zodResolver(CreateBoardSchema),
    defaultValues: {
      boardName: '',
      boardIntro: '',
      imageUrl: new File([], ''),
      participants: [],
    },
  })

  const onSubmit = (values: CreateBoard) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 pb-10"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CreateBoardInputField
          name="boardName"
          label="게시판 제목"
          placeholder="게시판 제목을 입력해주세요"
        />
        <CreateBoardInputField
          name="boardIntro"
          label="게시판 소개"
          type="textarea"
          placeholder="게시판 소개글을 작성해주세요"
        />
        <CreateBoardFileField name="imageUrl" label="게시판 대표 사진" />
        <SelectMemberField name="participants" label="게시판 이용자" />
        <Button type="submit">테스트</Button>
      </form>
    </Form>
  )
}
